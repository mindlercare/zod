// @ts-ignore TS6133
import { expect } from "https://deno.land/x/expect@v0.2.6/mod.ts";
const test = Deno.test;

import * as z from "../index.ts";

test("name", () => {
  const displayName = "myDisplayName";
  const schema = z.string().name(displayName);
  expect(schema.displayName).toEqual(displayName);
});
