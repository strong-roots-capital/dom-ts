import { eq } from "fp-ts";

export const eqObjectIs: eq.Eq<Object> = eq.fromEquals(Object.is);
