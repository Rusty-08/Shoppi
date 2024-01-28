import { ClassNameValue, twMerge } from 'tailwind-merge'
import { ProductCard } from './ProductCard'
import { productProps } from './propTypes'
import { useDispatch } from 'react-redux'
import { expandProduct } from '../../slices/productSlice'
import { Link } from 'react-router-dom'

type ProductCardProps = {
  data: productProps[]
  className?: ClassNameValue
}

export const Products = ({ data, className }: ProductCardProps) => {
  const dispatch = useDispatch()

  const handleClick = (id: number) => {
    dispatch(expandProduct(id))
    window.scrollTo(0, 0)
  }

  return (
    <div
      className={twMerge(
        'py-8 w-full grid relative gap-4 grid-cols-4',
        className,
      )}
    >
      {data.map(product => (
        <Link
          to={`/store/product/${product.id}`}
          key={product.id}
          onClick={() => handleClick(product.id)}
          className="cursor-pointer"
        >
          <ProductCard data={product} />
        </Link>
      ))}
    </div>
  )
}
