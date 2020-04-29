import * as fs from "fs";
import { taskify, TaskEither } from "fp-ts/lib/TaskEither";
import { taskEither, array } from "fp-ts";
import * as path from "path";
import { pipe } from "fp-ts/lib/pipeable";
import { flow } from "fp-ts/lib/function";

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

const main = pipe(
  readdir(es6dir, { withFileTypes: true }),
  taskEither.map(
    flow(
      array.filter((dirent) => dirent.isFile()),
      array.map((dirent) => path.resolve(es6dir, dirent.name))
    )
  ),
  taskEither.map(
    array.map((name) =>
      pipe(
        readfile(name, { encoding: "utf8" }),
        taskEither.chain(
          flow(replace(/fp-ts\/lib/g, "fp-ts/es6"), (data) =>
            writeFile(name, data)
          )
        )
      )
    )
  ),
  taskEither.chain(array.array.sequence(taskEither.taskEither))
);

main()
  .finally(() => process.exit(0))
  .catch(() => process.exit(1));
