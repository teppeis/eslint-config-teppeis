/**
 * Assert that the given value is not null or undefined.
 */
export function nonNull<T>(x: T): NonNullable<T> {
  if (x == null) {
    throw new Error("Unexpected null or undefined");
  }
  return x;
}
