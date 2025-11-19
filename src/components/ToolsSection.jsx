/* eslint-disable no-unused-vars */
import Container from "./Container";
import { motion } from "motion/react";

export default function ToolsSection() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <Container id="tools">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 xl:mt-0 text-center"
      >
        <h1 className="font-bold text-2xl xl:text-4xl 2xl:text-5xl">
          Tools & Layanan Pendukung
        </h1>
        <p className="mt-2 xl:mt-4 text-zinc-400 2xl:text-lg">
          Gunakan alat-alat berikut untuk memperkuat keamanan digitalmu setiap
          hari
        </p>
      </motion.div>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.15 }}
        className="grid gap-4 sm:gap-5 grid-cols-1 xl:grid-cols-12 auto-rows-[320px] xl:auto-rows-[180px] relative mt-12 xl:mt-24"
      >
        <motion.div
          variants={fadeUp}
          className="bg-zinc-800 xl:col-start-1 xl:col-span-8 xl:row-start-1 xl:row-span-2 flex flex-col xl:flex-row justify-between items-center px-6 xl:px-8 py-6 xl:py-0 rounded-xl hover:scale-105 transition-transform duration-300"
        >
          <img src="/img/googlePasskey.svg" className="h-24 xl:h-32 2xl:h-58" />
          <div>
            <h2 className="mt-2 text-lg xl:text-2xl 2xl:text-3xl font-medium">
              Google Passkey
            </h2>
            <p className="mt-2 xl:mt-4 text-sm xl:text-base text-zinc-400">
              Login tanpa password yang lebih aman dan anti-phishing. Ganti
              sandi tradisional di berbagai perangkat untuk pengalaman login
              yang lebih cepat dan aman
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-zinc-800 xl:col-start-9 xl:col-span-4 xl:row-start-1 xl:row-span-4 flex flex-col justify-between 2xl:justify-center items-center xl:gap-12 px-6 xl:px-8 py-6 xl:py-10 2xl:py-0 rounded-xl hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/img/googlesafety.png"
            className="h-32 xl:h-58 2xl:h-80 xl:mt-24 2xl:mt-0"
          />
          <div>
            <h2 className="mt-2 text-lg xl:text-2xl 2xl:text-3xl font-medium">
              Google Safety Center
            </h2>
            <p className="mt-2 xl:mt-4 text-sm xl:text-base text-zinc-400">
              Panduan resmi Google tentang keamanan online dan privasi. Pelajari
              cara mengatur keamanan akun, mengelola data, dan mengenali
              phishing dengan mudah
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-zinc-800 xl:col-start-1 xl:col-span-4 xl:row-start-3 xl:row-span-2 flex flex-col justify-between items-center px-6 xl:px-8 py-8 xl:py-10 rounded-xl hover:scale-105 transition-transform duration-300"
        >
          <img src="/img/cloudflare.svg" className="h-15 2xl:h-24" />
          <div>
            <h2 className="mt-2 text-lg xl:text-2xl 2xl:text-3xl font-medium">
              Cloudflare DNS
            </h2>
            <p className="mt-2 xl:mt-4 text-sm xl:text-base text-zinc-400">
              DNS aman yang memblokir situs berbahaya dan menjaga privasi
              browsing. Koneksi internetmu jadi lebih cepat dan aman, bahkan
              saat memakai Wi‑Fi publik
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-zinc-800 xl:col-start-5 xl:col-span-4 xl:row-start-3 xl:row-span-2 flex flex-col justify-between items-center px-6 xl:px-8 py-6 xl:py-10 rounded-xl hover:scale-105 transition-transform duration-300"
        >
          <img src="/img/googlepass.png" className="h-24 2xl:h-32" />
          <div>
            <h2 className="mt-2 text-lg xl:text-2xl 2xl:text-3xl font-medium">
              Google Password Manager
            </h2>
            <p className="mt-2 xl:mt-4 text-sm xl:text-base text-zinc-400">
              Simpan dan buat kata sandi kuat otomatis. Password Manager
              membantu mengelola banyak akun dan memberi peringatan jika sandi
              bocor atau lemah
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-violet-800 xl:col-start-1 xl:col-span-4 xl:row-start-5 xl:row-span-2 flex justify-between items-center px-8 rounded-xl hover:scale-105 transition-transform duration-300"
        >
          <div className="mt-2 text-xl 2xl:text-3xl font-medium flex items-center flex-wrap leading-8 xl:leading-10">
            Teknologi Hanyalah{" "}
            <div className="px-4 2xl:px-5 py-1 rounded-xl w-fit h-fit bg-yellow-500 -rotate-5 mx-2 -mt-3">
              Filter
            </div>{" "}
            <span>,</span>
            <span className="md:mr-2">Pertahanan Terbaik Datang Dari {""}</span>
            <span className="px-4 2xl:px-5 py-1 bg-lime-600 rounded-xl my-1">
              {" "}
              Kebiasaan
            </span>{" "}
            <span className="mt-3 ml-2">Bijak Kita</span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="bg-zinc-800 xl:col-start-5 xl:col-span-8 xl:row-start-5 xl:row-span-2 flex flex-col xl:flex-row justify-between xl:gap-18 items-center px-4 xl:px-12 py-6 xl:py-0 rounded-xl hover:scale-105 transition-transform duration-300"
        >
          <img src="/img/havepwned.png" className="h-32 xl:h-42 2xl:h-72" />
          <div>
            <h2 className="mt-2 text-lg xl:text-2xl 2xl:text-3xl font-medium">
              Have I Been Pwned?
            </h2>
            <p className="mt-2 xl:mt-4 text-zinc-400">
              Cek apakah email atau akunmu pernah bocor. Jika iya, segera ubah
              sandi dan aktifkan autentikasi dua faktor diakunmu
            </p>
          </div>
        </motion.div>
      </motion.section>
    </Container>
  );
}
