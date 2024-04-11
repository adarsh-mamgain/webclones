import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WebClones",
  description: "WebClones of WebSite :) Made by @adarsh-mamgain",
  authors: [{ name: "Adarsh Mamgain", url: "https://x.com/adarsh_mamgain" }],
  openGraph: {
    title: "WebClones",
    description: "WebClones of WebSite :) Made by @adarsh-mamgain",
    siteName: "Webtools",
    images: "https://webclones.vercel.app/public/icon.svg",
  },
  twitter: {
    site: "https://x.com/adarsh_mamgain",
    creator: "Adarsh Mamgain",
    creatorId: "adarsh_mamgain",
    description: "WebClones of WebSite :) Made by @adarsh-mamgain",
    title: "WebClones",
    images: "https://webclones.vercel.app/public/icon.svg",
  },
  robots: "index, follow",
};

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-3xl mb-4">Website Clones ⬇️</h1>
      <div className="flex flex-col text-xl font-bold">
        <Link href="netflix">
          <div className="bg-[rgb(229,9,20)] inline-flex items-center justify-center w-full h-20">
            Netflix
          </div>
        </Link>
      </div>

      <div className="absolute bottom-10 text-green-300">
        <p>
          Made by <a href="https://x.com/adarsh_mamgain">@adarsh_mamgain</a>
        </p>
      </div>
    </main>
  );
}
