import { LucideIcon } from 'lucide-react'
import { ComponentProps } from 'react'
import { ClassNameValue, twMerge } from 'tailwind-merge'

type InputProps = {
  className?: ClassNameValue
  Icon?: LucideIcon
}

type MixedProps = InputProps & ComponentProps<'input'>

const Input = ({ className, Icon, ...props }: MixedProps) => {
  return (
    <div className="flex-grow flex items-center relative">
      <input
        className={twMerge(
          'border text-primary-dark rounded h-10 px-4 ps-8 pb-0.5 border-primary-low-opacity-blue focus:outline-none',
          className,
        )}
        {...props}
      />
      {Icon && (
        <Icon
          className="w-4 absolute left-2.5 text-primary-text"
          strokeWidth={1}
        />
      )}
    </div>
  )
}

export default Input
