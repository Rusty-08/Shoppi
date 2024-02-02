import { Minus, Plus } from 'lucide-react'
import { Button } from './Button'

type ProductNumberProps = {
  buttonSize: string
  value: number
  increament: () => void
  decreament: () => void
}

export const ProductNumber = ({
  buttonSize,
  value,
  increament,
  decreament,
}: ProductNumberProps) => {
  const iconSize = () => {
    if (buttonSize === 'sm') return 'w-4'
    if (buttonSize === 'md') return 'w-6'
    if (buttonSize === 'lg') return 'w-8'
  }

  const numberSize = () => {
    if (buttonSize === 'sm') return 'text-sm'
    if (buttonSize === 'md') return 'text-lg'
    if (buttonSize === 'lg') return 'text-xl'
  }

  return (
    <div className="flex rounded-lg border border-primary-low-opacity-blue items-center justify-center relative gap-6">
      <Button
        className="px-4 h-10 hover:text-primary-blue"
        variant="transparent"
        onClick={decreament}
      >
        <Minus className={iconSize()} strokeWidth={1} />
      </Button>
      <p className={`${numberSize()} text-primary-blue font-medium absolute`}>
        {value}
      </p>
      <Button
        className="px-4 h-10 hover:text-primary-blue"
        variant="transparent"
        onClick={increament}
      >
        <Plus className={iconSize()} strokeWidth={1} />
      </Button>
    </div>
  )
}
