import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { Store } from './pages/Store/Store'

function App() {
  return (
    <section className="bg-slate-50 min-h-screen">
      <Navbar />
      <main className="mx-[10%] py-[7rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </main>
    </section>
  )
}

export default App
