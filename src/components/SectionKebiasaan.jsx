/* eslint-disable no-unused-vars */
import { useState } from "react";
import Container from "./Container";
import { AnimatePresence, motion } from "motion/react";
import Chevron from "../../public/icons/Chevron";
import Key from "../../public/icons/Key";
import Password from "../../public/icons/Password";
import TwoFactor from "../../public/icons/TwoFactor";
import Update from "../../public/icons/Update";
import LinkIcon from "../../public/icons/LinkIcon";
import Permission from "../../public/icons/Permission";

export default function SectionKebiasaan() {
  const kebiasaanData = [
    {
      id: 1,
      title: "Pakai Password Manager",
      desc: "Cukup satu master password kuat, sisanya biar aplikasi yang generate & simpan otomatis",
    },
    {
      id: 2,
      title: "Aktifkan 2 Factor Authentication",
      desc: "Pakai aplikasi authenticator (lebih aman dari SMS). Kalau ada opsi passkey lebih baik lagi.",
    },
    {
      id: 3,
      title: "Update Rutin",
      desc: "Patch keamanan = nutup celah serangan. Jadwalkan auto‑update biar nggak kelupaan",
    },
    {
      id: 4,
      title: "Waspada Tautan Mencurigakan",
      desc: "Hover dulu buat lihat tujuan asli. Cek domain, jangan login dari link random",
    },
    {
      id: 5,
      title: "Batasi Izin Aplikasi",
      desc: "Matikan akses kamera/lokasi yang nggak perlu. Cek ulang izin tiap beberapa bulan",
    },
  ];
  const [open, setOpen] = useState();

  function getIconById(id) {
    switch (id) {
      case 1:
        return <Password className="h-8 text-violet-500" />;
      case 2:
        return <TwoFactor className="h-8 text-violet-400" />;
      case 3:
        return <Update className="h-8 text-violet-400" />;
      case 4:
        return <LinkIcon className="h-8 text-violet-400" />;
      case 5:
        return <Permission className="h-8 text-violet-400" />;
      default:
        return null;
    }
  }

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

  return (
    <Container id="goodpractices">
      <div className="flex flex-col-reverse xl:flex-row xl:justify-between items-start gap-6">
        <div className="flex flex-col gap-1 lg:gap-2 w-full xl:w-180">
          {kebiasaanData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col bg-zinc-800 p-6 rounded-lg"
            >
              <button
                onClick={() => setOpen(open === data.id ? null : data.id)}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  {getIconById(data.id)}
                  <h2 className="font-medium xl:text-lg 2xl:text-xl">
                    {data.title}
                  </h2>
                </div>
                <Chevron
                  className={`h-6 rotate-90 transition-transform duration-200 text-violet-400 ${
                    open === data.id ? "rotate-270" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === data.id && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="mt-4 text-zinc-400 xl:text-lg 2xl:text-xl">
                      {data.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Judul dan Subjudul */}
        <motion.div
          className="flex flex-col xl:justify-between xl:items-end gap-6 xl:text-right"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={fadeLeft}
            className="flex flex-col gap-2 xl:gap-6"
          >
            <h2 className="text-violet-400 text-sm xl:text-base uppercase font-medium">
              Praktik Baik
            </h2>
            <h1 className="font-bold text-2xl xl:text-5xl">
              Kebiasaan Aman Saat Online
            </h1>
          </motion.div>

          <motion.p
            variants={fadeRight}
            className="text-zinc-400 text-sm xl:text-base xl:w-140"
          >
            Kebiasaan sederhana berdampak besar. Terapkan mulai hari ini untuk
            pengalaman digital yang lebih aman
          </motion.p>
        </motion.div>
      </div>
    </Container>
  );
}
