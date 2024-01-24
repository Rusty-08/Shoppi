import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { Store } from './pages/Store/Store'
import { ExpandProduct } from './pages/Store/ExpandProduct'

function App() {
  return (
    <section className="bg-slate-50 min-h-screen">
      <Navbar />
      <main className="mx-[10%] py-[7rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/product/:productId" element={<ExpandProduct />} />
        </Routes>
      </main>
    </section>
  )
}

export default App
