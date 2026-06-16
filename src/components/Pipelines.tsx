import { motion } from 'motion/react'
import { ArrowUpRight, ShareNetwork, Link as LinkIcon } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { GlowCard } from './GlowCard'

const pipelines = [
  {
    slug: 'whatsapp-automation-bot',
    title: 'WhatsApp Automation Bot',
    problem: 'Klien membutuhkan cara instan untuk mengirimkan laporan data operasional atau pesan broadcast otomatis langsung ke grup WhatsApp tim.',
    outcome: 'Bot otomatis terintegrasi langsung dengan database klien, mengirim peringatan dan ringkasan data tanpa delay.',
    stack: ['Python', 'WhatsApp API', 'Webhooks']
  },
  {
    slug: 'automated-data-report-email',
    title: 'Automated Data Report & Email System',
    problem: 'Proses manual mengunduh data CSV/SQL, membersihkannya di Excel, dan mengirim email harian membuang banyak waktu produktif.',
    outcome: 'Sistem Python (Pandas) mengeksekusi ekstraksi, pembersihan data, pembuatan PDF, dan distribusi Email secara otomatis (Cron).',
    stack: ['Python', 'Pandas', 'SMTP/Email', 'Cron'],
    externalLink: 'https://www.fiverr.com/giangianna14/build-automated-data-report-and-email-notification-system-in-python'
  },
  {
    slug: 'telecom-monitoring-automation',
    title: 'Telecom Monitoring Automation Dashboard',
    problem: 'Manajemen Telekomunikasi memerlukan pemantauan metrik jaringan secara real-time namun data tersebar di berbagai log server yang sulit dibaca.',
    outcome: 'Aplikasi interaktif (Streamlit) yang secara live memvisualisasikan status jaringan, tren data, dan anomali. Dapat diakses dari mana saja.',
    stack: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    externalLink: 'https://telecom-monitoring-automation.streamlit.app/'
  },
  {
    slug: 'enterprise-ticketing-api',
    title: 'Enterprise Ticketing Backend API',
    problem: 'Sistem tiket kapal feri membutuhkan backend yang handal untuk menangani jutaan transaksi dan pemrosesan data real-time.',
    outcome: 'Sistem berjalan stabil memproses jutaan entri harian tanpa intervensi manual.',
    stack: ['FastAPI', 'Spring Boot', 'PostgreSQL', 'Docker']
  }
]

export function Pipelines() {
  const navigate = useNavigate();

  return (
    <section id="pipelines" className="space-y-12">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a0a0a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#f9f9f9]">
          Pipelines
        </h2>
      </div>

      <div className="space-y-6">
        {pipelines.map((pipe, i) => (
          <motion.div
            key={pipe.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div 
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/pipeline/${pipe.slug}`)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate(`/pipeline/${pipe.slug}`);
                }
              }}
              className="block focus:outline-none text-left"
            >
              <GlowCard className="hover:border-zinc-700 transition-colors">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 cursor-pointer">
                  {/* Visual Architecture Placeholder */}
                  <div className="w-full md:w-48 shrink-0 rounded bg-[#0a0a0a]/50 border border-[#222222] flex flex-col items-center justify-center py-8 px-4 text-center group/img">
                    <ShareNetwork size={32} className="text-zinc-600 mb-2 group-hover/img:text-[#0ea5e9] transition-colors" />
                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider group-hover/img:text-[#0ea5e9] transition-colors">View Architecture</span>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold text-[#f9f9f9] group-hover:text-[#0ea5e9] transition-colors flex items-center gap-3">
                      {pipe.title}
                      {pipe.externalLink && (
                        <a href={pipe.externalLink} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-[#0ea5e9] transition-colors" aria-label="Visit live app" onClick={(e) => e.stopPropagation()}>
                          <LinkIcon size={20} />
                        </a>
                      )}
                      <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 ml-auto" />
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="text-sm">
                        <span className="text-zinc-500 font-mono uppercase tracking-wider text-xs mr-2">Problem</span>
                        <span className="text-zinc-300">{pipe.problem}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-[#0ea5e9] font-mono uppercase tracking-wider text-xs mr-2">Outcome</span>
                        <span className="text-[#f9f9f9] font-medium">{pipe.outcome}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {pipe.stack.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-[#0a0a0a] border border-[#222222] text-xs font-mono text-zinc-400 rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
