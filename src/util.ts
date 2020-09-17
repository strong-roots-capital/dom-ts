export function fromIterable<T>(iterable: Iterable<T> | ArrayLike<T>): T[] {
  return Array.from(iterable)
}
