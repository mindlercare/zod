// @ts-ignore TS6133
import { expect, test } from "@jest/globals";

import * as z from "../index";

test("name", () => {
  const displayName = "myDisplayName";
  const schema = z.string().name(displayName);
  expect(schema.displayName).toEqual(displayName);
});
