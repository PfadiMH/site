import { createDirectus, rest, staticToken } from "@directus/sdk";
import env from "./env";
import type { CustomDirectusTypes } from "./directus-types";

const directus = createDirectus<CustomDirectusTypes>(env.DIRECTUS_URL)
  .with(rest())
  .with(staticToken(env.DIRECTUS_TOKEN));

export default directus;
