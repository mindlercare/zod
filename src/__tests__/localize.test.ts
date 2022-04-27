// @ts-ignore TS6133
import { expect, test } from "@jest/globals";

import * as z from "../index";

test("localize", () => {
  const localized = true;
  const schema = z.string().localize(localized);
  expect(schema.localized).toEqual(localized);
});
