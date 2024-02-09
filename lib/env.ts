import { z } from "zod";

const envSchema = z.object({
  DIRECTUS_URL: z.string().url(),
  DIRECTUS_TOKEN: z.string().length(32),
});

export type Env = z.infer<typeof envSchema>;

const env = envSchema.parse(process.env);

export default env;
