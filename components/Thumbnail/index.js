import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'

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
  return (
    <div className="group cursor-pointer p-3 transition duration-200 ease-in transform sm:hover:scale-105 hover-:z-50">
      <Image layout="responsive" height={900} width={600} src={getImageLink(result.id)} />
      <div className="p-2">
        <p className="truncate max-w-md">{result.genre}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.name}
        </h2>
        <p>
          <ThumbUpIcon className="h-5 mt-1" />
        </p>
      </div>
    </div>
  )
}

export default Thumbnail
