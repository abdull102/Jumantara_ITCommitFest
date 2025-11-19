/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./Container";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function HeroPrevention() {
  const { scrollYProgress } = useScroll();
  const yGrid = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacityGrid = useTransform(scrollYProgress, [0, 1], [0.8, 0.3]);

  return (
    <Container className="relative flex justify-center items-center">
      <motion.img
        src="/img/grid.svg"
        style={{ y: yGrid, opacity: opacityGrid }}
        className="absolute top-58 md:top-64 xl:top-78 inset-0 z-0 w-full h-full object-cover pointer-events-none opacity-80"
      />

      <motion.div
        className="flex flex-col justify-center items-center mx-4 text-center relative z-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              staggerChildren: 0.16,
            },
          },
        }}
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="font-medium text-lg xl:text-xl text-violet-400"
        >
          Kampanye Literasi Digital
        </motion.h2>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 28, scale: 0.96 },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.75 },
            },
          }}
          className="font-bold text-4xl xl:text-6xl mt-4 xl:w-180"
        >
          Kenali Lebih Jauh Tentang Ancaman Siber
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 28 },
            show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
          }}
          className="mt-4 text-sm xl:text-lg text-zinc-400 md:w-140 xl:w-160"
        >
          Pelajari cara menjaga privasi, mengenali penipuan, dan membangun
          kebiasaan digital yang sehat. Teknologi untuk memberdayakan bukan
          membahayakan
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 32 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className="flex items-center gap-4 mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="px-4 xl:px-8 py-2.5 xl:py-3 rounded-xl bg-violet-500 hover:bg-violet-600 cursor-pointer"
          >
            <HashLink smooth to="/prevention/#simulation">
              Kenali Sekarang
            </HashLink>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="px-4 xl:px-8 py-2.5 xl:py-3 rounded-xl border-[1.5px] border-zinc-700 hover:bg-zinc-700 cursor-pointer"
          >
            <HashLink smooth to="/#introduction">Pelajari Dari Awal</HashLink>
          </motion.button>
        </motion.div>
      </motion.div>
    </Container>
  );
}
