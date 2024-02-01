import { ShoppingCart } from 'lucide-react'
import { ForwardedRef, useEffect, useState } from 'react'
import { productProps } from '../pages/Store/propTypes'
import blankSlate from '../assets/images/empty-slate.png'
import { Cart } from './Cart'
import Checkbox from './Checkbox'
import { Button } from './Button'
import { useDispatch } from 'react-redux'
import {
  deleteSelectedCart,
  toggleAllCartChecked,
} from '../slices/productSlice'

type CartSidebarProps = {
  products?: productProps[]
  showSidebar: boolean
  forwaredRef: ForwardedRef<HTMLDivElement>
}

export const CartSidebar = ({
  products,
  showSidebar,
  forwaredRef,
}: CartSidebarProps) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)

  const toggleChecked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setChecked(!checked)
    dispatch(toggleAllCartChecked(!checked))
  }

  const totalCheckedAmount = () => {
    const checkedProducts = products?.filter(product => product.checked)
    return checkedProducts
      ?.reduce(
        (acc, product) => acc + product.price * product.quantityInCart,
        0,
      )
      .toFixed(2)
  }

  const deleteAllSelectedCarts = () => {
    dispatch(deleteSelectedCart())
    setChecked(false)
  }

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showSidebar])

  return (
    <aside
      className={`${
        showSidebar ? 'z-10' : 'z-[-1]'
      } bg-primary-low-opacity-blue fixed top-0 left-0 transition-all ease-in-out w-screen h-screen`}
    >
      <div
        ref={forwaredRef}
        className={`tranform ${
          showSidebar ? 'translate-x-0' : 'translate-x-full'
        } z-20 transition-transform duration-300 ease-in-out overflow-y-auto fixed top-[5rem] shadow-md right-0 bg-slate-50 h-container-height w-[40rem] max-w-[100vw]`}
      >
        <div className="flex flex-col h-full w-full">
          <div className="flex items-center flex-shrink-0 px-6 h-16 border-b border-b-primary-low-opacity-blue gap-2">
            <ShoppingCart className="w-6 h-6 text-primary-blue" />
            <h1 className="text-lg font-medium text-primary-blue">
              Shopping Cart
            </h1>
          </div>
          {products && products.length > 0 ? (
            <div
              style={{ minHeight: 'calc(100% - 9rem)' }}
              className="flex w-full p-6 gap-2 overflow-y-auto flex-col"
            >
              {products?.map(product => (
                <Cart key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-grow justify-center items-center">
              <img className="w-3/4" src={blankSlate} />
            </div>
          )}
          <div className="w-full shadow-md flex items-center px-6 justify-between bg-white h-20 border border-primary-low-opacity-blue">
            <div className="flex items-center gap-3">
              <Checkbox checked={checked} toggle={toggleChecked} />
              <Button
                onClick={toggleChecked}
                variant="transparent"
                className="px-2 text-sm"
              >
                Select All ({products?.length})
              </Button>
              <Button
                onClick={deleteAllSelectedCarts}
                variant="transparent"
                className="px-2 text-sm text-red-500 hover:text-red-900"
              >
                Delete
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="font-bold text-primary-blue text-xl">{`$${totalCheckedAmount()}`}</h1>
              <Button className="px-14">Check Out</Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
