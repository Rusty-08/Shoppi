import { Button } from '../../components/Button'
import { ShoppingCart } from 'lucide-react'
import { ProductNumber } from '../../components/ProductNumber'
import { CloseButton } from '../../components/CloseButton'
import { productProps } from './data/propTypes'

type ExpandProductProps = {
  product: productProps
  handleBackClick: () => void
}

export const ExpandProduct = ({
  product,
  handleBackClick,
}: ExpandProductProps) => {
  const { title, description, image, price, category } = product

  return (
    <div
      style={{ height: 'calc(100% - 9rem)' }}
      className="flex items-center justify-center fixed top-28 shadow-md border-t-4 border-primary-blue border-opacity-50 bg-white left-[10%] right-[10%] rounded-lg"
    >
      <div className="flex h-full relative p-6 pt-12  w-full">
        <div className="h-full border-r w-1/2 flex items-center justify-center bg-cover">
          <img
            className={`${
              category === 'electronics' || category === 'jewelery'
                ? 'h-1/2'
                : 'h-full'
            }`}
            src={image}
            alt={title}
          />
        </div>
        <div className="flex px-10 w-1/2 flex-col items-start gap-4">
          <p className="line-clamp-2 text-2xl font-bold text-start text-primary-dark">
            {title}
          </p>
          <span className="text-primary-text line-clamp-[8]">
            {description}
          </span>
          <div className="flex w-full justify-between items-center">
            <p className="text-2xl text-primary-blue font-bold">
              ${price?.toFixed(2)}
            </p>
            <ProductNumber buttonSize="md" />
          </div>
          <Button className="w-full">
            Add to cart
            <ShoppingCart className="w-5" />
          </Button>
        </div>
        <CloseButton handleBackClick={handleBackClick} />
      </div>
    </div>
  )
}
