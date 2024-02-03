import { Route, Routes, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Store from './pages/Store'
import { CartSidebar } from './components/CartSidebar'
import useClickOutside from './hooks/useClickOutside'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import { ExpandProduct } from './pages/Store/ExpandProduct'
import { ToastContainer } from 'react-toastify'

function App() {
  const [ref, showSidebar, setShowSidebar] = useClickOutside(false)

  const products = useSelector((state: RootState) => state.products.products)
  const carts = products.filter(product => product.addedToCart)

  const ProductRoute = () => {
    const { productId } = useParams()
    const expandedProduct = products[Number(productId) - 1]
    return expandedProduct ? <ExpandProduct data={expandedProduct} /> : null
  }

  const handleSidebarToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setShowSidebar(prev => !prev)
  }

  return (
    <section className={`${showSidebar && 'pr-4'} bg-slate-50 min-h-screen`}>
      <ToastContainer autoClose={1000} className="w-max z-50 h-14" />
      <Navbar setShowSidebar={handleSidebarToggle} products={carts} />
      <main className="mx-[10%] relative pt-[5rem] pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />}>
            <Route
              path="/store/product/:productId"
              element={<ProductRoute />}
            />
          </Route>
        </Routes>
        <CartSidebar
          forwardedRef={ref}
          products={carts}
          showSidebar={showSidebar}
        />
      </main>
    </section>
  )
}

export default App
