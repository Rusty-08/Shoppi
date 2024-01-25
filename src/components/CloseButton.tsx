import { Button } from './Button'
import { X } from 'lucide-react'

type CloseButtonProps = {
  // eslint-disable-next-line no-unused-vars
  handleBackClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const CloseButton = ({ handleBackClick }: CloseButtonProps) => {
  return (
    <Button
      onClick={handleBackClick}
      className="absolute top-3 right-4"
      variant="ghost"
      size="icon"
    >
      <X strokeWidth={1} />
    </Button>
  )
}
