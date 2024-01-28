import { productProps } from './propTypes'
import { StarRating } from '../../components/StarRating'
import { ShoppingCart } from 'lucide-react'
import { Button } from '../../components/Button'

export const ProductCard = ({ title, price, image }: productProps) => {
  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div className="bg-white rounded-lg hover:scale-[1.02] border-t-2 border-t-transparent hover:border-t-primary-blue hover:shadow-md transition-all duration-500 ease-in-out pb-4 pt-6 shadow-sm h-[20rem] flex flex-col items-center justify-between">
      <div className="h-1/3 flex items-center justify-center bg-cover">
        <img className="h-full" src={image} alt={title} />
      </div>
      <div className="flex px-5 w-full flex-col items-start gap-4">
        <p className="line-clamp-2 font-medium text-start text-primary-dark">
          {title}
        </p>
        <div className="flex w-full justify-between items-center">
          <p className="text-lg text-primary-blue font-bold">
            ${price.toFixed(2)}
          </p>
          <StarRating size={15} />
        </div>
        <Button
          variant="bordered"
          onClick={addToCart}
          className="w-full text-sm py-2 pr-10"
        >
          <ShoppingCart className="w-5" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
