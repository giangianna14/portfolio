import { motion } from 'motion/react'

const experiences = [
  {
    role: 'Software Engineer (Data & Backend API)',
    company: 'Enterprise Digital Ticketing',
    period: '2023 - Present',
    description: 'Membangun sistem backend API berskala enterprise dan otomatisasi data menggunakan Java (Spring Boot) dan Python (FastAPI). Sistem ini memproses jutaan data transaksi tiket harian secara real-time tanpa campur tangan manusia.'
  },
  {
    role: 'Data Automation Specialist',
    company: 'Telecommunications Industry',
    period: '2021 - 2023',
    description: 'Merancang pipeline otomatisasi data log jaringan (Pandas/Python) dan membangun Dashboard Monitoring interaktif secara live menggunakan Streamlit. Sistem ini mendistribusikan laporan harian secara otomatis ke grup manajemen melalui WhatsApp Bot dan Email.'
  },
  {
    role: 'Freelance Software Engineer',
    company: 'Upwork & Fiverr',
    period: '2022 - Present',
    description: 'Bekerja sama dengan berbagai klien global untuk menyediakan solusi otomatisasi bisnis. Membangun sistem notifikasi Email otomatis dan integrasi WhatsApp Bot untuk pengiriman laporan harian.'
  }
]

export function Experience() {
  return (
    <section id="experience" className="space-y-12 lg:pt-0">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a0a0a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#f9f9f9]">
          Experience
        </h2>
      </div>

      <div className="space-y-10 group/list">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#141414]/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] lg:group-hover:drop-shadow-lg"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-baseline md:gap-8">
              <div className="md:w-48 shrink-0 mb-2 md:mb-0">
                <span className="font-mono text-sm text-zinc-500 uppercase tracking-widest">{exp.period}</span>
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-medium text-[#f9f9f9] group-hover:text-[#0ea5e9] transition-colors">{exp.role}</h3>
                <div className="text-[#0ea5e9] font-mono text-sm mb-2">{exp.company}</div>
                <p className="text-zinc-400 max-w-[60ch] text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
