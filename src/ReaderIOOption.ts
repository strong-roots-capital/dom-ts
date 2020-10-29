/**
 * This module should be ported to and replaced with `ReaderIOOption` in `fp-ts-contrib`.
 *
 * @since 8.1.0
 */
// eslint-disable-next-line
import { reader as R, readerT } from "fp-ts"
import { IOOption as IOO } from "fp-ts-contrib"
/**
 * @since 8.1.0
 */
export const URI = "ReaderIOOption"

/**
 * @since 8.1.0
 */
export type URI = typeof URI

/**
 * @since 8.1.0
 */
export interface ReaderIOOption<R, A> {
  (r: R): IOO.IOOption<A>
}

const M = readerT.getReaderM(IOO.ioOption)

/**
 * @since 8.1.0
 */
export const ask: <R>() => ReaderIOOption<R, R> = M.ask

/**
 * @since 8.1.0
 */
export const asks: <R, A>(f: (r: R) => A) => ReaderIOOption<R, A> = M.asks

/**
 * @since 8.1.0
 */
export const fromIOOption: <R, A>(ma: IOO.IOOption<A>) => ReaderIOOption<R, A> =
  M.fromM

/**
 * @since 8.1.0
 */
export const fromReader: <R, A>(r: R.Reader<R, A>) => ReaderIOOption<R, A> =
  M.fromReader

/**
 * @since 8.1.0
 */
export const ap = <R, A, B>(mab: ReaderIOOption<R, (a: A) => B>) => (
  fa: ReaderIOOption<R, A>
): ReaderIOOption<R, B> => M.ap(mab, fa)

/**
 * @since 8.1.0
 */
export const chain = <R, A, B>(f: (a: A) => ReaderIOOption<R, B>) => (
  fa: ReaderIOOption<R, A>
): ReaderIOOption<R, B> => M.chain(fa, f)

/**
 * @since 8.1.0
 */
export const local = <R, A, Q>(f: (d: Q) => R) => (
  fa: ReaderIOOption<R, A>
): ReaderIOOption<Q, A> => M.local(fa, f)

/**
 * @since 8.1.0
 */
export const map = <A, B>(f: (a: A) => B) => <R>(
  fa: ReaderIOOption<R, A>
): ReaderIOOption<R, B> => M.map(fa, f)
