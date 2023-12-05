import { useEffect, useState } from "react"
import fillStar from "../assets/Image/fillStar.png"
import emptyStar from "../assets/Image/empty.png"

export default function Rating({ productInfo }) {
  const [ratetins, setRating] = useState([productInfo.rating.rate])

  let ratingHandler = () => {
    let ratingDom = []
    let rate = Math.floor(ratetins)
    for (let i = 0; i < 5; i++) {
      if (rate) {
        ratingDom.push(<img src={fillStar} alt="fillStar" className="w-3.5 h-4" />)
        rate -= 1
      } else {
        ratingDom.push(<img src={emptyStar} alt="fillStar" className="w-3.5 h-4" />)
      }
    }
    return ratingDom
  }

  return (
    <>
      <div className="flex">
        <div className="flex">
          {ratingHandler()}
        </div>
        <div className="-mt-1	ml-3">
          <p className="text-md text-base">{productInfo.rating.rate}</p>
        </div>
      </div>
    </>
  )
}