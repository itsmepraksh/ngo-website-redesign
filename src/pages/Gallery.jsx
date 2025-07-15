import designUnderline2 from "../assets/svgs/design-underline.svg";
import yellowSvg from "../assets/svgs/yellow-elem.svg";
import image1 from "../assets/images/gallery-1.jpg";
import image2 from "../assets/images/gallery-2.jpg";
import image3 from "../assets/images/gallery-3.jpg";
import image4 from "../assets/images/gallery-4.jpg";
import image5 from "../assets/images/gallery-5.jpg";
import image6 from "../assets/images/gallery-6.jpg";
import HeaderDetails from "../components/HeaderDetails";

const Gallery = () => {
  return (
    <div className=" relative w-full md:flex md:flex-col xl:justify-center md:gap-5  p-6 md:pt-20 xl:px-[7%] mb-25 ">

      <HeaderDetails inputSvg={yellowSvg} headlineTxt={"Our community in pictures"} headStyle={"lg:w-1/2"}  underlineSvg={designUnderline2} styleRoundSvg={" rotate-35 top-5 md:top-19 -left-[15%] md:left-[7%] lg:left-[25%] 2xl:left-[35%] "}
      divContainer={"lg:flex lg:flex-col lg:items-center"}
      />
       
      <div id="gallery" className="flex flex-wrap gap-10 lg:gap-5 py-4 mt-4">
        <img src={image2} alt="image-1" className="rounded-xl object-cover lg:w-[48%]" />
        <img src={image3} alt="image-2" className="rounded-xl object-cover lg:w-[48%]" />
        <img src={image4} alt="image-3" className="rounded-xl object-cover lg:w-[48%]" />
        <img src={image5} alt="image-4" className="rounded-xl object-cover lg:w-[48%]" />
        <img src={image6} alt="image-5" className="rounded-xl object-cover lg:w-[48%]" />
        <img src={image1} alt="image-6" className="rounded-xl object-cover lg:w-[48%]" />
      </div>
    </div>
  );
};

export default Gallery;
