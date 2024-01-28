import { ShoppingCart, Trash } from 'lucide-react'
import { ForwardedRef } from 'react'
import { productProps } from '../pages/Store/propTypes'
import { ProductNumber } from './ProductNumber'
import { Button } from './Button'

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
  return (
    <div
      ref={forwaredRef}
      className={`tranform ${
        showSidebar ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 px-6 py-2 ease-in-out overflow-y-auto fixed top-[5rem] shadow-md right-0 bg-slate-50 h-container-height w-[40rem]`}
    >
      <div className="flex items-center p-4 px-0 border-b gap-2">
        <ShoppingCart className="w-6 h-6 text-primary-blue" />
        <div className="relative">
          <h1 className="text-lg font-medium text-primary-blue">
            Shopping Cart
          </h1>
          <div className="w-10 flex items-center font-medium justify-center h-6 border text-xs rounded-full bg-primary-blue text-primary absolute -top-2 -right-11">
            {products?.length}
          </div>
        </div>
      </div>
      <div className="flex w-full py-4 gap-2 flex-col">
        {products?.map(({ id, image, title, price }) => (
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
            <ProductNumber buttonSize="sm" />
            <Button
              className="text-red-600 hover:text-red-800"
              variant="transparent"
              size="icon"
            >
              <Trash strokeWidth={1} />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
