import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

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
    <div className="flex items-center justify-center relative gap-6">
      <button
        className="text-primary-text hover:text-primary-dark active:scale-90"
        onClick={decreamentCount}
      >
        <Minus className={iconSize()} strokeWidth={1} />
      </button>
      <p className={`${numberSize()} text-primary-dark font-medium absolute`}>
        {count}
      </p>
      <button
        className="text-primary-text hover:text-primary-dark active:scale-95"
        onClick={increamentCount}
      >
        <Plus className={iconSize()} strokeWidth={1} />
      </button>
    </div>
  )
}
