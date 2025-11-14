/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Container from "./Container";

export default function HeroAbout() {
  const titleWords = ["Mengenal", "Keamanan", "Digital"];

  const wordVariant = {
    hidden: { opacity: 0, y: 28 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        delay: i * 0.22,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Container className="flex flex-col justify-center items-center">
      <motion.div
        className="flex flex-col justify-center items-center mx-4 text-center relative z-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.2,
              ease: "easeOut",
            },
          },
        }}
      >
        {/* Subjudul */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut", delay: 0.2 },
            },
          }}
          className="font-medium text-lg lg:text-xl text-violet-400"
        >
          Tentang Kami
        </motion.h2>

        {/* Judul */}
        <h1 className="font-bold text-4xl lg:text-6xl mt-4 flex flex-wrap justify-center gap-2">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariant}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Deskripsi */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 28 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.1,
                ease: "easeOut",
                delay: 0.9,
              },
            },
          }}
          className="mt-4 text-sm lg:text-lg text-zinc-400 lg:w-200"
        >
          Website ini hadir untuk meningkatkan kesadaran keamanan digital dengan
          menyajikan informasi, contoh ancaman, dan panduan pencegahan yang
          mudah dipahami
        </motion.p>
      </motion.div>

      <img src="/img/circularAbout.svg" className="mt-8 opacity-80 md:opacity-50" />
    </Container>
  );
}
