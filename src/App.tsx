import { Route, Routes, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Store from './pages/Store/Store'
import { CartSidebar } from './components/CartSidebar'
import { useEffect, useRef, useState } from 'react'
import useClickOutside from './hooks/useClickOutside'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import { ExpandProduct } from './pages/Store/ExpandProduct'

function App() {
  const { productId } = useParams()
  const [showSidebar, setShowSidebar] = useState(false)
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null)
  const { ref, isVisible } = useClickOutside({
    initialState: showSidebar,
    exceptionRef: hamburgerButtonRef,
  })

  const products = useSelector((state: RootState) => state.products.products)
  const product = productId
    ? products[Number(productId)]
    : products.find(product => product.expanded)

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
      <main className="mx-[10%] relative pt-[5rem] pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />}>
            <Route
              path="/store/product/:productId"
              element={product && <ExpandProduct data={product} />}
            />
          </Route>
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
