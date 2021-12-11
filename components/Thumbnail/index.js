import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import ReactStars from 'react-rating-stars-component'
import { useState } from 'react'
import { useRouter } from 'next/router'
const getImageLink = (idx) => {
  if (idx % 10 === 0) {
    return 'https://cdn.myanimelist.net/images/anime/4/19644.jpg'
  } else if (idx % 10 === 1) {
    return 'https://cdn.myanimelist.net/images/anime/1439/93480.jpg'
  } else if (idx % 10 === 2) {
    return 'https://cdn.myanimelist.net/images/anime/7/20310.jpg'
  } else if (idx % 10 === 3) {
    return 'https://cdn.myanimelist.net/images/anime/1796/91065.jpg'
  } else if (idx % 10 === 4) {
    return 'https://cdn.myanimelist.net/images/anime/7/21569.jpg'
  } else if (idx % 10 === 5) {
    return 'https://cdn.myanimelist.net/images/anime/12/66961.jpg'
  } else if (idx % 10 === 6) {
    return 'https://cdn.myanimelist.net/images/anime/11/73923.jpg'
  } else if (idx % 10 === 7) {
    return 'https://cdn.myanimelist.net/images/anime/12/49655.jpg'
  } else if (idx % 10 === 8) {
    return 'https://cdn.myanimelist.net/images/anime/9/10521.jpg'
  } else if (idx % 10 === 9) {
    return 'https://cdn.myanimelist.net/images/anime/10/18793.jpg'
  }
}

function Thumbnail({ result }) {
  const [rating, setRating] = useState(result.rating ? (result.rating / 9) * 5 : 0)
  const router = useRouter()
  const onRatingChange = (val) => {
    console.log(val)
    setRating(val)
  }
  const handleClick = () => {
    router.push(`/watch/?rating=${rating}&movie=${result.name}`)
  }
  return (
    <div className="group cursor-pointer sm:p-3 ">
      <Image layout="responsive" height={300} width={200} src={result.image} onClick={handleClick} priority />
      <div className="p-2">
        <p className="truncate max-w-md">{result.genre}</p>
        <p className="truncate max-w-md text-lg">Tập: {result.episodes}</p>
        <h2
          className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold truncate"
          onClick={handleClick}
        >
          {result.name}
        </h2>
        <div className="z-50">
          <ReactStars
            count={5}
            value={rating}
            onChange={onRatingChange}
            size={20}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </div>
  )
}

export default Thumbnail
