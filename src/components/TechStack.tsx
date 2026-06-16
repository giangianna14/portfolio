import { motion } from 'motion/react'
import { Database, CodeBlock, GitBranch, ShareNetwork } from '@phosphor-icons/react'
import { GlowCard } from './GlowCard'

const stacks = [
  {
    title: 'Backend API',
    icon: CodeBlock,
    tools: ['Python', 'FastAPI', 'Java', 'Spring Boot'],
    colSpan: 'md:col-span-1 lg:col-span-2'
  },
  {
    title: 'Data Automation',
    icon: GitBranch,
    tools: ['Pandas', 'Excel Automation', 'Web Scraping', 'SQL'],
    colSpan: 'md:col-span-1 lg:col-span-2'
  },
  {
    title: 'Integrations & Reporting',
    icon: ShareNetwork,
    tools: ['WhatsApp Bot', 'Streamlit Dashboard', 'PDF/Email Auto-Gen'],
    colSpan: 'md:col-span-1 lg:col-span-2'
  },
  {
    title: 'Database & Environment',
    icon: Database,
    tools: ['PostgreSQL', 'MySQL', 'Linux/VPS', 'Docker'],
    colSpan: 'md:col-span-1 lg:col-span-2'
  }
]

export function TechStack() {
  return (
    <section id="tech-stack" className="space-y-12">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a0a0a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#f9f9f9]">
          Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stacks.map((stack, i) => (
          <motion.div
            key={stack.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={stack.colSpan}
          >
            <GlowCard className="h-full">
              <div className="flex flex-col justify-between h-full">
                <div className="mb-8">
                  <stack.icon size={24} className="text-[#0ea5e9] mb-4" />
                  <h3 className="text-lg font-medium text-[#f9f9f9]">{stack.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.tools.map(tool => (
                    <span key={tool} className="px-3 py-1 bg-[#0a0a0a] border border-[#222222] text-xs font-mono text-zinc-300 rounded-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
