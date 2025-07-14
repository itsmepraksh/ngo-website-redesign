import designUnderline2 from "../assets/svgs/design-underline2.svg";
import yellowSvg from "../assets/svgs/yellow-elem.svg"; 
import Forms from "../components/Forms";
import Logo from "../components/Logo";

const Contact = () => {
  return (
    <div className=" relative w-full md:flex xl:justify-center md:gap-5  p-6 md:pt-20 xl:px-[7%] mb-25 ">
      <div id="details" className="md:w-1/2 xl:w-[45%]  " >
      <div id="part-one">
        <img
          src={yellowSvg}
          alt="yellow-elem"
          className="absolute top-5 md:top-19 -left-[10%] md:-left-[7%] lg:-left-[5%] xl:left-[8%] -z-[1]"
        />

        <h1 className="font-bold text-zinc-800 text-4xl md:text-5xl pt-7 pb-5 md:py-10">Contact us</h1>
        <img src={designUnderline2} alt="design-underline" />
      </div>
      <div id="part-two" className="py-5 flex flex-col gap-5">
        <div id="contactNo" className=" py-2 flex flex-col gap-4 text-[#4D2300]">
          <div className="flex gap-4">
            <p className="bg-[#FFD9B3] rounded-2xl px-4 py-2">+91 9890776377</p>
            <p className="bg-[#FFD9B3] rounded-2xl px-4 py-2">+91 9168777939</p>
          </div>
          
          <p className="bg-[#FFD9B3] rounded-2xl px-4 py-2 w-fit">amarpawar771@gmail.com</p>
        </div>

        <Logo color={'text-[#FF6F00]'} name={'Baba Bhaskar Pawar Vrudhashram'} />

        <div id="address" className=" text-[#B34A00] text-sm lg:w-1/2">No.48, Sakwar, Post, National Highway, near Vagad Global School, East, Khaniwade, Virar, Maharashtra 401305.</div>
        <div id="business-hours">
          <h3 className="font-bold ">Inquires hours</h3>
          <div id="timings" className="flex gap-10">
            <div id="days" className="flex flex-col gap-3 py-4">
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <p>Saturday</p>
              <p>Sunday</p>
            </div>
            <div id="time"  className="flex flex-col gap-3 py-4">
              <p>8am - 4pm</p>
              <p>8am - 4pm</p>
              <p>8am - 4pm</p>
              <p>8am - 4pm</p>
              <p>8am - 4pm</p>
              <p>closed</p>
              <p>closed</p>
            </div>
          </div>
        </div>
      </div>

      </div>

      <Forms edit={"md:w-1/2 xl:w-[45%] md:h-fit md:p-8"}/>
    </div>
  );
};

export default Contact;
