import { array, either, taskEither } from "fp-ts";
import { flow, identity } from "fp-ts/lib/function";
import { IO } from "fp-ts/lib/IO";
import { pipe } from "fp-ts/lib/pipeable";
import { TaskEither, taskify } from "fp-ts/lib/TaskEither";
import * as fs from "fs";
import * as path from "path";

// get all files in dist/es6
// replace `fp-ts/lib` with `fp-ts/es6`
// @todo recursively read into directories.

const replace = (a: RegExp, b: string) => (c: string) => c.replace(a, b);

const readdir: (
  path: fs.PathLike,
  config: { withFileTypes: true }
) => TaskEither<NodeJS.ErrnoException, fs.Dirent[]> = taskify(fs.readdir);

//@ts-ignore
const readfile: (
  path: fs.PathLike | number,
  options: { encoding: string }
) => TaskEither<NodeJS.ErrnoException, string> = taskify(fs.readFile);

const writeFile = taskEither.tryCatchK(
  (destination: string, data: any) =>
    new Promise((resolve, reject) => {
      fs.writeFile(destination, data, (error) =>
        error === null ? resolve() : reject(error)
      );
    }),
  (a) => a as NodeJS.ErrnoException
);

const es6dir = path.resolve(__dirname, "../dist/es6");

/** Reads a file from path, replaces with the regex, writes the file. */
const readAndWrite = (name: string) =>
  pipe(
    readfile(name, { encoding: "utf8" }),
    taskEither.chain(
      flow(replace(/fp-ts\/lib/g, "fp-ts/es6"), (data) => writeFile(name, data))
    )
  );

const isFile = (dirent: fs.Dirent) => dirent.isFile();
const isDirectory = (dirent: fs.Dirent) => dirent.isDirectory();

const mapper = (dir: string) => (dirent: fs.Dirent) =>
  pipe(path.resolve(dir, dirent.name));

const effect = <T>(cb: (a: T) => IO<void>) => (a: T): T => {
  cb(a)();
  return a;
};

/**
 * Recursively reads into directories
 */
const read: (dir: string) => TaskEither<NodeJS.ErrnoException, string[]> = (
  dir
) =>
  pipe(
    readdir(dir, { withFileTypes: true }),
    taskEither.chain(
      flow(
        array.filter((a) => isFile(a) || isDirectory(a)),
        array.map(
          flow(
            either.fromPredicate(isFile, identity),
            either.mapLeft((a) => pipe(a, mapper(dir), read)),
            either.fold(
              (a) => a,
              (a) =>
                taskEither.right<NodeJS.ErrnoException, string[]>([
                  mapper(dir)(a),
                ])
            )
          )
        ),
        array.array.sequence(taskEither.taskEither),
        taskEither.map(array.flatten)
      )
    )
  );

const main = pipe(
  read(es6dir),
  taskEither.map(
    effect((directories) => () => {
      console.log("Going through the following files,");
      console.log("Converting 'fp-ts/lib' to 'fp-ts/es6':");
      directories.forEach((directory) =>
        console.log("- " + path.relative(es6dir, directory))
      );
    })
  ),
  taskEither.map(array.map(readAndWrite)),
  taskEither.chain(array.array.sequence(taskEither.taskEither))
);

main()
  .finally(() => process.exit(0))
  .catch(() => process.exit(1));
