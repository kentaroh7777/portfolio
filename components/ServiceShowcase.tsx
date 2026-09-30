"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Chibi, { type ChibiPose } from "@/components/Chibi";
import { LoopVideo } from "@/components/media";
import { SERVICES, type Service } from "@/components/services";

const TONE = {
  sun: {
    chip: "bg-orange-50 text-sun ring-orange-100",
    check: "bg-sun",
    price: "bg-orange-50 ring-orange-100",
    priceText: "text-sun",
    glow: "bg-orange-200/60",
    btn: "btn-primary",
  },
  sky: {
    chip: "bg-sky-50 text-sky ring-sky-100",
    check: "bg-sky",
    price: "bg-sky-50 ring-sky-100",
    priceText: "text-sky",
    glow: "bg-sky-200/60",
    btn: "inline-flex items-center justify-center gap-2 rounded-full bg-sky px-7 py-3.5 font-bold text-white shadow-[0_5px_0_0_#1f74d1] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2b8cf5]",
  },
} as const;

const CHIBI: Record<Service["id"], { pose: ChibiPose; bubble: string }> = {
  tdanime: { pose: "flipbook", bubble: "キャラが動くよ！" },
  shigyopv: { pose: "present", bubble: "30秒でご紹介します" },
};

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const tone = TONE[service.tone];
  const reverse = index % 2 === 1;
  const chibi = CHIBI[service.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
        <div className={`pointer-events-none absolute -inset-6 rounded-[40px] ${tone.glow} blur-2xl`} />
        <a
          href={service.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden rounded-[28px] bg-white p-2.5 shadow-pop ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="aspect-video overflow-hidden rounded-[20px] bg-ink/5">
            <LoopVideo src={service.video.src} poster={service.video.poster} label={`${service.label}の映像`} />
          </div>
        </a>
        {service.note && <p className="relative mt-3 text-center text-xs text-ink/50">{service.note}</p>}
        <Chibi
          pose={chibi.pose}
          height={170}
          motion="bob"
          bubble={chibi.bubble}
          bubbleSide={reverse ? "right" : "left"}
          delay={index * 0.7}
          className={`absolute -bottom-10 hidden sm:block ${reverse ? "-left-10" : "-right-8"}`}
        />
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <span className={`inline-block rounded-full px-4 py-1.5 text-sm font-bold ring-1 ${tone.chip}`}>{service.label}</span>
        <h3 className="mt-5 font-round text-3xl font-extrabold leading-snug text-ink sm:text-4xl">{service.catch}</h3>
        <p className="mt-4 text-lg leading-relaxed text-ink/70">{service.lead}</p>

        <ul className="mt-6 space-y-3">
          {service.points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white ${tone.check}`}>
                <Check className="h-4 w-4" strokeWidth={3} />
              </span>
              <span className="font-medium text-ink/80">{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          {service.prices.map((p) => (
            <div key={p.name} className={`rounded-2xl px-5 py-3 ring-1 ${tone.price}`}>
              <div className="text-xs font-bold text-ink/60">{p.name}</div>
              <div className={`font-round text-2xl font-extrabold ${tone.priceText}`}>{p.value}</div>
            </div>
          ))}
        </div>

        <a href={service.url} target="_blank" rel="noopener noreferrer" className={`${tone.btn} mt-8`}>
          {service.cta}
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>
    </motion.article>
  );
}

const ServiceShowcase = () => {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-white py-20 lg:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-16 text-center lg:mb-20"
        >
          <Chibi pose="clapper" height={170} motion="flutter" bubble="アクション！" className="absolute top-2 left-0 hidden lg:block" />
          <span className="section-label">SERVICES</span>
          <h2 className="section-title mt-4">動画の制作サービス</h2>
          <p className="mt-4 text-lg text-ink/60">料金は目安です。内容・音声・演出に合わせてお見積りします。</p>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
