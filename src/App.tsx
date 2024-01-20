import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home } from './pages/Home'
import { Store } from './pages/Store'

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-[5rem] mx-[10%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </>
  )
}

export default App
