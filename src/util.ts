export const fromIterable = <T>(iterable: Iterable<T> | ArrayLike<T>): T[] =>
  Array.from(iterable);
