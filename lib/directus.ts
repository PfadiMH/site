import { createDirectus, rest, staticToken } from "@directus/sdk";
import env from "../app/env";
import type { Schema } from "./directus.schema";

const directus = createDirectus<Schema>(env.DIRECTUS_URL)
  .with(rest())
  .with(staticToken(env.DIRECTUS_TOKEN));

export default directus;
