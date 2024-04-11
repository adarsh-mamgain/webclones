import { Metadata } from "next";
import "./netflix.css";
import Link from "next/link";
import Image from "next/image";
import netflixTv from "../../public/netflix/tv.png";
import download from "../../public/netflix/download.jpeg";

export const metadata: Metadata = {
  title: "Netflix India - Watch TV Shows Online, Watch Movies Online",
  description: "Made by Adarsh Mamgain",
};

export default function Netflix() {
  const brandColor = "[rgb(229,9,20)]";
  return (
    <main>
      <header className="bg-black text-center p-6">
        <nav className="h-max flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <svg
                viewBox="0 0 111 30"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                fill="rgb(229,9,20)"
                width={"89px"}
                height={"24px"}
              >
                <g>
                  <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                </g>
              </svg>
            </Link>
          </div>
          <div>
            {/* <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-4z3qvp e1svuwfo1"
              data-name="Languages"
              aria-labelledby=":R135dajalalbd:"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                fill="currentColor"
              ></path>
            </svg> */}
            <select className="bg-transparent text-white text-sm border border-[#808080b3] px-4 py-1 rounded">
              <option value="lang">Eng</option>
              <option value="lang">हिन्दी</option>
            </select>
            {/* <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="default-ltr-cache-4z3qvp e1svuwfo1"
              data-name="CaretDown"
              aria-labelledby=":R175dajalalbd:"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                fill="currentColor"
              ></path>
            </svg> */}

            <Link
              role="button"
              href=""
              className={`bg-${brandColor} text-sm px-4 py-1.5 ml-2 rounded`}
            >
              Sign In
            </Link>
          </div>
        </nav>

        <section>
          <h1 className="text-[32px] font-bold leading-10 mt-[70px]">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-lg mt-4 leading-6">
            Watch anywhere. Cancel anytime.
          </p>
          <form action="" className="px-5">
            <h3 className="text-lg mt-6">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div>
              {/* <label htmlFor="email">Email address</label> */}
              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="bg-transparent border border-[#808080b3] rounded px-6 py-3 mt-4"
              />
            </div>
            <button
              className={`bg-${brandColor} inline-flex justify-between items-center space-x-4 bg-netflix text-lg font-bold rounded px-5 py-2 mt-4`}
            >
              Get Started
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-mirrorinrtl="true"
                  className="default-ltr-cache-4z3qvp e1svuwfo1"
                  data-name="ChevronRight"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </form>
        </section>
      </header>

      <main className="text-center flex min-h-screen flex-col items-center justify-between">
        <section className="py-14 bg-black mt-2 px-6">
          <div className="pb-6">
            <h2 className="text-[32px] font-bold leading-10 mb-5">
              Enjoy on your TV
            </h2>
            <p className="text-lg mt-4 leading-6">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div>
            <Image src={netflixTv} alt="tv" priority />
            <video className="" autoPlay muted loop>
              <source
                src="../../public/netflix/video-tv.mv4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>

        <section className="flex flex-col-reverse py-14 bg-black mt-2 px-6">
          <div>
            <Image src={download} alt="download" />
          </div>
          <div>
            <h2 className="text-[32px] font-bold leading-10 mb-5">
              Download your shows to watch offline
            </h2>
            <p className="text-lg mt-4 leading-6">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </section>

        <section className="flex flex-col-reverse py-14 bg-black mt-2 px-6">
          <div>
            <div>
              {/* <Image src="/netflix/download.jpeg" alt="download" fill /> */}
            </div>
          </div>
          <div>
            <h2 className="text-[32px] font-bold leading-10 mb-5">
              Watch everywhere
            </h2>
            <p className="text-lg mt-4 leading-6">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </section>

        <section className="flex flex-col-reverse py-14 bg-black mt-2 px-6">
          <div>
            <div>{/* <Image src="/netflix/kids.png" alt="kids" fill /> */}</div>
          </div>
          <div>
            <h2 className="text-[32px] font-bold leading-10 mb-5">
              Create profiles for kids
            </h2>
            <p className="text-lg mt-4 leading-6">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </section>

        <section className="flex flex-col py-14 bg-black mt-2 px-6">
          <h2 className="text-[32px] font-bold leading-10 mb-5">
            Frequently Asked Questions
          </h2>
          <form action="" className="px-5">
            <h3 className="text-lg mt-6">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div>
              {/* <label htmlFor="email">Email address</label> */}
              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="bg-transparent border border-[#808080b3] rounded px-6 py-3 mt-4"
              />
            </div>
            <button
              className={`bg-${brandColor} inline-flex justify-between items-center space-x-4 bg-netflix text-lg font-bold rounded px-5 py-2 mt-4`}
            >
              Get Started
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-mirrorinrtl="true"
                  className="default-ltr-cache-4z3qvp e1svuwfo1"
                  data-name="ChevronRight"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </form>
        </section>
      </main>

      <footer className="flex flex-col py-5 bg-black text-white/70 mt-2 px-6">
        <p>
          Questions? Call{" "}
          <a href="tel:000-800-919-1694" className="underline">
            000-800-919-1694
          </a>
        </p>
        <div>
          <ul className="grid grid-cols-2 gap-3 text-sm py-5 underline">
            <li>FAQ</li>
            <li>Help Centre</li>
            <li>Account</li>
            <li>Media Centre</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Ways to Watch</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
            <li>Speed Test</li>
            <li>Legal Notices</li>
            <li>Only on Netflix</li>
          </ul>
        </div>
        <div>
          <select className="bg-transparent text-white text-sm border border-[#808080b3] px-4 py-1 rounded">
            <option value="lang">English</option>
            <option value="lang">हिन्दी</option>
          </select>
        </div>
        <div className="mt-5 mb-3">Netflix India</div>
      </footer>
    </main>
  );
}
{
  /* <Image
  alt="Mountains"
  src={mountains}
  placeholder="blur"
  quality={100}
  fill
  sizes="100vw"
  style={{
    objectFit: 'cover',
  }}
/> */
}