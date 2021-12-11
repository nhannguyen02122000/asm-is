import StarRatings from 'react-star-ratings'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useGetMoviesQuery } from '../store/api.slice'
import { useSelector } from 'react-redux'
import { useRatingMutation } from '../store/api.slice'

function Watch() {
  const router = useRouter()
  const token = useSelector((state) => state.app.token)
  const {
    isReady,
    query: { id },
  } = router
  const { data, error: errorMovie, isLoading } = useGetMoviesQuery({ token }, { skip: !isReady || !token })
  const [rateOnDB, { data: rateDBData, error: rateDBError }] = useRatingMutation()

  const [rating, setRating] = useState(0)
  const [ele, setEle] = useState(null)
  const onRatingChange = (val) => {
    setRating(val)
    if (ele) {
      rateOnDB({ movieid: ele.id, rating: (val * 9) / 5, token })
    } else {
      alert('Có lỗi xảy ra, vui lòng thử lại')
    }
  }

  useEffect(() => {
    if (rateDBData) {
    } else if (rateDBError) {
      alert('Có lỗi xảy ra, vui lòng thử lại')
    }
  }, [rateDBData, rateDBError])

  useEffect(() => {
    if (!data || !id) return
    const ele = data.result.find((ele) => ele.id === +id)
    setRating((ele.rating * 5) / 9)
    setEle(ele)
  }, [data, id])

  useEffect(() => {
    if (errorMovie) router.push('/')
  }, [errorMovie])

  if (isLoading) return null
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="self-start mb-8">
        <h2 className="text-3xl">Xem phim: {`${ele?.name ?? ''}`}</h2>
        <p className="text-lg mt-1">Tập: {`${ele?.episodes ?? ''}`}</p>
      </div>
      <iframe
        className="w-3/4 h-[50vh]"
        // width="853"
        // height="480"
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
