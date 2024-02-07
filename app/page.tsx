import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

export default async function Home() {
  const restResult = await directus.request(readItems("page"));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello
      <pre>{JSON.stringify(restResult, null, 2)}</pre>
    </main>
  );
}
