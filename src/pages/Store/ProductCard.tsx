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
    <div className="bg-white hover:scale-[1.02] hover:rounded-bl-[2rem] hover:rounded-br-[2rem] border-t border-t-transparent hover:border-t-primary-blue hover:shadow-md transition-all duration-500 ease-in-out pb-4 pt-6 shadow-sm h-[20rem] flex flex-col items-center justify-between">
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
          <StarRating readonly={true} />
        </div>
        <Button onClick={addToCart} className="w-full">
          Add to cart
          <ShoppingCart className="w-5" />
        </Button>
      </div>
    </div>
  )
}
