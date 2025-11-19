import Chat from "../../public/icons/Chat";
import Key from "../../public/icons/Key";
import Shield from "../../public/icons/Shield";
import Container from "./Container";
import { motion } from "framer-motion";

export default function SectionDasar() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Container id="introduction" className="2xl:mt-46">
      <motion.div
        className="flex flex-col justify-center items-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-violet-400 text-sm xl:text-base uppercase font-medium">
          Pengenalan Literasi Digital
        </h2>
        <h1 className="font-bold text-2xl xl:text-5xl">
          Kenapa Literasi Digital Penting?
        </h1>
        <p className="text-zinc-400 text-sm xl:text-base 2xl:text-lg md:w-160 xl:w-200 2xl:w-220 text-center">
          Biar nggak gampang ke-prank di internet, kita perlu paham jejak data,
          cara verifikasi info, dan ngatur identitas online. Goal-nya simpel:
          kamu tetap aman, sadar, dan pede di ruang digital
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex items-center gap-4 flex-wrap mt-12"
      >
        <Card
          icons="shield"
          title="Privasi & Data"
          description="Kelola izin aplikasi, batasi oversharing, dan baca kebijakan privasi sebelum menyetujui"
        />
        <Card
          icons="key"
          title="Keamanan Akun"
          description="Gunakan kata sandi kuat, unik per layanan, dan aktifkan autentikasi 2 langkah (2FA)"
        />
        <Card
          icons="chat"
          title="Infomedis & Etika"
          description="Saring informasi, cek sumber, dan hargai etika digital saat berinteraksi"
        />
      </motion.div>
    </Container>
  );

  function Card({ title, description, icons }) {
    const renderIcon = () => {
      switch (icons) {
        case "shield":
          return <Shield className="h-18" />;
        case "key":
          return <Key className="h-18" />;
        case "chat":
          return <Chat className="h-18" />;
        default:
          return null;
      }
    };
    return (
      <motion.div
        variants={cardVariants}
        className="flex flex-col items-start gap-3 p-6 border-[1.5px] w-120 md:w-full xl:flex-1 2xl:w-130 border-zinc-800 bg-zinc-800 rounded-xl"
      >
        {renderIcon()}
        <h3 className="font-semibold text-2xl mt-18">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </motion.div>
    );
  }
}
