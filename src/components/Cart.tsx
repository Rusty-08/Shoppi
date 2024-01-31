import { useDispatch } from 'react-redux'
import { productProps } from '../pages/Store/propTypes'
import { Button } from './Button'
import { ProductNumber } from './ProductNumber'
import { Trash } from 'lucide-react'
import {
  checkCart,
  decrementCount,
  incrementCount,
  removeFromCart,
} from '../slices/productSlice'
import Checkbox from './Checkbox'

type ProductProps = {
  product: productProps
}

export const Cart = ({ product }: ProductProps) => {
  const dispatch = useDispatch()
  const { id, category, image, title, price, quantityInCart, checked } = product

  const removeCart = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(removeFromCart(id))
  }

  const toggleChecked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    dispatch(checkCart(id))
  }

  return (
    <div className="w-full flex items-center gap-4">
      <Checkbox checked={checked} toggle={toggleChecked} />
      <div
        key={id}
        className="h-20 border rounded-md py-2 pr-2 flex-grow flex flex-row justify-between items-center"
      >
        <div className="flex w-1/2 items-center h-full">
          <div className="h-full flex items-center justify-center w-16 flex-shrink-0">
            <img
              className={
                category === 'electronics' || category === 'jewelery'
                  ? 'h-2/5'
                  : 'h-3/4'
              }
              src={image}
              alt={title}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-[0.8rem] font-medium line-clamp-2 text-primary-dark">
              {title}
            </p>
            <span className="text-primary-blue text-sm">{`$${price.toFixed(
              2,
            )}`}</span>
          </div>
        </div>
        <p className="text-sm font-medium text-primary-blue">{`$${(
          price * quantityInCart
        ).toFixed(2)}`}</p>
        <ProductNumber
          buttonSize="sm"
          value={quantityInCart}
          increament={() => dispatch(incrementCount(id))}
          decreament={() => dispatch(decrementCount(id))}
        />
        <Button
          onClick={e => removeCart(e, id)}
          className="text-red-500 hover:text-red-800"
          variant="transparent"
          size="icon"
        >
          <Trash strokeWidth={1} />
        </Button>
      </div>
    </div>
  )
}
