import { Link } from 'react-router-dom'
import { ProductCard } from './ProductCard'
import { productProps } from './data/propTypes'

type ProductCardProps = {
  data: productProps[]
  handleProductClick: (_: number) => void
}

export const Products = ({ data, handleProductClick }: ProductCardProps) => {
  return (
    <div className="grid relative gap-4 grid-cols-4">
      {data.map(({ id, title, price, image, expanded }) => (
        <Link
          key={id}
          to={`/store/product/${id}`}
          onClick={() => handleProductClick(id)}
        >
          <ProductCard
            id={id}
            title={title}
            price={price}
            image={image}
            expanded={expanded}
          />
        </Link>
      ))}
    </div>
  )
}
