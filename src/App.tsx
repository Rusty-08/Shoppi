import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Store from './pages/Store/Store'
import { CartSidebar } from './components/CartSidebar'
import { useEffect, useRef, useState } from 'react'
import useClickOutside from './hooks/useClickOutside'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null)
  const { ref, isVisible } = useClickOutside({
    initialState: showSidebar,
    exceptionRef: hamburgerButtonRef,
  })

  const products = useSelector((state: RootState) => state.products.products)

  const handleSidebarToggle = () => {
    setShowSidebar(prev => !prev)
  }

  useEffect(() => {
    if (!isVisible) {
      setShowSidebar(false)
    }
  }, [isVisible])

  return (
    <section className="bg-slate-50 min-h-screen">
      <Navbar
        setShowSidebar={handleSidebarToggle}
        exceptionRef={hamburgerButtonRef}
      />
      <main className="mx-[10%] relative pt-[7rem] pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
        <CartSidebar
          products={products}
          forwaredRef={ref}
          showSidebar={showSidebar}
        />
      </main>
    </section>
  )
}

export default App
