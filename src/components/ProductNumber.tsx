import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import { Button } from './Button'

type ProductNumberProps = {
  buttonSize: string
}

export const ProductNumber = ({ buttonSize }: ProductNumberProps) => {
  const [count, setCount] = useState(1)

  const increamentCount = () => {
    setCount(count => count + 1)
  }

  const decreamentCount = () => {
    if (count !== 1) {
      setCount(count => count - 1)
    }
  }

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
        className="px-4 py-2 hover:text-primary-blue"
        variant="transparent"
        onClick={decreamentCount}
      >
        <Minus className={iconSize()} strokeWidth={1} />
      </Button>
      <p className={`${numberSize()} text-primary-blue font-medium absolute`}>
        {count}
      </p>
      <Button
        className="px-4 py-2 hover:text-primary-blue"
        variant="transparent"
        onClick={increamentCount}
      >
        <Plus className={iconSize()} strokeWidth={1} />
      </Button>
    </div>
  )
}
