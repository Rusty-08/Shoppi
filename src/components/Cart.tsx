import { useDispatch } from 'react-redux'
import { productProps } from '../pages/Store/propTypes'
import { Button } from './Button'
import { ProductNumber } from './ProductNumber'
import { Trash } from 'lucide-react'
import {
  decrementCount,
  incrementCount,
  removeFromCart,
} from '../slices/productSlice'

type ProductProps = {
  product: productProps
}

export const Cart = ({ product }: ProductProps) => {
  const dispatch = useDispatch()
  const { id, image, title, price, quantityInCart } = product

  const removeCart = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation()
    dispatch(removeFromCart(id))
  }

  return (
    <div
      key={id}
      className="h-20 border rounded-md py-2 pr-2 w-full flex flex-row justify-between items-center"
    >
      <div className="flex w-1/2 items-center h-full">
        <div className="h-full flex items-center justify-center w-16 flex-shrink-0">
          <img className="h-1/2" src={image} alt={title} />
        </div>
        <div className="flex flex-col">
          <p className="text-[0.8rem] font-medium line-clamp-2 text-primary-dark">
            {title}
          </p>
          <span className="text-primary-blue text-sm">{`$${price}`}</span>
        </div>
      </div>
      <p className="text-sm font-medium text-primary-blue">{`$${
        price * quantityInCart
      }`}</p>
      <ProductNumber
        buttonSize="sm"
        value={quantityInCart}
        increament={() => dispatch(incrementCount(id))}
        decreament={() => dispatch(decrementCount(id))}
      />
      <Button
        onClick={e => removeCart(e, id)}
        className="text-red-600 hover:text-red-800"
        variant="transparent"
        size="icon"
      >
        <Trash strokeWidth={1} />
      </Button>
    </div>
  )
}
