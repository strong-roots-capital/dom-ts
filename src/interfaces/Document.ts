import { option as O } from "fp-ts"
import * as RIO from "fp-ts-contrib/ReaderIO"
import { pipe } from "fp-ts/function"

export function getElementById(id: string): RIO.ReaderIO<Document, O.Option<HTMLElement>> {
  return (document) => () => pipe(document.getElementById(id), O.fromNullable)
}
