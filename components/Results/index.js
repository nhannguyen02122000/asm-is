import Thumbnail from '../Thumbnail'

function Results({ data }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {data.slice(0, 30).map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  )
}

export default Results
