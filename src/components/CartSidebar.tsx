type CartSidebarProps = {
  showSidebar: boolean
}

export const CartSidebar = ({ showSidebar }: CartSidebarProps) => {
  return (
    <div
      className={`tranform ${
        showSidebar ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 p-4 ease-in-out fixed top-[5rem] shadow-md right-0 bg-slate-50 h-container-height w-[20rem]`}
    >
      <h1></h1>
    </div>
  )
}
