import heroImg from '../assets/images/three-love.png'

const ImageDesign = () => {
  return (
    <div  className="w-80 h-80 lg:w-125 lg:h-125 xl:w-140 xl:h-140 shrink-[0]">
        <img className="w-full! h-full! object-cover blob2 " src={heroImg} alt="sectionOneHeroImg" />
    </div>
  )
}

export default ImageDesign