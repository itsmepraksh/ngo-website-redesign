import designUnderline2 from "../assets/images/design-underline.svg";
import yellowSvg from "../assets/images/yellow-elem.svg";
import registration from "../assets/images/registration-certificate.png";
import pancard from "../assets/images/PAN-Card.jpg";
import iso from "../assets/images/iso-certificate.png";


const Certificates = () => {
  return (
    // https://docs.google.com/viewerng/viewer?url=https://bababhaskarpawarvrudhashram.org/wp-content/uploads/2022/11/9001-BABA-BHASKAR-PAWAR-VRUDHASHRAM-TRUST-_page-0001-1.pdf
    <div className=" relative w-full md:flex xl:justify-center md:gap-5  p-6 md:pt-20 xl:px-[7%] ">
      <div id="part-one">
        <img
          src={yellowSvg}
          alt="yellow-elem"
          className="absolute rotate-35 top-5 md:top-19 -left-[15%] md:-left-[7%] lg:-left-[5%] xl:left-[8%] -z-[1]"
        />

        <h1 className="font-bold text-zinc-800 text-center text-4xl md:text-5xl pt-7 pb-5 md:py-10">
          Certificates
        </h1>
        <img
          src={designUnderline2}
          alt="design-underline"
          className="flex justify-self-center"
        />
      </div>
      <div id="gallery" className="flex flex-wrap gap-10 py-4 mt-4">
        <div>
          <h1 className="text-lg font-medium py-1 rounded-lg bg-[#FFF2E0] text-[#4D2300] px-4 w-fit my-4">Trust registration certificate</h1>
        <img src={registration} alt="image-1" className="rounded-xl object-cover" />
        </div> 
         <div>
          <h1 className="text-lg font-medium py-1 rounded-lg bg-[#FFF2E0] text-[#4D2300] px-4 w-fit my-4">Pan Card</h1>
        <img src={pancard} alt="image-1" className="rounded-xl object-cover" />
        </div> <div>
          <h1 className="text-lg font-medium py-1 rounded-lg bg-[#FFF2E0] text-[#4D2300] px-4 w-fit my-4">iso 9001 certification</h1>
        <img src={iso} alt="image-1" className="rounded-xl object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
