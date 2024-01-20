import { ShoppingBasket, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LinkPath } from './LinkPath'

const paths = ['Home', 'Store']

const pathName = (path: string) => {
  if (path !== 'Home') {
    return `/${path.toLowerCase()}`
  }
  return '/'
}

const Navbar = () => {
  return (
    <nav className="w-screen fixed top-0 h-header left-0">
      <div className="h-full mx-[10%] px-3 flex border-b border-b-primary items-center justify-between">
        <Link to="/" className="flex gap-2">
          <ShoppingBasket className="w-8 h-8 text-primary-active" />
          <h1 className="text-2xl font-medium text-primary-dark">Shoppi</h1>
        </Link>
        <div className="flex gap-5">
          <ul className="flex pr-5 items-center border-r border-r-primary-hover gap-5">
            {paths.map(path => (
              <LinkPath key={path} to={pathName(path)}>
                {path}
              </LinkPath>
            ))}
          </ul>
          <button>
            <ShoppingCart strokeWidth={1} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar