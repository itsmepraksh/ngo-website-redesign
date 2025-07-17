

const Cert = ({certName,certImg,certLink}) => {
 
    const redirect = ()=>{
        window.location.href = certLink;
    }
  return (
    <div onClick={redirect} className="w-full h-96 p-4 md:w-[40%] lg:w-[35%] xl:w-[25%] 2xl:w-[20%]  lg:pb-6 xl:px-4 flex flex-col items-center   bg-[#FFD9B3] rounded-lg cursor-pointer overflow-hidden hover:scale-[1.1] ">
      <h1 className="text-lg font-medium py-1 rounded-lg bg-[#FFF2E0] text-[#4D2300] px-4 w-fit my-4">
        {certName}
      </h1>
      <img
        src={certImg}
        alt="image-1"
        className="rounded-xl object-cover   object-center "
      />
    </div>
  );
};

export default Cert;
