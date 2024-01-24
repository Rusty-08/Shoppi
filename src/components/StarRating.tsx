import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export const StarRating = ({ ...props }) => {
  const [rating, setRating] = useState(4)

  const handleRating = (rate: number) => {
    setRating(rate)
  }

  return (
    <Rating
      size={15}
      onClick={handleRating}
      initialValue={rating}
      {...props}
      className="mb-1"
      SVGstyle={{ display: 'inline-block' }}
    />
  )
}
