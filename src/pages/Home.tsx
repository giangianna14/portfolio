import { LeftPanel } from '../components/LeftPanel'
import { TechStack } from '../components/TechStack'
import { Pipelines } from '../components/Pipelines'
import { Experience } from '../components/Experience'
import { Footer } from '../components/Footer'
import { Helmet } from 'react-helmet-async'

export function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <Helmet>
        <title>Gian Gianna | Software Engineer & Data Automation</title>
        <meta name="description" content="Portfolio of Gian Gianna Pallan Pallas. Expert in Python, FastAPI, Java, Spring Boot, Data Automation, and Backend API." />
      </Helmet>
      
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left Sticky Panel */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <LeftPanel />
        </header>

        {/* Right Scrollable Content */}
        <main className="pt-24 lg:w-[52%] lg:py-24 flex flex-col gap-24">
          <Experience />
          <Pipelines />
          <TechStack />
          <Footer />
        </main>
      </div>
    </div>
  )
}
