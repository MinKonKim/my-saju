import { motion } from "framer-motion";
import Image from "next/image";

export function SceneTwo() {
  return (
    <div className="flex w-full justify-between items-end py-5 mb-5 overflow-hidden">
      <motion.div
        className="flex flex-col h-full justify-end"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Image
          src="/asset/white_deco.svg"
          alt="문양"
          width={153}
          height={120}
        />
      </motion.div>
      <motion.div
        className="pr-4"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
        viewport={{ once: true, margin: "100px", amount: 0.3 }}
      >
        <Image
          src="/asset/background/webtoon_2.png"
          alt="웹툰 2"
          width={161}
          height={285}
          sizes="100vw "
        />
      </motion.div>
    </div>
  );
}
