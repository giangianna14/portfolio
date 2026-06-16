import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, HardDrives } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { MermaidChart } from '../components/MermaidChart'

const pipelineData: Record<string, any> = {
  'whatsapp-automation-bot': {
    title: 'WhatsApp Automation Bot',
    problem: 'Klien membutuhkan cara instan untuk mengirimkan laporan data operasional atau pesan broadcast otomatis langsung ke grup WhatsApp tim tanpa harus membuka dashboard.',
    solution: 'Membangun bot WhatsApp terintegrasi menggunakan Python dan API resmi. Skrip Python dijadwalkan mengambil data dari sumber database, merangkumnya, lalu menembakkan payload ke webhook WhatsApp API.',
    outcome: 'Bot otomatis mengirim peringatan dan ringkasan data tanpa delay, mempercepat respons tim hingga 80%.',
    stack: ['Python', 'WhatsApp API', 'Webhooks', 'PostgreSQL'],
    mermaidDefinition: `
graph LR
    A[(Client Database)] -->|Scheduled Query| B(Python Bot Script)
    B -->|Format Message| C{WhatsApp Cloud API}
    C -->|Deliver Message| D[WhatsApp Group]
    C -->|Alerts| E[Manager Phone]
    
    style B fill:#141414,stroke:#0ea5e9,stroke-width:2px
    style C fill:#141414,stroke:#0ea5e9,stroke-width:2px
    `
  },
  'automated-data-report-email': {
    title: 'Automated Data Report & Email System',
    problem: 'Proses manual mengunduh data CSV/SQL, membersihkannya di Excel, dan mengirim email harian membuang ratusan jam waktu produktif klien.',
    solution: 'Membangun data pipeline dengan Python (Pandas) untuk ekstraksi data otomatis, konversi logika bisnis menjadi pembersihan otomatis, pembuatan PDF/Excel report, lalu distribusikan via SMTP/Email.',
    outcome: 'Sistem Python (Pandas) mengeksekusi ekstraksi dan distribusi secara otomatis 24/7. Menghemat 30+ jam kerja per minggu.',
    stack: ['Python', 'Pandas', 'SMTP/Email', 'Cron'],
    mermaidDefinition: `
graph LR
    A[(Raw Database)] -->|SQL Query| B(Python / Pandas)
    C[Web/CSV Sources] -->|Read| B
    B -->|Transform & Clean| D[Generate Excel / PDF]
    D --> E{SMTP Email Server}
    E --> F[Client Inbox]
    E --> G[Stakeholders]
    
    style B fill:#141414,stroke:#0ea5e9,stroke-width:2px
    style E fill:#141414,stroke:#0ea5e9,stroke-width:2px
    `
  },
  'telecom-monitoring-automation': {
    title: 'Telecom Monitoring Automation Dashboard',
    problem: 'Manajemen telekomunikasi harus memantau ratusan ribu log data jaringan setiap menit untuk mendeteksi anomali. Melakukannya secara manual via spreadsheet sangat lambat dan rentan error.',
    solution: 'Membangun dashboard web dinamis dengan Streamlit (Python) dan Pandas yang mengkonsumsi data stream secara live, lalu memvisualisasikan tren trafik menggunakan grafik interaktif Plotly.',
    outcome: 'Waktu deteksi anomali jaringan menurun dari berjam-jam menjadi hitungan menit. Engineer bisa memantau jaringan 24/7 di semua perangkat tanpa menginstal software khusus.',
    stack: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Data Visualization'],
    mermaidDefinition: `
graph TD
    A[(Telecom Logs)] -->|Live Data| B(Pandas Processor)
    C[(Historical DB)] -->|Query| B
    B --> D[Streamlit Engine]
    D --> E(Interactive Graphs)
    D --> F(Live Metrics)
    E --> G[Engineer Browser]
    F --> G
    
    style B fill:#141414,stroke:#0ea5e9,stroke-width:2px
    style D fill:#141414,stroke:#0ea5e9,stroke-width:2px
    `
  },
  'enterprise-ticketing-api': {
    title: 'Enterprise Ticketing Backend API',
    problem: 'Sistem tiket kapal feri membutuhkan backend yang handal untuk menangani jutaan transaksi dan pemrosesan data secara real-time tanpa downtime.',
    solution: 'Mengembangkan REST API mikroservis menggunakan FastAPI (Python) dan Spring Boot (Java). Mengimplementasikan antrian pesan dan caching agar sistem tahan terhadap lonjakan trafik tinggi.',
    outcome: 'Sistem berjalan sangat stabil (production-grade) memproses jutaan entri tiket harian tanpa intervensi manual.',
    stack: ['FastAPI', 'Spring Boot', 'PostgreSQL', 'Docker'],
    mermaidDefinition: `
graph TD
    A[Mobile/Web Client] -->|REST API| B(API Gateway / Load Balancer)
    B --> C{FastAPI Service}
    B --> D{Spring Boot Service}
    C -->|Read/Write| E[(PostgreSQL Master)]
    D -->|Read/Write| E
    E -.->|Replication| F[(PostgreSQL Replica)]
    C -->|Cache| G[(Redis)]
    D -->|Cache| G
    
    style C fill:#141414,stroke:#0ea5e9,stroke-width:2px
    style D fill:#141414,stroke:#0ea5e9,stroke-width:2px
    `
  }
}

export function PipelineDetail() {
  const { slug } = useParams()
  const data = pipelineData[slug || ''] || pipelineData['whatsapp-automation-bot']

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-6 py-12 md:px-12 md:py-20 lg:py-24">
      <Helmet>
        <title>{data.title} | Gian Gianna Portfolio</title>
        <meta name="description" content={data.problem.substring(0, 150) + '...'} />
      </Helmet>
      
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#0ea5e9] transition-colors mb-12 font-mono text-sm"
      >
        <ArrowLeft size={16} /> Back to Portfolio
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl font-medium text-[#f9f9f9] mb-6 text-balance">
          {data.title}
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-12">
          {data.stack.map((tech: string) => (
            <span key={tech} className="px-3 py-1 bg-[#141414] border border-[#222222] text-xs font-mono text-[#0ea5e9] rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="relative w-full rounded-xl border border-[#222222] bg-[#0a0a0a] overflow-hidden mb-16">
          <MermaidChart chart={data.mermaidDefinition} />
          
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
            <div className="p-2 bg-[#141414]/80 backdrop-blur border border-[#222222] rounded-md">
              <HardDrives size={24} className="text-[#0ea5e9]" />
            </div>
            <span className="text-sm font-mono text-zinc-300 bg-[#0a0a0a]/80 px-3 py-1 rounded border border-[#222222]">
              Live Architecture Diagram (Mermaid)
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-zinc-400 leading-relaxed text-sm md:text-base mb-24">
          <div>
            <h2 className="text-[#f9f9f9] font-medium text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-red-500 rounded-full block"></span> Problem
            </h2>
            <p>{data.problem}</p>
          </div>
          <div>
            <h2 className="text-[#f9f9f9] font-medium text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-amber-500 rounded-full block"></span> Solution
            </h2>
            <p>{data.solution}</p>
          </div>
          <div className="md:col-span-2 p-6 bg-[#141414] border border-[#222222] rounded-lg mt-4">
            <h2 className="text-[#f9f9f9] font-medium text-lg mb-2 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#0ea5e9] rounded-full block"></span> Outcome
            </h2>
            <p className="text-[#0ea5e9] text-lg font-medium">{data.outcome}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
