import { motion } from 'motion/react'
import { GithubLogo, LinkedinLogo, EnvelopeSimple, DownloadSimple, Briefcase, Desktop, Storefront } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

const navItems = [
  { name: 'Experience', href: '#experience' },
  { name: 'Pipelines', href: '#pipelines' },
  { name: 'Tech Stack', href: '#tech-stack' }
]

export function LeftPanel() {
  const [activeSection, setActiveSection] = useState('experience')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((s) => observer.observe(s))

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col h-full justify-between"
    >
      <div>
        <div className="mb-6 flex flex-col items-start gap-6">
          <img 
            src="/profile.png" 
            alt="Gian Gianna Pallan Pallas" 
            className="w-24 h-24 rounded-full object-cover object-top border border-[#222222] ring-2 ring-[#222222] ring-offset-2 ring-offset-[#0a0a0a]"
          />
          
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-sm text-emerald-500 uppercase tracking-widest">
              Available for work
            </span>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl tracking-tight font-medium text-[#f9f9f9] mb-3 text-balance">
          Gian Gianna Pallan Pallas
        </h1>
        <h2 className="text-xl font-medium text-[#f9f9f9] mb-4 text-balance">
          Software Engineer (Data Automation & Backend API)
        </h2>
        <p className="text-zinc-400 max-w-sm leading-relaxed mb-8 text-sm">
          Fokus pada otomatisasi data dan pengembangan Backend API (Python & Java). Mengubah proses manual harian Anda menjadi pipeline otomatis 24/7 berskala enterprise.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#f9f9f9] text-[#0a0a0a] px-5 py-2.5 rounded-md font-medium hover:bg-zinc-200 transition-colors w-fit"
        >
          View Resume <DownloadSimple weight="bold" />
        </a>

        <nav className="hidden lg:block mt-16">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`group flex items-center gap-4 py-2 ${
                    activeSection === item.href.substring(1) ? 'text-[#f9f9f9]' : 'text-zinc-500'
                  }`}
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'w-16 bg-[#f9f9f9]'
                        : 'w-8 bg-zinc-600 group-hover:w-16 group-hover:bg-zinc-400'
                    }`}
                  ></span>
                  <span className="text-xs font-mono uppercase tracking-widest group-hover:text-[#f9f9f9] transition-colors">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-5 mt-12 lg:mt-12 lg:pb-24">
        <a href="https://github.com/giangianna14" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-zinc-400 hover:text-[#f9f9f9] transition-colors">
          <GithubLogo size={24} />
        </a>
        <a href="https://www.linkedin.com/in/giangianna/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-zinc-400 hover:text-[#f9f9f9] transition-colors">
          <LinkedinLogo size={24} />
        </a>
        <a href="mailto:gian.ule@gmail.com" aria-label="Email" className="text-zinc-400 hover:text-[#f9f9f9] transition-colors">
          <EnvelopeSimple size={24} />
        </a>
        <a href="/resume.html" target="_blank" aria-label="Print/Download Resume" className="text-zinc-400 hover:text-[#f9f9f9] transition-colors">
          <DownloadSimple size={24} />
        </a>
        <a href="https://www.sribu.com/id/users/giangianna" target="_blank" rel="noreferrer" aria-label="Sribulancer" className="text-zinc-400 hover:text-[#f9f9f9] transition-colors">
          <Briefcase size={24} />
        </a>
        <a href="https://www.upwork.com/freelancers/~017ee4c45b19924f67" target="_blank" rel="noreferrer" aria-label="Upwork" className="text-zinc-400 hover:text-[#f9f9f9] transition-colors">
          <Desktop size={24} />
        </a>
        <a href="https://www.fiverr.com/giangianna14" target="_blank" rel="noreferrer" aria-label="Fiverr" className="text-zinc-400 hover:text-[#f9f9f9] transition-colors">
          <Storefront size={24} />
        </a>
      </div>
    </motion.div>
  )
}
