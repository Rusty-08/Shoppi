import { Route, Routes, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Store from './pages/Store'
import { CartSidebar } from './components/CartSidebar'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import useClickOutside from './hooks/useClickOutside'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import { ExpandProduct } from './pages/Store/ExpandProduct'
import { ToastContainer } from 'react-toastify'
import Fuse from 'fuse.js'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null)
  const { ref, isVisible } = useClickOutside({
    initialState: showSidebar,
    exceptionRef: hamburgerButtonRef,
  })
  const [query, setQuery] = useState('')

  const products = useSelector((state: RootState) => state.products.products)
  const carts = products.filter(product => product.addedToCart)

  const fuse = new Fuse(products, {
    keys: ['title', 'category'],
  })

  const results = fuse.search(query)
  const productResults = query
    ? results.map(character => character.item)
    : products

  const handleSearch = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setQuery(currentTarget.value)
  }

  const ProductRoute = () => {
    const { productId } = useParams()
    const expandedProduct = products[Number(productId) - 1]
    return expandedProduct ? <ExpandProduct data={expandedProduct} /> : null
  }

  const handleSidebarToggle = () => {
    setShowSidebar(prev => !prev)
  }

  useEffect(() => {
    if (!isVisible) {
      setShowSidebar(false)
    }
  }, [isVisible])

  return (
    <section className={`${showSidebar && 'pr-4'} bg-slate-50 min-h-screen`}>
      <ToastContainer autoClose={1000} className="w-max z-50 h-14" />
      <Navbar
        setShowSidebar={handleSidebarToggle}
        exceptionRef={hamburgerButtonRef}
        products={products}
        query={query}
        handleSearch={handleSearch}
      />
      <main className="mx-[10%] relative pt-[5rem] pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={<Store filteredProducts={productResults} />}
          >
            <Route
              path="/store/product/:productId"
              element={<ProductRoute />}
            />
          </Route>
        </Routes>
        <CartSidebar
          products={carts}
          forwaredRef={ref}
          showSidebar={showSidebar}
        />
      </main>
    </section>
  )
}

export default App
