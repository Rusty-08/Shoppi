import { ShoppingCart } from 'lucide-react'
import { productProps } from './data/propTypes'
import { Button } from '../../components/Button'
import { StarRating } from '../../components/StarRating'

export const ProductCard = ({
  title,
  price,
  image,
  expanded,
}: productProps) => {
  return (
    <div className="bg-white hover:scale-[1.02] hover:shadow-md transition-transform duration-300 ease-in-out pb-4 pt-6 shadow-sm h-[20rem] flex flex-col items-center justify-between">
      <div className="h-1/3 flex items-center justify-center bg-cover">
        <img className="h-full" src={image} alt={title} />
      </div>
      <div className="flex px-5 w-full flex-col items-start gap-4">
        <p
          className={`line-clamp-2 font-medium text-start ${
            expanded ? 'text-primary-blue' : 'text-primary-dark'
          }`}
        >
          {title}
        </p>
        <div className="flex w-full justify-between items-center">
          <p className="text-lg text-primary-blue font-bold">
            ${price.toFixed(2)}
          </p>
          <StarRating />
        </div>
        <Button className="w-full">
          Add to cart
          <ShoppingCart className="w-5" />
        </Button>
      </div>
    </div>
  )
}
