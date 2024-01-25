import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { Store } from './pages/Store/Store'
import { CartSidebar } from './components/CartSidebar'
import { useState } from 'react'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <section className="bg-slate-50 min-h-screen">
      <Navbar setShowSidebar={() => setShowSidebar(!showSidebar)} />
      <main className="mx-[10%] relative pt-[7rem] pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
        <CartSidebar showSidebar={showSidebar} />
      </main>
    </section>
  )
}

export default App
