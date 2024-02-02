import { ChevronDown, LucideIcon } from 'lucide-react'
import { Button } from './Button'
import { ReactNode, useState } from 'react'

type DropdownProps = {
  children: ReactNode
  Description: string | LucideIcon
}

const Dropdown = ({ children, Description }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <Button
        onClick={toggle}
        variant="bordered"
        className="px-4 border border-primary-low-opacity-blue gap-1"
      >
        {typeof Description === 'string' ? (
          Description
        ) : (
          <Description strokeWidth={1} />
        )}
        <ChevronDown className="w-4" strokeWidth={1} />
      </Button>
      {isOpen && (
        <div className="absolute bg-white shadow-md top-14 right-0 min-h-40 min-w-52 border border-primary-low-opacity-blue rounded-md">
          {children}
        </div>
      )}
    </div>
  )
}

export default Dropdown
