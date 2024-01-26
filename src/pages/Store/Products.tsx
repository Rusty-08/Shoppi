import { ClassNameValue, twMerge } from 'tailwind-merge'
import { ProductCard } from './ProductCard'
import { productProps } from './propTypes'
import { ForwardedRef } from 'react'

type ProductCardProps = {
  data: productProps[]
  // eslint-disable-next-line no-unused-vars
  handleProductClick: (_: number) => void
  className?: ClassNameValue
  exceptionRef: ForwardedRef<HTMLDivElement>
}

export const Products = ({
  data,
  handleProductClick,
  className,
  exceptionRef,
}: ProductCardProps) => {
  const handleClick = (id: number) => {
    handleProductClick(id)
  }

  return (
    <div
      ref={exceptionRef}
      className={twMerge('grid relative gap-4 grid-cols-4', className)}
    >
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
