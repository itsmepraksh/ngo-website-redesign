import designUnderline2 from "../assets/images/design-underline.svg";
import yellowSvg from "../assets/images/yellow-elem.svg";
import image1 from "../assets/images/gallery-1.jpg";
import image2 from "../assets/images/gallery-2.jpg";
import image3 from "../assets/images/gallery-3.jpg";
import image4 from "../assets/images/gallery-4.jpg";
import image5 from "../assets/images/gallery-5.jpg";
import image6 from "../assets/images/gallery-6.jpg";

const Gallery = () => {
  return (
    <div className=" relative w-full md:flex xl:justify-center md:gap-5  p-6 md:pt-20 xl:px-[7%] ">
      <div id="part-one">
        <img
          src={yellowSvg}
          alt="yellow-elem"
          className="absolute rotate-35 top-5 md:top-19 -left-[15%] md:-left-[7%] lg:-left-[5%] xl:left-[8%] -z-[1]"
        />

        <h1 className="font-bold text-zinc-800 text-center text-4xl md:text-5xl pt-7 pb-5 md:py-10">
          Our community in pictures
        </h1>
        <img
          src={designUnderline2}
          alt="design-underline"
          className="flex justify-self-center"
        />
      </div>
      <div id="gallery" className="flex flex-wrap gap-10 py-4 mt-4">
        <img src={image2} alt="image-1" className="rounded-xl object-cover" />
        <img src={image3} alt="" className="rounded-xl object-cover" />
        <img src={image4} alt="" className="rounded-xl object-cover" />
        <img src={image5} alt="" className="rounded-xl object-cover" />
        <img src={image6} alt="" className="rounded-xl object-cover" />
        <img src={image1} alt="" className="rounded-xl object-cover" />
      </div>
    </div>
  );
};

export default Gallery;
