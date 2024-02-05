import { ClassNameValue, twMerge } from 'tailwind-merge'
import { ProductCard } from './ProductCard'
import { productProps } from './propTypes'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { expandProduct } from '../../slices/productSlice'

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
    <section
      style={{ minHeight: 'calc(65vh - 12rem)' }}
      className="py-4 border-t border-t-primary-low-opacity-blue w-full"
    >
      {data.length > 0 ? (
        <div className={twMerge(' grid relative gap-4 grid-cols-4', className)}>
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
      ) : (
        <h1 className="text-primary-text italic text-center w-full">
          No Results
        </h1>
      )}
    </section>
  )
}
