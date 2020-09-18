export function fromIterable<T>(iterable: Iterable<T> | ArrayLike<T>): T[] {
  return Array.from(iterable)
}

export function instanceOf<A extends Function>(right: A) {
  return <B>(left: B): left is Extract<B, A> => left instanceof right
}
