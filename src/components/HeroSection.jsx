import { Link } from "react-router-dom";
import Container from "./Container";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

export default function HeroSection() {
  const title = "Tetap Aman, Berpikir Cerdas Lindungi Identitas".split(" ");

  const wordVariant = {
    hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <Container className="flex flex-col md:flex-row justify-between md:items-center overflow-clip">
      <div className="z-10">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          }}
          className="font-medium text-lg xl:text-xl text-violet-400"
        >
          Kampanye Literasi Digital
        </motion.h2>

        <h1 className="font-bold text-3xl xl:text-6xl mt-4 leading-snug 2xl:w-200">
          {title.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariant}
              initial="hidden"
              animate="visible"
              custom={i}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="mt-4 text-sm xl:text-lg text-zinc-400 md:w-130 xl:w-160"
        >
          Pelajari cara menjaga privasi, mengenali penipuan, dan membangun
          kebiasaan digital yang sehat. Teknologi untuk memberdayakan bukan
          membahayakan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="flex items-center gap-4 mt-6 xl:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            <HashLink
              smooth
              to="#introduction"
              className="px-4 py-2.5 xl:px-8 xl:py-3 text-sm xl:text-base rounded-xl bg-violet-500 hover:bg-violet-600 transition"
            >
              Pelajari lebih lanjut
            </HashLink>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            <HashLink
              smooth
              to="/prevention/#simulation"
              className="px-4 py-2.5 xl:px-8 xl:py-3 text-sm xl:text-base rounded-xl border-[1.5px] border-zinc-700 hover:bg-zinc-50 hover:text-violet-500 transition"
            >
              Lihat Tools dan Layanan
            </HashLink>
          </motion.button>
        </motion.div>
      </div>

      <motion.img
        src="/img/circular.svg"
        className="animate-pulse md:w-96 2xl:w-120 -mt-32 md:mt-0"
        initial={{ opacity: 0, scale: 0.8, y: 60 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4,
          },
        }}
      />
    </Container>
  );
}
