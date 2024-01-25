import { ClassNameValue, twMerge } from 'tailwind-merge'
import { ProductCard } from './ProductCard'
import { productProps } from './propTypes'

type ProductCardProps = {
  data: productProps[]
  // eslint-disable-next-line no-unused-vars
  handleProductClick: (_: number) => void
  className?: ClassNameValue
}

export const Products = ({
  data,
  handleProductClick,
  className,
}: ProductCardProps) => {
  const handleClick = (id: number) => {
    handleProductClick(id)
  }

  return (
    <div className={twMerge('grid relative gap-4 grid-cols-4', className)}>
      {data.map(({ id, title, price, image, expanded }) => (
        <button key={id} onClick={() => handleClick(id)}>
          <ProductCard
            id={id}
            title={title}
            price={price}
            image={image}
            expanded={expanded}
          />
        </button>
      ))}
    </div>
  )
}
