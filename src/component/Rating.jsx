import fillStar from"../assets/Image/fillStar.png"

export default function Rating() {
  return (
    <>
    <div className="flex">
      <div className="flex">
        <img src={fillStar} alt="fillStar" className="w-3.5 h-4" />
        <img src={fillStar} alt="fillStar" className="w-3.5 h-4" />
        <img src={fillStar} alt="fillStar" className="w-3.5 h-4" />
        <img src={fillStar} alt="fillStar" className="w-3.5 h-4" />
        <img src={fillStar} alt="fillStar" className="w-3.5 h-4" />
      </div>
      <div className="-mt-1	ml-3">
        <p className="text-md text-base">3.1</p>
      </div>
    </div>
    </>
  )
}