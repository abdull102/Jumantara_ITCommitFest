import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 xl:px-16 pt-4 md:pt-8 xl:pt-16 xl:pb-72 overflow-clip relative flex flex-col xl:flex-row justify-center items-center drop-shadow-2xl drop-shadow-violet-200 bg-zinc-900 rounded-t-4xl">
      <section className="p-6 md:p-8 xl:p-12 bg-zinc-900/40 xl:bg-zinc-900 border border-zinc-700/80 rounded-2xl w-full shadow-2xl shadow-zinc-700/60 z-20">
        <article className="flex flex-col xl:flex-row justify-between xl:items-center">
          {/* Left  Section */}
          <div>
            <div className="xl:w-98 2xl:w-130">
              <img src="/logo.svg" className="xl:h-12" />
              <p className="mt-4 xl:mt-6 text-zinc-400 text-sm xl:text-base">
                KnowHack membantu meningkatkan kesadaran keamanan digital
                melalui informasi dan contoh
              </p>
            </div>

            {/* Sosmed */}
            <div className="flex items-center gap-2 mt-6">
              <a
                target="blank"
                href="https://www.instagram.com/"
                className="hover:scale-105 transition-all duration-300 text-violet-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" stroke-width="1">
                    <path
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"
                    />
                    <path
                      stroke-width="1.5"
                      d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.508 6.5h-.01"
                    />
                  </g>
                </svg>
              </a>
              <a
                target="blank"
                href="https://www.instagram.com/"
                className="hover:scale-105 transition-all duration-300 text-violet-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
                  />
                </svg>
              </a>
              <a
                target="blank"
                href="https://github.com/"
                className="hover:scale-105 transition-all duration-300 text-violet-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap justify-between xl:justify-normal gap-4 xl:gap-24 mt-12 xl:mt-0">
            <ul>
              <h2 className="font-medium xl:text-lg text-violet-400 mb-2 xl:mb-4">
                Pengenalan
              </h2>
              <div className="text-light text-zinc-400 flex flex-col gap-1">
                <HashLink
                  smooth
                  to="/#introduction"
                  className="hover:text-zinc-50"
                >
                  Literasi Digital
                </HashLink>
                <HashLink
                  smooth
                  to="/#generalthreats"
                  className="hover:text-zinc-50"
                >
                  Ancaman Umum
                </HashLink>
                <HashLink
                  smooth
                  to="/#goodpractices"
                  className="hover:text-zinc-50"
                >
                  Praktik Baik
                </HashLink>
              </div>
            </ul>

            <ul>
              <h2 className="font-medium xl:text-lg text-violet-400 mb-2 xl:mb-4">
                Pencegahan
              </h2>
              <div className="text-light text-zinc-400 flex flex-col gap-1">
                <HashLink
                  smooth
                  to="/prevention/#simulation"
                  className="hover:text-zinc-50"
                >
                  Simulasi Serangan
                </HashLink>
                <HashLink
                  smooth
                  to="/prevention/#tools"
                  className="hover:text-zinc-50"
                >
                  Tools & Layanan
                </HashLink>
                <HashLink
                  smooth
                  to="/prevention/#commitment"
                  className="hover:text-zinc-50"
                >
                  Komitmen
                </HashLink>
              </div>
            </ul>

            <ul>
              <h2 className="font-medium xl:text-lg text-violet-400 mb-2 xl:mb-4">
                Tentang
              </h2>
              <div className="text-light text-zinc-400 flex flex-col gap-1">
                <HashLink smooth to="/about" className="hover:text-zinc-50">
                  Tentang Kami
                </HashLink>
                <HashLink
                  smooth
                  to="/about/#faq"
                  className="hover:text-zinc-50"
                >
                  Tanya Jawab
                </HashLink>
              </div>
            </ul>
          </div>
        </article>
        <div className="flex justify-between items-center pt-6 xl:pt-8 border-t border-zinc-700/80 mt-6 xl:mt-24">
          <p className="text-xs xl:text-sm text-zinc-400">
            © 2025 Knowhack. Jumantara
          </p>

          <div className="flex">
            <Link
              to="/license"
              className="text-xs xl:text-sm text-zinc-400 hover:text-zinc-50 mr-4"
            >
              License
            </Link>
            <Link
              to="#"
              className="text-xs xl:text-sm text-zinc-400 hover:text-zinc-50 mr-4"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
      <h1 className="font-semibold text-[24rem] -bottom-58 absolute bg-linear-to-b from-zinc-50 to-zinc-900 bg-clip-text text-transparent opacity-25">
        Knowhack
      </h1>
    </footer>
  );
}
