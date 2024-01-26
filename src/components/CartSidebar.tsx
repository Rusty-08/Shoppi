import { ShoppingBasket } from 'lucide-react'
import { ForwardedRef } from 'react'

type CartSidebarProps = {
  showSidebar: boolean
  forwaredRef: ForwardedRef<HTMLDivElement>
}

export const CartSidebar = ({ showSidebar, forwaredRef }: CartSidebarProps) => {
  return (
    <div
      ref={forwaredRef}
      className={`tranform ${
        showSidebar ? 'translate-x-0' : 'translate-x-full'
      } transition-transform border duration-300 px-4 ease-in-out fixed top-[5rem] shadow-md right-0 bg-slate-50 h-container-height w-[20rem]`}
    >
      <div className="flex items-center p-4 px-0 border-b gap-2">
        <ShoppingBasket className="w-6 h-6 text-primary-blue" />
        <h1 className="text-xl font-medium text-primary-blue">Shopping Cart</h1>
      </div>
    </div>
  )
}
