import { Check } from 'lucide-react'

type CheckboxProps = {
  checked: boolean
  // eslint-disable-next-line no-unused-vars
  toggle: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Checkbox = ({ checked, toggle }: CheckboxProps) => {
  return (
    <button
      onClick={toggle}
      className={`${
        checked && 'bg-primary-blue'
      } h-[1.1rem] flex-shrink-0 w-[1.1rem] border p-0.5 cursor-pointer flex items-center justify-center border-primary-medium hover:border-primary-blue transition-colors rounded-md`}
    >
      {checked && <Check className="text-primary" strokeWidth={3} />}
    </button>
  )
}

export default Checkbox
