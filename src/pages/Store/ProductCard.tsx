import { productProps } from './propTypes'
import { StarRating } from '../../components/StarRating'
import { Check, ShoppingCart } from 'lucide-react'
import { Button } from '../../components/Button'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../slices/productSlice'
import { toast } from 'react-toastify'

type productCardProps = {
  data: productProps
}

export const ProductCard = ({ data }: productCardProps) => {
  const dispatch = useDispatch()

  const { id, title, image, price, addedToCart } = data

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToCart(id))
    toast.success('You successfully added the product to your Cart.', {
      autoClose: 3000,
    })
  }

  return (
    <div className="bg-white rounded-lg hover:scale-[1.02] border-t-2 border-t-transparent hover:border-t-primary-blue hover:shadow-md transition-all duration-500 ease-in-out p-4 pt-6 shadow-sm h-[20rem] flex flex-col items-center justify-between">
      <div className="h-1/3 flex items-center justify-center bg-cover">
        <img className="h-full" src={image} alt={title} />
      </div>
      <div className="flex w-full flex-col items-start gap-4">
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
          onClick={handleAddToCart}
          className="w-full text-sm py-2 pr-10"
        >
          {addedToCart ? (
            <Check className="w-5" />
          ) : (
            <ShoppingCart className="w-5" />
          )}
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
