/* eslint-disable no-unused-vars */
import Phone from "../../public/icons/Phone";
import VideoCall from "../../public/icons/Video";
import File from "../../public/icons/File";
import LinkIcon from "../../public/icons/LinkIcon";
import ApkFile from "../../public/icons/ApkFile";
import PaperClip from "../../public/icons/PaperClip";
import Camera from "../../public/icons/Camera";
import Mic from "../../public/icons/Mic";
import Delete from "../../public/icons/Delete";
import MenuEmail from "../../public/icons/MenuEmail";
import Submit from "../../public/icons/Submit";
import { motion, AnimatePresence } from "motion/react";

export default function SimulationSection({
  open,
  scenario,
  overlayOpen,
  headerInfo,
  onAttachmentClick,
  onCloseOverlay,
}) {
  if (!open) return null;

  // Data skenario
  const informationDesc = {
    "wa-invite": {
      title1: "Penjelasan",
      desc: "Penipu menyisipkan file yang berisi script atau link. File PDF bisa mengandung tautan berbahaya atau instruksi yang memancingmu memasukkan data/men-download lagi.",
      title2: "Tips Cepat",
      list: [
        "Jangan buka lampiran dari nomor tidak dikenal",
        "Cek ulang pengirim: nomor, konteks, dan bahasa pesan",
        "Jika ragu, konfirmasi lewat jalur lain (telepon resmi atau chat berbeda)",
        "Jangan transfer uang atau buka link yang menuntut pembayaran",
      ],
    },
    "wa-apk": {
      title1: "Penjelasan",
      desc: "APK dari luar Play Store bisa mengandung malware. Malware ini bisa mencuri OTP, menyadap pesan, atau buat transaksi tanpa izin.",
      title2: "Tips Cepat",
      list: [
        "Jangan install APK dari link random",
        "Gunakan Play Store / App Store resmi",
        "Periksa izin yang diminta: jika berlebihan, jangan lanjut",
        "Aktifkan proteksi Play Protect & update OS",
      ],
    },
    "sms-prize": {
      title1: "Penjelasan",
      desc: "Penipuan hadiah umum dan efektif karena memanfaatkan rasa penasaran. Biasanya meminta data pribadi atau biaya administrasi palsu",
      title2: "Tips cepat",
      list: [
        "Skeptis terhadap hadiah tak terduga",
        "Jangan isi data pribadi lewat form dari SMS",
        "Cek apakah event/brand itu benar-benar mengadakan promosi",
        "Laporkan SMS ke provider jika mencurigakan",
      ],
    },
    "email-phishing": {
      title1: "Penjelasan",
      desc: "Email phishing biasanya menyamar sebagai organisasi resmi (bank, layanan e-commerce, kantor pajak, dll.) untuk memancing penerima klik tautan berbahaya, memasukkan kredensial, atau mengunduh lampiran berisi malware.",
      title2: "Tips Cepat",
      list: [
        "Periksa alamat pengirim (email) — seringkali mirip tapi bukan domain resmi",
        "Hati-hati dengan tautan: hover (desktop) untuk lihat domain tujuan; jangan klik jika mencurigakan",
        "Jangan masukkan username/password di form yang datang lewat email; buka situs resmi lewat browser sendiri",
        "Lampiran .zip/.exe/.scr atau dokumen yang meminta makro biasanya berbahaya",
        'Cek tata bahasa/typo dan urgensi yang dipaksakan ("Tindakan segera" / "Akun Anda akan ditutup")',
      ],
    },
  };

  // Simulasi kena hack
  function HackOverlay({ open, onClose, title, body, notice }) {
    return (
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute bg-zinc-900/60 top-0 h-full w-full px-4 flex flex-col justify-center items-center"
          >
            <motion.div
              initial={{ y: -40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -40, opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.45,
                ease: [0.17, 0.55, 0.55, 1],
              }}
              className="flex flex-col justify-center items-center gap-4 lg:gap-6 p-4 bg-red-500/60 backdrop-blur-xs rounded-lg lg:w-120"
            >
              <h2 className="font-semibold text-2xl lg:text-4xl mb-2">
                {title}
              </h2>
              <img src="/img/hack.svg" className="h-20 lg:h-26" />
              <p className="text-zinc-100 2xl:text-lg mb-2 lg:mb-4">{body}</p>
              <p className="p-3 rounded-lg bg-red-600/60 font-medium text-sm 2xl:text-base uppercase">
                {notice}
              </p>
              <div className="flex justify-start items-start w-full">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg font-medium text-black text-xs 2xl:text-sm bg-zinc-50 hover:bg-zinc-200 cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Chatbox Whatsapp
  function ChatBoxWA({ badge, name, children }) {
    return (
      <>
        <div className="flex justify-between items-center p-4 bg-zinc-700">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 flex justify-center items-center font-semibold text-sm tracking-normal bg-emerald-500 rounded-full">
              {badge}
            </div>
            <span>{name}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-6 text-emerald-500" />
            <VideoCall className="h-6 text-emerald-500" />
          </div>
        </div>

        <div className="flex flex-col gap-3 px-4 pt-8 pb-16 lg:pt-16 lg:pb-32">
          {children}
        </div>

        <div className="m-4 flex justify-between items-center gap-4">
          <div className="flex justify-between items-center w-full px-4 py-3 border-[1.5px] border-emerald-500 rounded-full">
            <input
              type="text"
              className="outline-none w-full h-full focus:outline-none placeholder:text-sm lg:placeholder:text-base"
              placeholder="Ketik pesan"
            />
            <div className="flex items-center gap-2">
              <PaperClip className="h-5 hover:text-emerald-400" />
              <Camera className="h-5 hover:text-emerald-400" />
            </div>
          </div>
          <div className="p-3 rounded-full bg-emerald-500 hover:bg-emerald-600">
            <Mic className="h-5" />
          </div>
        </div>
      </>
    );
  }

  // Chatbox Email
  function ChatBoxEmail({ children }) {
    return (
      <>
        <div className="flex justify-end items-center p-4 bg-zinc-700">
          <div className="flex items-center gap-3">
            <Delete className="h-6 text-pink-500" />
            <MenuEmail className="h-6 rotate-90 text-pink-500" />
          </div>
        </div>
        <p className="px-4 pt-4 mb-2 text-xl lg:text-2xl">
          Pemberitahuan Keamanan — Konfirmasi Aktivitas pada Akun Bank ABC
        </p>
        <span className="px-4 text-zinc-400">csbankabc@email.com</span>

        <div className="flex flex-col gap-3 px-4 pt-8 pb-16 lg:pt-16">
          {children}
        </div>

        <div className="m-4 flex justify-between items-center gap-4">
          <div className="flex justify-between items-center w-full px-4 py-3 border-[1.5px] border-pink-500 rounded-full">
            <input
              type="text"
              className="outline-none w-full h-full focus:outline-none placeholder:text-sm lg:placeholder:text-base"
              placeholder="Ketik pesan"
            />
            <div className="flex items-center gap-2">
              <PaperClip className="h-5 hover:text-pink-400" />
              <Camera className="h-5 hover:text-pink-400" />
            </div>
          </div>
          <div className="p-3 rounded-full bg-pink-500 hover:bg-pink-600">
            <Submit className="h-5" />
          </div>
        </div>
      </>
    );
  }

  // Chatbox SMS
  function ChatBoxSMS({ badge, name, children }) {
    return (
      <>
        <div className="flex justify-between items-center p-4 bg-zinc-700">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 flex justify-center items-center font-semibold text-sm tracking-normal bg-blue-500 rounded-full">
              {badge}
            </div>
            <span>{name}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-6 text-blue-500" />
            <VideoCall className="h-6 text-blue-500" />
          </div>
        </div>

        <div className="flex flex-col gap-3 px-4 pt-8 pb-16 lg:pt-16 lg:pb-42">
          {children}
        </div>

        <div className="m-4 flex justify-between items-center gap-4">
          <div className="flex justify-between items-center w-full px-4 py-3 border-[1.5px] border-blue-500 rounded-full">
            <input
              type="text"
              className="outline-none w-full h-full focus:outline-none placeholder:text-sm lg:placeholder:text-base"
              placeholder="Ketik pesan"
            />
            <div className="flex items-center gap-2">
              <PaperClip className="h-5 hover:text-blue-400" />
              <Camera className="h-5 hover:text-blue-400" />
            </div>
          </div>
          <div className="p-3 rounded-full bg-blue-500 hover:bg-blue-600">
            <Mic className="h-5" />
          </div>
        </div>
      </>
    );
  }

  // Skenario undangan WA
  function ScenarioWAInvite() {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="wa-invite"
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.6,
            ease: [0.17, 0.55, 0.55, 1],
          }}
          className="relative lg:flex-1 2xl:w-180 bg-zinc-800 rounded-xl overflow-clip"
        >
          <ChatBoxWA badge={headerInfo.badge} name={headerInfo.name}>
            <p className="p-4 bg-zinc-700 rounded-t-2xl rounded-br-2xl w-64 lg:w-max">
              Halo, ada undangan untuk kamu nih dibuka ya
            </p>
            <div className="flex flex-col p-2 bg-zinc-700 rounded-t-2xl rounded-br-2xl w-64">
              <button
                onClick={onAttachmentClick}
                className="flex justify-between items-center mb-1 px-4 py-2 bg-violet-500 rounded-lg cursor-pointer"
              >
                <span>Surat Undangan.pdf</span>
                <File className="h-5 text-white" />
              </button>
              <span className="text-xs lg:text-sm text-zinc-400">
                ukuran file 2.1 MB
              </span>
            </div>
          </ChatBoxWA>
          <HackOverlay
            open={overlayOpen}
            onClose={onCloseOverlay}
            title="Oopps Anda Kena Hack"
            body="Segera kirim 9999 BTC ke 73efyufdhyf23u78 Jika tidak, semua data akan dibocorkan"
            notice="Ini simulasi pesan penipuan/tekanan jangan ikuti instruksi kirim uang"
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  // Skenario APK WA
  function ScenarioWAAPK() {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="wa-apk"
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.6,
            ease: [0.17, 0.55, 0.55, 1],
          }}
          className="relative 2xl:w-180 bg-zinc-800 rounded-xl overflow-clip"
        >
          <ChatBoxWA badge={headerInfo.badge} name={headerInfo.name}>
            <p className="p-4 bg-zinc-700 rounded-t-2xl rounded-br-2xl w-64 lg:w-max">
              Ini aplikasi undangan, install ya biar bisa lihat detail acaranya
            </p>
            <div className="flex flex-col p-2 bg-zinc-700 rounded-t-2xl rounded-br-2xl w-64">
              <button
                onClick={onAttachmentClick}
                className="flex justify-between items-center mb-1 px-4 py-2 bg-emerald-500 rounded-lg cursor-pointer"
              >
                <span>Aplikasi Undangan.apk</span>
                <ApkFile className="h-5 text-white" />
              </button>
              <span className="text-xs lg:text-sm text-zinc-400">
                ukuran file 8.4 MB
              </span>
            </div>
          </ChatBoxWA>
          <HackOverlay
            open={overlayOpen}
            onClose={onCloseOverlay}
            title="Oopps Anda Kena Hack"
            body="Segera kirim 9999 BTC ke 73efyufdhyf23u78 Jika tidak, semua data akan dibocorkan"
            notice="Ini simulasi pesan penipuan/tekanan jangan ikuti instruksi kirim uang"
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  // Skenario Email Phising
  function ScenarioEmailPhising() {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="email-phishing"
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.6,
            ease: [0.17, 0.55, 0.55, 1],
          }}
          className="relative 2xl:w-180 bg-zinc-800 rounded-xl overflow-clip"
        >
          <ChatBoxEmail badge={headerInfo.badge} name={headerInfo.name}>
            <p className="mb-2 lg:text-lg">
              Halo <span className="font-medium">Pelanggan</span>,
            </p>

            <p className="mb-2 lg:text-lg text-zinc-400">
              Kami mendeteksi aktivitas tidak biasa pada akun Anda. Untuk alasan
              keamanan, mohon verifikasi segera dengan menekan tautan berikut:
            </p>

            <p className="mb-3">
              <button
                onClick={onAttachmentClick}
                className="flex mb-1 cursor-pointer"
              >
                <span className="lg:text-lg text-blue-400 underline">
                  Lihat Detail Aktivitas
                </span>
              </button>
            </p>

            <p className="lg:text-lg text-zinc-400 text-sm mb-2">
              Jika Anda tidak melakukan aktivitas ini, abaikan pesan ini atau
              hubungi nomor layanan resmi Bank ABC.
            </p>
          </ChatBoxEmail>
          <HackOverlay
            open={overlayOpen}
            onClose={onCloseOverlay}
            title="Oopps Anda Kena Hack"
            body="Segera kirim 9999 BTC ke 73efyufdhyf23u78 Jika tidak, semua data akan dibocorkan"
            notice="Ini simulasi pesan penipuan/tekanan jangan ikuti instruksi kirim uang"
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  // Skenario SMS Hadiah
  function ScenarioSMSPrize() {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="sms-prize"
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.6,
            ease: [0.17, 0.55, 0.55, 1],
          }}
          className="relative 2xl:w-180 bg-zinc-800 rounded-xl overflow-clip"
        >
          <ChatBoxSMS badge={headerInfo.badge} name={headerInfo.name}>
            <p className="p-4 bg-zinc-700 rounded-t-2xl rounded-br-2xl w-64 lg:w-max">
              SELAMAT! Kamu menang hadiah. Klik link ini untuk klaim sekarang!
            </p>
            <div className="flex flex-col p-2 bg-zinc-700 rounded-t-2xl rounded-br-2xl w-64">
              <button
                onClick={onAttachmentClick}
                className="flex items-center gap-3 mb-1 px-2 cursor-pointer"
              >
                <span className="text-blue-400">bit.ly/ambil-hadiah</span>
                <LinkIcon className="h-5 text-blue-400" />
              </button>
            </div>
          </ChatBoxSMS>
          <HackOverlay
            open={overlayOpen}
            onClose={onCloseOverlay}
            title="Oopps Anda Kena Hack"
            body="Segera kirim 9999 BTC ke 73efyufdhyf23u78 Jika tidak, semua data akan dibocorkan"
            notice="Ini simulasi pesan penipuan/tekanan jangan ikuti instruksi kirim uang"
          />
        </motion.div>
      </AnimatePresence>
    );
  }

  function renderScenario() {
    if (!scenario || scenario === "wa-invite") return <ScenarioWAInvite />;
    if (scenario === "wa-apk") return <ScenarioWAAPK />;
    if (scenario === "sms-prize") return <ScenarioSMSPrize />;
    if (scenario === "email-phishing") return <ScenarioEmailPhising />;
    return null;
  }

  const info = informationDesc[scenario];

  return (
    <section className="flex flex-col">
      {renderScenario()}
      {scenario && (
        <motion.div
          key="desc-panel"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="mt-3 2xl:w-180 p-4 bg-zinc-800 rounded-lg"
        >
          <h3 className="font-medium text-lg lg:text-xl">
            {(info && info.title1) || "Penjelasan"}
          </h3>
          <p className="mt-2 lg:text-lg text-zinc-400">{info && info.desc}</p>
          <h3 className="font-medium text-lg lg:text-xl mt-6">
            {info && info.title2}
          </h3>
          <ol className="pl-5 mt-2 text-zinc-400 lg:text-lg">
            {info.list.map((item, i) => (
              <li key={i} className="list-decimal">
                {item}
              </li>
            ))}
          </ol>
        </motion.div>
      )}
    </section>
  );
}
