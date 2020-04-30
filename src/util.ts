/**
 * @summary
 * Cleans a record to be displayed like an object literal.
 */
export type RecordClean<T extends Record<string, any>> = {
  [P in keyof T]: T[P];
};
