export function Footer() {
  return (
    <footer id="contact" className="pb-24 space-y-4 lg:pt-24 lg:pb-0">
      <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
        Desain diinspirasi oleh Brittany Chiang dan komunitas desain web. Dibangun dengan React, Tailwind CSS v4, dan Framer Motion. 
      </p>
      <div className="font-mono text-xs text-zinc-600 flex items-center gap-2">
        <span>© {new Date().getFullYear()} Gian Gianna.</span>
        <span className="text-emerald-500/80">• Deployed via Dokploy CI/CD 🚀</span>
      </div>
    </footer>
  )
}
