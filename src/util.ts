/**
 * @since 8.1.0
 */

/**
 * @summary
 * Type safe implementation of `Array.from`.
 *
 * @category Constructors
 * @since 8.1.0
 */
export function fromIterable<T>(
  iterable: Iterable<T> | ArrayLike<T>
): Array<T> {
  return Array.from(iterable)
}

/**
 * @summary
 * Type safe implementation of `instanceof` operator.
 *
 * @category Constructors
 * @since 8.1.0
 */
// eslint-disable-next-line
export function instanceOf<A extends Function>(right: A) {
  return <B>(left: B): left is Extract<B, A> => left instanceof right
}
