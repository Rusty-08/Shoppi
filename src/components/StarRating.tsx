import { ReactNode, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

type RatingProps = {
  size: number
  readonly?: boolean
  props?: ReactNode
}

export const StarRating = ({ size, readonly, ...props }: RatingProps) => {
  const [rating, setRating] = useState(4)

  const handleRating = (rate: number) => {
    setRating(rate)
  }

  return (
    <Rating
      size={size}
      onClick={handleRating}
      initialValue={rating}
      readonly={readonly ? readonly : true}
      {...props}
      className="mb-1"
      SVGstyle={{ display: 'inline-block' }}
    />
  )
}
