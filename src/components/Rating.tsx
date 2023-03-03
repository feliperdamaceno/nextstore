// Styles
import { HiStar as FilledStar } from 'react-icons/hi'
import { HiOutlineStar as UnfilledStar } from 'react-icons/hi'

interface RatingProps {
  rating: number
}

export default function Rating({ rating }: RatingProps) {
  const stars = [1, 2, 3, 4, 5]
  return (
    <span className="text-base flex text-yellow-500">
      {stars.map((index) =>
        rating >= index ? (
          <FilledStar key={index} />
        ) : (
          <UnfilledStar key={index} />
        )
      )}
    </span>
  )
}
