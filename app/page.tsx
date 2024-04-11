import Link from "next/link";

export default function Home() {
  return (
    <main className="p-2">
      <h1 className="text-3xl mb-4">Website Clones ⬇️</h1>
      <div className="flex flex-col text-xl font-bold">
        <Link href="netflix">
          <div className="bg-[rgb(229,9,20)] inline-flex items-center justify-center w-full h-20">
            Netflix
          </div>
        </Link>
      </div>
    </main>
  );
}
