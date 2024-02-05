import { ChevronDown, ChevronUp, LucideIcon } from 'lucide-react'
import { Button } from './Button'
import { ReactNode } from 'react'
import useClickOutside from '../hooks/useClickOutside'

type DropdownProps = {
  children: ReactNode
  Description: string | LucideIcon
}

const Dropdown = ({ children, Description }: DropdownProps) => {
  const [ref, isOpen, setIsOpen] = useClickOutside(false)

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <Button
        onClick={toggle}
        variant="bordered"
        className={`${
          isOpen
            ? 'border-primary-blue bg-primary-low-opacity-blue'
            : 'border-primary-low-opacity-blue bg-white'
        } px-4 border gap-1`}
      >
        {typeof Description === 'string' ? (
          Description
        ) : (
          <Description
            className={isOpen ? 'fill-primary-blue' : 'fill-none'}
            strokeWidth={1}
          />
        )}
        {isOpen ? (
          <ChevronUp className="w-4" strokeWidth={1} />
        ) : (
          <ChevronDown className="w-4" strokeWidth={1} />
        )}
      </Button>
      <div
        ref={ref}
        className={`transform ${
          isOpen ? 'visible' : 'hidden'
        } absolute z-30 bg-white shadow-sm top-16 right-0 min-h-40 min-w-52 border border-primary-low-opacity-blue rounded-md`}
      >
        {children}
      </div>
    </div>
  )
}

export default Dropdown
