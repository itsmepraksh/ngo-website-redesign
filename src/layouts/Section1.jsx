import ImageDesign from "../components/ImageDesign"
import designUnderline from '../assets/images/design-underline.svg';
import pinkSvg from '../assets/images/pink-elem.svg'
import greenSvg from '../assets/images/green-elem.svg'

const Section1 = () => {
  return (
    <div   className=" relative w-full flex flex-col md:flex-row-reverse items-center md:items-start justify-evenly 2xl:justify-self-center p-6 md:pt-15 xl:px-[7%] "
    >
        <ImageDesign/>
         
         

        <div id="section1-data" className="py-2 text-base text-zinc-700 relative lg:w-[50%] xl:w-[40%]  ">
          <img src={pinkSvg} alt="pink-elem" className="absolute top-10 -left-25 md:-left-30 md:top-5 -z-[1]" />
          <img src={greenSvg} alt="green-elem" className="absolute bottom-35 md:bottom-65 lg:bottom-60 right-[7%] lg:right-[4%] -z-[1]" />
            <h3 className="pb-4">VOLUNTEER FOR THE CAUSE</h3>
            <h4 className="font-bold text-5xl text-zinc-800 leading-[1.25] xl:w-2/3  ">Start giving back to the community today!</h4>
            <img src={designUnderline} alt="underline-pattern" className="my-3 md:mt-8" />
            <p >Together, we shape a narrative of shared responsibility, building bridges and transforming challenges into opportunities.</p>

            <input className="block border-[1px] w-[90%]   border-zinc-400 py-2 px-4 rounded-xl my-6 placeholder:text-sm" type="text" placeholder="Find organisations or location" />
            <button className="bg-blue-500 text-white p-2 px-8 rounded-xl">Search</button>
        </div>
    </div>
  )
}

export default Section1