import { Dot, ShoppingBasket, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LinkPath } from './LinkPath'
import { Button } from './Button'
import { ForwardedRef } from 'react'
import { productProps } from '../pages/Store/propTypes'

const paths = ['Home', 'Store']

const pathName = (path: string) => {
  if (path !== 'Home') {
    return `/${path.toLowerCase()}`
  }
  return '/'
}

type NavbarProps = {
  setShowSidebar: () => void
  exceptionRef: ForwardedRef<HTMLButtonElement>
  products: productProps[]
}

const Navbar = ({ setShowSidebar, exceptionRef, products }: NavbarProps) => {
  return (
    <nav className="w-screen z-50 fixed top-0 bg-slate-50 h-header left-0">
      <div className="h-full ml-[10%] mr-[11%] px-3 flex border-b border-b-primary items-center justify-between">
        <Link to="/" className="flex gap-2">
          <ShoppingBasket className="w-8 h-8 text-primary-blue" />
          <h1 className="text-2xl font-bold text-primary-blue">Shoppi</h1>
        </Link>
        <div className="flex items-center h-full gap-5">
          <ul className="flex h-full items-center gap-5">
            {paths.map(path => (
              <LinkPath key={path} to={pathName(path)}>
                {path}
              </LinkPath>
            ))}
          </ul>
          <Button
            forwardedRef={exceptionRef}
            className="hover:text-primary-dark relative"
            variant="transparent"
            size="icon"
            onClick={setShowSidebar}
          >
            <ShoppingCart strokeWidth={1} />
            {products.length > 0 && (
              <Dot className="absolute text-primary-blue -top-1 -right-2" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
