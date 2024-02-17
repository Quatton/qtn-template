import { parse } from "valibot";
import { exampleSchema } from "~/utils/schema/example";

export default defineEventHandler(async (event) => {
  const { name } = parse(exampleSchema, await readBody(event));

  return {
    message: "Hello, " + name + "!",
  };
});
