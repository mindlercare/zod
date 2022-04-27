// @ts-ignore TS6133
import { expect } from "https://deno.land/x/expect@v0.2.6/mod.ts";
const test = Deno.test;

import * as z from "../index.ts";

test("localize", () => {
  const localized = true;
  const schema = z.string().localize(localized);
  expect(schema.localized).toEqual(localized);
});
