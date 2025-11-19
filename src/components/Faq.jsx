import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Arrow from "../../public/icons/Arrow";
import Chevron from "../../public/icons/Chevron";
import Container from "./Container";

export default function FaqSection() {
  const faqData = [
    {
      id: 1,
      title: "Apa yang kami sediakan?",
      desc: "Website ini menyajikan informasi seputar keamanan digital, mulai dari pengenalan dasar cybersecurity, jenis-jenis ancaman, contoh serangan, simulasi sederhana, hingga cara pencegahan. Semuanya disusun agar mudah dipahami pengguna umum maupun pelajar.",
    },
    {
      id: 2,
      title: "Siapa tim di balik platform ini?",
      desc: "Platform ini dikembangkan oleh tim Jumantara dari Universitas Internasional Semen Indonesia untuk IT Commit 2025 Web Design Competition. Tujuan kami adalah menghadirkan website edukasi keamanan digital yang interaktif, relevan, dan mudah dipelajari oleh generasi digital.",
    },
    {
      id: 3,
      title: "Apakah data yang ditampilkan kredibel?",
      desc: "Kami menggunakan referensi dari sumber tepercaya seperti Kominfo/Komdigi, lembaga keamanan siber internasional, laporan tahunan, dan portal berita resmi. Semua data terkait ancaman dan statistik disajikan dalam bentuk edukatif yang mudah dipahami.",
    },
    {
      id: 4,
      title: "Lisensi & Atribusi",
      desc: "Beberapa ikon di website ini menggunakan Solar Icon Set, yang dibuat oleh 480 Design dan dilisensikan di bawah CC BY 4.0. Konten lain seperti ilustrasi, referensi data, dan materi edukasi disusun secara mandiri dengan tetap mencantumkan sumber resmi pada bagian yang relevan.",
    },
  ];

  const [open, setOpen] = useState();

  return (
    <Container id="faq">
      <section className="flex flex-col xl:flex-row justify-between xl:items-center xl:gap-60 2xl:gap-120">
        {/* Title */}
        <motion.div
          className="flex flex-col xl:justify-between"
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <p className="font-medium text-lg xl:text-xl text-violet-400">
              Tanya Jawab
            </p>

            <motion.h1
              className="mt-4 xl:mt-6 font-medium text-2xl xl:text-4xl 2xl:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Masih ada Pertanyaan? <br /> Kita Bantu Jawab
            </motion.h1>

            <motion.p
              className="mt-4 xl:mt-6 text-sm xl:text-base text-zinc-400 xl:w-120"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Pelajari lebih dalam tentang keamanan siber, perlindungan data,
              dan langkah pencegahan ancaman digital di sini.
            </motion.p>
          </div>

          {/* Button Contact Us */}
          <motion.div
            className="hidden xl:block p-6 rounded-xl bg-zinc-800 mt-28 2xl:mt-32"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h1 className="font-semibold xl:text-lg">Masih belum terjawab?</h1>
            <p className="mt-2 text-sm xl:text-base text-zinc-400">
              Tanya melalui email, biar bisa kami bantu ya
            </p>

            <a
              href="mailto:test@email.com"
              className="p-2 pl-4 xl:pl-6 flex items-center gap-4 mt-6 bg-white hover:bg-zinc-200 rounded-full w-fit group"
            >
              <span className="font-medium text-sm 2xl:text-base text-zinc-800 pr-4">
                Kontak di sini
              </span>
              <div className="p-2 rounded-full bg-zinc-800">
                <Arrow className="h-4 text-white rotate-45 group-hover:rotate-90 transition duration-300" />
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex flex-col  flex-1 mt-12 xl:mt-6"
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              className="flex flex-col p-2 rounded-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <button
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="flex justify-between items-center text-left"
              >
                <h2 className="font-medium xl:text-lg">{faq.title}</h2>

                <motion.div
                  animate={{ rotate: open === faq.id ? 270 : 90 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Chevron className="h-4 text-violet-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === faq.id && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <p className="mt-2 text-zinc-400">{faq.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Contact Box */}
        <motion.div
          className="xl:hidden p-6 rounded-xl bg-zinc-800 mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <h1 className="font-semibold">Masih belum terjawab?</h1>
          <p className="mt-2 text-sm text-zinc-400">
            Tanya melalui email, biar bisa kami bantu ya
          </p>

          <a
            href="mailto:test@email.com"
            className="p-2 pl-4 xl:pl-6 flex items-center gap-4 mt-6 bg-white hover:bg-zinc-200 rounded-full w-fit group"
          >
            <span className="font-semibold text-sm 2xl:text-balance text-zinc-800 pr-4">
              Kontak di sini
            </span>
            <div className="p-2 rounded-full bg-zinc-800">
              <Arrow className="h-4 text-white rotate-45 group-hover:rotate-90 transition duration-300" />
            </div>
          </a>
        </motion.div>
      </section>
    </Container>
  );
}
