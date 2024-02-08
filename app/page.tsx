import { PageBuilder } from "@/components/Page";

export default async function Home() {
  return (
    <main className="min-h-screen p-24">
      <PageBuilder path="/locations" />
    </main>
  );
}
