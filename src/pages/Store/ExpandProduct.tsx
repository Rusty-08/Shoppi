import { Button } from '../../components/Button'
import { Check, ShoppingCart } from 'lucide-react'
import { ProductNumber } from '../../components/ProductNumber'
import { productProps } from './propTypes'
import { StarRating } from '../../components/StarRating'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../slices/productSlice'

type expandProductProps = {
  data: productProps
}

export const ExpandProduct = ({ data }: expandProductProps) => {
  const dispatch = useDispatch()

  const { id, title, description, image, price, category, addedToCart } = data

  const handleAddToCard = () => {
    dispatch(addToCart(id))
  }

  return (
    <div className="py-8 w-full border-b-4 border-b-primary-low-opacity-blue">
      <div className="flex h-[28rem] gap-10 relative w-full">
        <div className="h-full border rounded-lg border-primary-low-opacity-blue shadow-sm bg-white w-1/2 flex items-center justify-center bg-cover">
          <img
            className={`${
              category === 'electronics' || category === 'jewelery'
                ? 'h-1/2'
                : 'h-3/4'
            }`}
            src={image}
            alt={title}
          />
        </div>
        <div className="flex py-4 w-1/2 flex-col items-start justify-between gap-4">
          <div className="flex flex-col gap-4">
            <div>
              <p className="line-clamp-2 mb-1 text-2xl font-bold text-start text-primary-dark">
                {title}
              </p>
              <div className="flex items-center gap-2">
                <StarRating size={18} readonly={true} />
                <p className="text-primary-text text-sm border-x border-x-primary-low-opacity-blue px-2">
                  1k Ratings
                </p>
                <p className="text-primary-text text-sm">100 Sold</p>
              </div>
            </div>
            <p className="font-medium">
              Description:
              <span className="text-primary-text mt-1 font-normal line-clamp-[6]">
                {description}
              </span>
            </p>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex w-full justify-between items-center">
              <p className="text-2xl text-primary-blue font-bold">
                ${price.toFixed(2)}
              </p>
              <ProductNumber buttonSize="md" />
            </div>
            <div className="w-full flex gap-4">
              <Button onClick={handleAddToCard} variant="bordered">
                {addedToCart ? (
                  <Check className="w-5" />
                ) : (
                  <ShoppingCart className="w-5" />
                )}
                Add to Cart
              </Button>
              <Button className="flex-grow">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
