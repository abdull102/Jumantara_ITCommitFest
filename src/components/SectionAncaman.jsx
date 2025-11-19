/* eslint-disable no-unused-vars */
import Container from "./Container";
import { motion } from "motion/react";

export default function SectionAncaman() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <Container id="generalthreats">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row md:justify-between md:items-center gap-6"
      >
        <motion.div
          variants={fadeLeft}
          className="flex flex-col gap-2 md:gap-4 xl:gap-6"
        >
          <h2 className="text-violet-400 text-sm xl:text-base uppercase font-medium">
            Ancaman Umum
          </h2>
          <h1 className="font-bold text-2xl xl:text-5xl xl:w-120">
            Kenali Taktik Penjahat Siber
          </h1>
        </motion.div>
        <motion.p
          variants={fadeRight}
          className="text-zinc-400 text-sm xl:text-base md:w-88 xl:w-110 2xl:w-140 md:text-right"
        >
          Semakin paham pola main mereka, semakin kecil peluang kamu kejebak.
          Ini empat modus yang paling sering muncul dan cara cepat terhindar
          dari jebakannya.
        </motion.p>
      </motion.div>

      {/* Bento Grid Top Section Container */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-4 mt-12"
      >
        {/* Phising */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-start gap-3 p-6 md:w-full xl:w-180 2xl:w-248 bg-zinc-800 rounded-xl"
        >
          <img src="/img/phising.svg" className="h-48" />
          <h3 className="font-semibold text-2xl 2xl:text-3xl mt-18">
            Phishing
          </h3>
          <p className="text-zinc-400 text-sm xl:text-base 2xl:text-lg">
            Pesan palsu yang mirip institusi resmi untuk nyolong kredensial.
            Segera cek domain & ejaan kalau menemukan pesan yang mencurigakan,
            jangan klik kalau ragu, akses layanan lewat situs resminya, dan
            aktifkan 2FA
          </p>
        </motion.div>

        {/* Kebocoran Data */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-start gap-3 p-6 md:w-full xl:flex-1 2xl:w-160 bg-zinc-800 rounded-xl"
        >
          <img src="/img/data.svg" className="h-48" />
          <h3 className="font-semibold text-2xl 2xl:text-3xl mt-18">
            Kebocoran Data
          </h3>
          <p className="text-zinc-400 text-sm xl:text-base 2xl:text-lg">
            Data pribadi ikut tersebar karena pelanggaran sistem. Pantau
            notifikasi keamanan, ganti sandi unik dan pakai email cadangan untuk
            sign up
          </p>
        </motion.div>
      </motion.div>

      {/* Bento Grid Bottom Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap items-center gap-4 mt-4"
      >
        <CardBottom
          img="social"
          title="Social Engineering"
          description="Manipulasi psikologis biar kamu nurut, iming-iming hadiah, urgensi palsu, atau nyaru jadi teman/atasan. Selalu verifikasi identitas via kanal kedua sebelum ngasih data"
        />

        <CardBottom
          img="malware"
          title="Malware"
          description="Software berbahaya yang nyusup lewat lampiran/tautan atau instalasi bajakan. Unduh dari sumber tepercaya, scan dulu, dan update sistem dan antivirus"
        />
      </motion.div>
    </Container>
  );

  function CardBottom({ title, description, img }) {
    const renderImg = () => {
      switch (img) {
        case "social":
          return <img src="/img/social.svg" className="h-48" />;
        case "malware":
          return <img src="/img/malware.svg" className="h-48" />;
        default:
          return null;
      }
    };
    return (
      <motion.div
        variants={fadeUp}
        className="flex flex-col items-start gap-3 p-6 md:w-full xl:flex-1 2xl:w-204 bg-zinc-800 rounded-xl"
      >
        {renderImg()}
        <h3 className="font-semibold text-2xl 2xl:text-3xl mt-18">{title}</h3>
        <p className="text-zinc-400 text-sm xl:text-base 2xl:text-lg">
          {description}
        </p>
      </motion.div>
    );
  }
}
