import bannerSrc from "../assets/images/banner.jpg";
import bapuImgSrc from "../assets/images/bapu.jpg";
import aashramImgSrc from "../assets/images/aashram-img.jpg";
import CtaLearnMore from "../components/CtaLearnMore";
import footage from "../assets/videos/footage.mp4";
import activitySrc1 from "../assets/images/gallery-img-4.jpg";
import MarqueeBanner from "../components/MarqueeBanner";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-10 ">
      <section id="banner" className="w-full h-[90vh] md:h-[92vh] bg-red-500">
        <img
          src={bannerSrc}
          alt="banner-img"
          className="w-full h-full object-cover object-bottom"
        />
      </section>
      <section
        id="bapu-data"
        className="flex flex-col lg:flex-row items-center lg:justify-between lg:items-start gap-5 lg:gap-10 p-6 md:pt-15 md:w-[85%] "
      >
        <div id="info-part" className=" lg:w-[50%] xl:w-[35%] lg:pt-5 xl:pt-0   ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl xl:text-5xl font-bold capitalize">
              baba bhaskar pawar
            </h1>
            <hr className="w-[90%] xl:w-full my-4" />
          </div>
          <p className="text-left text-sm xl:text-base xl:pt-5 xl:pb-7  pb-5 font-medium text-zinc-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            quaerat eius exercitationem ipsam molestias vitae deleniti. Quia
            quisquam, itaque dicta veniam non possimus, at ipsa repudiandae
            consectetur similique ipsum alias cumque vero enim rerum deleniti
            sequi nihil ipsam eaque nemo.
          </p>
          <CtaLearnMore innerText={"know more"} />
        </div>

        <div id="bapu-image" className="h-72 md:h-96 w-full lg:w-[50%] xl:w-[40%] py-5">
          <img
            src={bapuImgSrc}
            className="h-full w-full object-cover rounded-lg"
            alt=""
          />
        </div>
      </section>

      <section id="about-aashram" className="w-full  p-6 md:pt-15 md:w-[85%]  ">
        <h1 className="text-left text-3xl xl:text-5xl font-medium">About Ashram</h1>
        <div id="underline" className="py-4  xl:py-7">
          <hr className="border-dashed w-full" />
          <hr className="my-1" />
        </div>

        <div id="aashram-container" className="xl:flex xl:justify-between xl:pt-5">
          <div className="h-80 md:h-96 w-full xl:w-[40%]">
            <img
              src={aashramImgSrc}
              alt="aashram-image"
              className="h-full w-full object-cover"
            />
          </div>

          <div id="aashram-info" className="py-10 xl:w-1/2">
          <h1 className="text-3xl font-medium xl:text-4xl py-4 capitalize">baba bhaskar pawar aashram</h1>
            <p className="pb-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
              nihil modi distinctio sunt cumque maxime minima eos illum iusto
              sint unde eveniet magni quaerat optio nemo voluptates nobis
              laboriosam similique non, facere eius dicta quod voluptas sequi!
              Veniam, nobis voluptatum.
            </p>
            <CtaLearnMore innerText={"Learn More"} />
          </div>
        </div>
      </section>

      <section id="aashram-video" className="h-60 md:h-96 xl:h-[70vh] w-full xl:my-20 bg-red-500">
        <video
          src={footage}
          autoPlay
          muted
          loop
          playsInline
          controls
          className="h-full w-full object-cover"
        />
      </section>

      <section
        id="aashram-activites"
        className="w-full  p-6 md:pt-15  md:w-[85%] "
      >
        <h1 className="text-left text-3xl font-medium"> Activity In Ashram</h1>

        <div id="underline" className="py-4">
          <hr className="border-dashed w-full" />
          <hr className="my-1" />
        </div>

        <div
          id="activity-images"
          className="flex flex-col lg:flex-row lg:flex-wrap gap-5 lg:pt-10"
        >
          <img src={activitySrc1} className="rounded lg:w-[48%] xl:w-[30%]" />
          <img src={activitySrc1} className="rounded lg:w-[48%] xl:w-[30%]" />
          <img src={activitySrc1} className="rounded lg:w-[48%] xl:w-[30%]" />
        </div>
      </section>

      <section
        id="gallery-aashram"
        className="w-full   p-6 md:pt-15  md:w-[85%] "
      >
        <h1 className="text-left text-3xl font-medium">Memories Of Ashram</h1>

        <div id="underline" className="py-4">
          <hr className="border-dashed w-full" />
          <hr className="my-1" />
        </div>
        <div
          id="gallery-images"
          className="flex flex-col lg:flex-row lg:flex-wrap gap-5 lg:pt-10"
        >
          <img src={activitySrc1} className="rounded  lg:w-[48%] xl:w-[30%]" />
          <img src={activitySrc1} className="rounded  lg:w-[48%] xl:w-[30%]" />
          <img src={activitySrc1} className="rounded  lg:w-[48%] xl:w-[30%]" />
        </div>
      </section>

      <section id="sponsers-logo" className=" overflow-hidden w-full bg-red-500 py-4 md:py-7 md:mt-7 lg:py-8 lg:mt-8 xl:py-10 xl:mt-10">
         

        <MarqueeBanner sponsersName={"sponsers"}/>
      </section>
    </div>
  );
};

export default Home;
