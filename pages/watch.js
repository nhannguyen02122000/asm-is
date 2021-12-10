import StarRatings from 'react-star-ratings'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
function Watch() {
  // const router = useRouter()
  // const {
  //   isReady,
  //   query: { rating, movie },
  // } = router

  const [rating, setRating] = useState(0)
  const onRatingChange = (val) => {
    setRating(val)
  }

  // if (!ratingS) return null
  return (
    <div className="">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/qig4KOK2R2g?enablejsapi=1&wmode=opaque&autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <div className="flex items-center mt-5">
        <p className="mr-2">Rating: </p>
        <div className="z-50">
          <StarRatings
            rating={rating}
            starRatedColor="yellow"
            starHoverColor="yellow"
            changeRating={onRatingChange}
            numberOfStars={5}
            name="rating"
            starDimension="25px"
            starSpacing="5px"
          />
        </div>
      </div>
    </div>
  )
}

export default Watch
