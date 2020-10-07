// eslint-disable-next-line
import { reader as R, readerT } from "fp-ts"
import { IOOption as IOO } from "fp-ts-contrib"

export const URI = "ReaderIOOption"
export type URI = typeof URI

export interface ReaderIOOption<R, A> {
  (r: R): IOO.IOOption<A>
}

const M = readerT.getReaderM(IOO.ioOption)

export const ask: <R>() => ReaderIOOption<R, R> = M.ask
export const asks: <R, A>(f: (r: R) => A) => ReaderIOOption<R, A> = M.asks
export const fromIOOption: <R, A>(ma: IOO.IOOption<A>) => ReaderIOOption<R, A> =
  M.fromM
export const fromReader: <R, A>(r: R.Reader<R, A>) => ReaderIOOption<R, A> =
  M.fromReader

export const ap = <R, A, B>(mab: ReaderIOOption<R, (a: A) => B>) => (
  fa: ReaderIOOption<R, A>
): ReaderIOOption<R, B> => M.ap(mab, fa)

export const chain = <R, A, B>(f: (a: A) => ReaderIOOption<R, B>) => (
  fa: ReaderIOOption<R, A>
): ReaderIOOption<R, B> => M.chain(fa, f)

export const local = <R, A, Q>(f: (d: Q) => R) => (
  fa: ReaderIOOption<R, A>
): ReaderIOOption<Q, A> => M.local(fa, f)

export const map = <A, B>(f: (a: A) => B) => <R>(
  fa: ReaderIOOption<R, A>
): ReaderIOOption<R, B> => M.map(fa, f)
