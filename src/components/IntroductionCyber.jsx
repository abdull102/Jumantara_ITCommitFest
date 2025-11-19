/* eslint-disable no-unused-vars */
import Container from "./Container";
import { useThreatSimulate } from "./ThreatSimulate";
import SimulationButton from "./SimulationButton";
import SimulationSection from "./SimulationSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function IntroductionCyber() {
  const {
    open,
    scenario,
    overlayOpen,
    phishingOverlayOpen,
    smsOverlayOpen,
    togglePanel,
    openScenario,
    onAttachmentClick,
    closeOverlay,
    headerInfo,
  } = useThreatSimulate();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <Container id="simulation" className="mt-64 pb-0">
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1.2,
          ease: [0.17, 0.55, 0.55, 1],
        }}
        className="flex flex-col xl:flex-row justify-between items-start gap-6 xl:gap-24"
      >
        <section className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h1 className="font-bold text-2xl xl:text-4xl 2xl:text-5xl">
              Apa Itu Ancaman Siber?
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 1, ease: "easeOut" }}
          >
            <p className="text-zinc-400 2xl:text-lg xl:w-130 2xl:w-180">
              Ancaman siber itu tindakan jahat yang berusaha mencuri data, uang,
              atau akses perangkat kamu lewat internet, aplikasi, pesan.
            </p>
            <p className="text-zinc-400 2xl:text-lg xl:w-130 2xl:w-180 mt-1 2xl:mt-2">
              Bisa bentuknya tautan palsu, file yang mengandung malware,
              panggilan rekayasa sosial, atau Wi-Fi publik yang disadap.
              Tujuannya bikin kamu klik, install, atau kirim info sensitif
            </p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="font-semibold text-lg xl:text-2xl mt-4"
          >
            Jenis Kejahatan Siber Umum
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 1, ease: "easeOut" }}
          >
            <SimulationButton onSelectScenario={openScenario} />
          </motion.div>
        </section>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.8,
            duration: 1.1,
            ease: [0.17, 0.55, 0.55, 1],
          }}
        >
          <SimulationSection
            open={open}
            scenario={scenario}
            overlayOpen={overlayOpen}
            phishingOverlayOpen={phishingOverlayOpen}
            smsOverlayOpen={smsOverlayOpen}
            headerInfo={headerInfo}
            onAttachmentClick={onAttachmentClick}
            onCloseOverlay={closeOverlay}
          />
        </motion.div>
      </motion.article>
    </Container>
  );
}
