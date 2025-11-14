import { Link } from "react-router-dom";
import MenuIcon from "../../public/icons/Menu";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-4 lg:py-0 sticky top-4 z-50 lg:-mt-6">
      <nav className="hidden lg:flex justify-center items-center gap-48 my-6">
        <Link to="/">
          <img src="/logo.svg" className="h-10" />
        </Link>
        <div className="flex items-center gap-2 p-1.5 bg-zinc-800 rounded-full">
          <NavLink to="/">Pengenalan</NavLink>
          <NavLink to="/prevention">Pencegahan</NavLink>
          <NavLink to="/about">Tentang</NavLink>
        </div>

        <HashLink
          smooth
          to="/prevention/#simulation"
          className="px-6 py-2 rounded-full bg-violet-500 hover:bg-violet-600 font-medium"
        >
          <span>Simulasi</span>
        </HashLink>
      </nav>

      {/* Mobile Navbar */}
      <motion.nav
        className={`lg:hidden flex justify-between items-center mx-4 bg-zinc-800 px-6 py-2 ${
          open ? "rounded-t-2xl" : "rounded-full"
        }`}
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
      >
        <Link to="/">
          <img src="/logo.svg" className="h-8" />
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className={` p-2 ${
            open ? "bg-zinc-700/80 rounded-xl" : ""
          } transition-transform duration-300`}
        >
          <MenuIcon className="h-5 text-violet-400" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden mx-4 p-4 bg-zinc-800 rounded-b-2xl -mt-2"
            initial={{ opacity: 0, y: -8, scaleY: 0, originY: 0 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
          >
            <div className="flex flex-col">
              <Link
                to="/"
                className="px-4 py-2 rounded-full hover:bg-violet-500"
              >
                Pengenalan
              </Link>
              <Link
                to="/prevention"
                className="px-4 py-2 rounded-full hover:bg-violet-500"
              >
                Pencegahan
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 rounded-full hover:bg-violet-500"
              >
                Tentang
              </Link>

              <HashLink
                smooth
                to="/prevention/#simulation"
                className="mt-6 px-6 py-2 text-center rounded-xl bg-violet-500 hover:bg-violet-600 font-medium"
              >
                <span>Simulasi</span>
              </HashLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );

  function NavLink({ to, children }) {
    return (
      <Link
        to={to}
        className="px-6 py-1.5 hover:bg-violet-500 hover:font-medium rounded-full"
      >
        {children}
      </Link>
    );
  }
}
