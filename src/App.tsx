import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { PipelineDetail } from './pages/PipelineDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pipeline/:slug" element={<PipelineDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
