/**
 * Wraps a promise or function and returns a result object with discriminated union
 * @param input A promise or function that returns a promise/value
 * @returns A tuple [value, error] where value is the result or null, and error is undefined or the error
 * @category promise
 */
export async function tryCatch<T, E = Error>(
  input: Promise<T> | (() => Bun.MaybePromise<T>),
) {
  try {
    const value: T = typeof input === "function" ? await input() : await input;
    return [value, undefined] as const;
  } catch (error) {
    return [null, error as E] as const;
  }
}
