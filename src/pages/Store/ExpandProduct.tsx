import { Button } from '../../components/Button'
import { ShoppingCart } from 'lucide-react'
import { ProductNumber } from '../../components/ProductNumber'
import { CloseButton } from '../../components/CloseButton'
import { productProps } from './propTypes'

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
    <div className="flex top-[5rem] bottom-0 w-full bg-primary-low-opacity-blue backdrop-blur-sm fixed items-center justify-center">
      <div className="flex h-[28rem] border relative p-6 pt-12 w-full ml-[10%] mr-[11%] shadow-md border-t-4 border-primary-blue border-opacity-50 bg-white rounded-lg">
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
        <div className="flex px-10 py-4 w-1/2 flex-col items-start justify-between gap-4">
          <div className="flex flex-col gap-4">
            <p className="line-clamp-2 text-2xl font-bold text-start text-primary-dark">
              {title}
            </p>
            <span className="text-primary-text line-clamp-[7]">
              {description}
            </span>
          </div>
          <div className="flex flex-col w-full gap-4">
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
        </div>
        <CloseButton handleBackClick={handleBackClick} />
      </div>
    </div>
  )
}
