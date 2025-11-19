import Container from "./Container";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TotalAbout() {
  return (
    <Container className="2xl:mt-24">
      {/* Badge */}
      <motion.div
        className="flex items-center gap-4 lg:mx-0 w-fit mb-8 lg:mb-6 px-4 py-2 font-medium text-xs 2xl:text-sm border border-violet-500 text-violet-400 rounded-full mt-64 lg:mt-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span>For your information</span>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center lg:justify-between lg:items-center gap-16 lg:gap-0">
        <Card number={30} label="Juta" suffix="+" description="Ancaman Siber" />
        <Card
          number={600}
          label="Juta"
          suffix="+"
          description="Serangan Siber"
        />
        <Card
          number={26}
          label="Juta"
          suffix="+"
          description="Aktivitas Phishing"
        />
        <Card
          number={514}
          label="Ribu"
          suffix="+"
          description="Aktivitas Ransomware"
        />
      </div>

      {/* Description Section */}
      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-start mt-20 lg:mt-16">
        {/* Left Title */}
        <motion.h1
          className="font-medium text-2xl lg:text-4xl"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Tren Serangan & Ancaman <br /> Siber Indonesia 2024
        </motion.h1>

        {/* Right Section */}
        <motion.div
          className="lg:w-120 2xl:w-180 mt-4 lg:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-sm 2xl:text-base text-zinc-400">
            Pada tahun 2024, Indonesia mencatat lebih dari 610 juta serangan
            siber dan lebih dari 1,2 juta insiden malware yang meningkat 12,67%
            dari tahun sebelumnya{" "}
            <a
              className="text-violet-400 hover:text-violet-500"
              href="https://dataloka.id/politik/4259/jumlah-serangan-siber-di-indonesia-naik-tembus-610-juta-pada-2024"
            >
              (Dataloka.id)
            </a>
            . Selain itu, terdapat sekitar 26,77 juta aktivitas phishing yang
            menargetkan pengguna digital{" "}
            <a
              className="text-violet-400 hover:text-violet-500"
              href="https://www.bloombergtechnoz.com/detail-news/81920/bssn-phising-modus-yang-banyak-ditemui-warga-diminta-waspada/2"
            >
              (Bloomberg Technoz)
            </a>
            .
          </p>

          <p className="text-sm 2xl:text-base text-zinc-400 mt-2 lg:mt-4">
            Sistem keamanan juga mendeteksi lebih dari 36 juta ancaman siber
            lokal di Indonesia{" "}
            <a
              className="text-violet-400 hover:text-violet-500"
              href="https://www.antaranews.com/berita/4656245/kaspersky-deteksi-36-juta-ancaman-siber-lokal-di-indonesia-pada-2024"
            >
              (Antaranews.com)
            </a>
            . Selain itu, Kominfo–Komdigi mencatat 514.508 aktivitas ransomware
            yang menyerang sistem digital nasional sepanjang 2024{" "}
            <a
              className="text-violet-400 hover:text-violet-500"
              href="https://www.komdigi.go.id/berita/artikel/detail/tangguhnya-keamanan-siber-lps-dalam-menangkal-serangan-hacker"
            >
              (Komdigi.go.id)
            </a>
            .
          </p>
        </motion.div>
      </section>
    </Container>
  );
}

function Card({ number, suffix = "", label, description }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 60,
    damping: 12,
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = springValue.onChange((v) => {
      setCount(Math.floor(v));
    });

    if (isInView) {
      motionValue.set(number);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [isInView, motionValue, number, springValue]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col lg:items-center lg:w-auto"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <h1 className="text-5xl lg:text-6xl 2xl:text-7xl">
        <motion.span>
          {count}
          {suffix}
        </motion.span>
        <span className="text-sm lg:text-base text-violet-400">{label}</span>
      </h1>

      <motion.p
        className="mt-2 text-sm lg:text-base text-zinc-400"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
