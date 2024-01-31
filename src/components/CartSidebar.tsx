import { ShoppingCart } from 'lucide-react'
import { ForwardedRef } from 'react'
import { productProps } from '../pages/Store/propTypes'
import blankSlate from '../assets/images/empty-slate.png'
import { Cart } from './Cart'

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
      } transition-transform duration-300 px-6 py-2 ease-in-out overflow-y-auto fixed top-[5rem] shadow-md right-0 bg-slate-50 h-container-height w-[40rem] max-w-[100vw]`}
    >
      <div className="flex flex-col h-full w-full">
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
        {products && products.length > 0 ? (
          <div className="flex w-full py-4 gap-2 flex-col">
            {products?.map(product => (
              <Cart key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-grow justify-center items-center">
            <img className="w-3/4" src={blankSlate} />
          </div>
        )}
      </div>
    </div>
  )
}
