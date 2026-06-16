import { motion } from 'motion/react'
import { ArrowDown } from '@phosphor-icons/react'

export function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl"
      >
        <div className="font-mono text-sm text-[#0ea5e9] mb-6 uppercase tracking-widest">
          Portfolio
        </div>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-balance text-[#f9f9f9]">
          Data Pipeline Engineer.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-[65ch] leading-relaxed">
          Membangun arsitektur data yang scalable, reliable, dan siap digunakan untuk analitik di skala jutaan baris. Fokus pada performa dan efisiensi.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#pipelines"
            className="inline-flex items-center gap-2 bg-[#f9f9f9] text-[#0a0a0a] px-6 py-3 rounded-md font-medium hover:bg-zinc-200 transition-colors"
          >
            Lihat Proyek
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#f9f9f9] transition-colors font-mono text-sm"
          >
            Hubungi Saya <ArrowDown weight="bold" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
