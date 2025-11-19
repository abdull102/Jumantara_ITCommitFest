import { useRef, useState } from "react";
import Container from "./Container";
import { AnimatePresence, motion } from "framer-motion";
import CheckFill from "../../public/icons/CheckFill";
import CheckLinear from "../../public/icons/CheckLinear";
import * as htmlToImage from "html-to-image";

export default function CommitmentSection() {
  const [checkedList, setCheckedList] = useState([]);
  const [name, setName] = useState("");
  const exportRef = useRef(null);

  const checkboxOptions = [
    "Mengaktifkan autentikasi 2 faktor (2FA) pada semua akun penting",
    "Tidak membuka tautan mencurigakan dan verifikasi sumber sebelum login",
    "Memperbarui kata sandi secara berkala (3 bulan sekali) dengan kombinasi kuat",
  ];

  function toggleCheck(label) {
    setCheckedList((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  }

  function makeExport(scale = 3) {
    const node = exportRef.current;
    if (!node) return;

    const width = node.offsetWidth * scale;
    const height = node.offsetHeight * scale;

    return htmlToImage.toJpeg(node, {
      width,
      height,
      quality: 1,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: node.offsetWidth + "px",
        height: node.offsetHeight + "px",
      },
    });
  }

  async function downloadImage() {
    const dataUrl = await makeExport(1);
    const link = document.createElement("a");
    link.download = "komitmen.jpeg";
    link.href = dataUrl;
    link.click();
  }

  async function shareToWhatsApp() {
    const dataUrl = await makeExport(1);
    if (!dataUrl) return;

    const blob = await (await fetch(dataUrl)).blob();
    const file = new File([blob], "komitmen.jpg", { type: blob.type });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Komitmen Saya",
        text: "Ini komitmen keamanan saya!",
      });
    } else {
      alert("Device tidak mendukung share file.");
    }
  }

  return (
    <Container id="commitment">
      {/* Hidden Card Untuk Export */}
      <div className="fixed -left-[9999px] top-0">
        <div
          ref={exportRef}
          style={{
            width: "360px",
            height: "640px",
          }}
          className="border-8 border-violet-700 bg-linear-to-b from-violet-950 via-violet-900 to-violet-800 rounded-xl flex flex-col justify-between text-center"
        >
          {/* Title + Image */}
          <div className="flex flex-col items-center px-8 py-8">
            {checkedList.length > 0 && (
              <h1 className="text-3xl tracking-wide font-bold text-white">
                {checkedList.length === 1
                  ? "Cyber Aware"
                  : checkedList.length === 2
                  ? "Phishing Savvy"
                  : "Cyber Guardian"}
              </h1>
            )}

            {checkedList.length > 0 && (
              <img
                src={
                  checkedList.length === 1
                    ? "/img/cek1.png"
                    : checkedList.length === 2
                    ? "/img/cek2.png"
                    : "/img/cek3.png"
                }
                alt="status ceklis"
                className="h-40 mt-3"
              />
            )}

            <p className="font-medium text-xl text-white mt-4">{name}</p>
          </div>

          {/* List */}
          <div className="text-left px-6 pb-4 text-white">
            {checkedList.length === 0 ? (
              <p className="text-zinc-200 text-sm mt-1">
                Belum ada komitmen yang dipilih
              </p>
            ) : (
              <ul className="list-disc ml-4 mb-3">
                {checkedList.map((item) => (
                  <li key={item} className="mb-2 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center w-full px-4 py-4">
            <img src="/img/logoWhite.svg" className="h-8" />
            <p className="font-light text-sm text-white">Jumantara</p>
          </div>
        </div>
      </div>

      {/* Card Untuk Preview */}
      <div className="text-center flex-col flex justify-center items-center gap-4">
        <h1 className="font-bold text-2xl xl:text-4xl 2xl:text-5xl">
          Yuk, Nyatakan Komitmenmu!
        </h1>
        <p className="text-zinc-400 2xl:text-lg xl:w-130 2xl:w-180">
          Pilih langkah-langkah keamanan yang kamu siap jalankan. Nanti hasilnya
          bisa kamu bagikan!
        </p>
      </div>

      <div className="mt-12 xl:mt-24 flex flex-col xl:flex-row xl:justify-between p-4 xl:p-6 bg-zinc-800 rounded-xl gap-6">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="font-semibold xl:text-lg">Nama Kamu</h2>

          <div className="bg-zinc-700 rounded-lg px-4 py-2 mt-2 w-full md:w-120">
            <input
              type="text"
              className="outline-none w-full bg-transparent"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <h2 className="font-semibold xl:text-lg">Pilih Komitmenmu</h2>

            {checkboxOptions.map((label) => (
              <Checkbox
                key={label}
                label={label}
                checked={checkedList.includes(label)}
                onToggle={() => toggleCheck(label)}
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          {name.trim() === "" && (
            <div className="bg-zinc-700 rounded-xl flex flex-col justify-center items-center text-center p-6 font-semibold text-xl xl:text-2xl h-full w-full">
              Isi Nama Dulu Ya
            </div>
          )}

          {name.trim() !== "" && (
            <div>
              {/* Preview Card */}
              <div className="border-8 border-violet-700 bg-linear-to-b from-violet-950 via-violet-900 to-violet-800 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="flex flex-col justify-center items-center gap-4 xl:gap-6 px-12 py-8">
                  {checkedList.length > 0 && (
                    <h1 className="text-3xl xl:text-4xl tracking-wide font-bold text-white">
                      {checkedList.length === 1
                        ? "Cyber Aware"
                        : checkedList.length === 2
                        ? "Phishing Savvy"
                        : "Cyber Guardian"}
                    </h1>
                  )}

                  {checkedList.length > 0 && (
                    <img
                      src={
                        checkedList.length === 1
                          ? "/img/cek1.png"
                          : checkedList.length === 2
                          ? "/img/cek2.png"
                          : "/img/cek3.png"
                      }
                      alt="status ceklis"
                      className="h-32 md:h-48 xl:h-58"
                    />
                  )}

                  <p className="font-medium text-xl">{name}</p>
                </div>

                <div className="mt-2 text-left w-full">
                  {checkedList.length === 0 ? (
                    <p className="text-zinc-200 text-sm mt-1 text-center">
                      Belum ada komitmen yang dipilih
                    </p>
                  ) : (
                    <ul className="list-disc px-6 pl-8 xl:px-8 xl:pl-12 mb-4">
                      {checkedList.map((item) => (
                        <li key={item} className="mb-2 text-sm md:text-lg">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex justify-between items-center w-full px-4 py-6 mt-2">
                  <img src="/img/logoWhite.svg" className="h-8" />
                  <p className="font-light text-sm pl-6">Jumantara</p>
                </div>
              </div>

              <button
                onClick={downloadImage}
                className="mt-4 w-full bg-violet-600 text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-violet-700 transition"
              >
                Download Gambar
              </button>

              <button
                onClick={shareToWhatsApp}
                className="mt-2 w-full bg-zinc-700 text-white cursor-pointer px-4 py-3 rounded-lg"
              >
                Bagikan
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );

  // Checkbox Component
  function Checkbox({ label, checked, onToggle }) {
    return (
      <div
        onClick={onToggle}
        className="flex items-center gap-2 cursor-pointer select-none mt-2"
      >
        <AnimatePresence mode="wait" initial={false}>
          {checked ? (
            <motion.div
              key="fill"
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.2, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
            >
              <CheckFill className="h-8 text-violet-400" />
            </motion.div>
          ) : (
            <motion.div
              key="linear"
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.2, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
            >
              <CheckLinear className="h-8 text-zinc-400" />
            </motion.div>
          )}
        </AnimatePresence>

        <span className="text-white">{label}</span>
      </div>
    );
  }
}
