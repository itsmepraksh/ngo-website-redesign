

const PortraitCert = ({certName,certImg}) => {
  return (
    <div className="w-full h-full md:w-[40%] lg:w-[35%] xl:w-[25%] 2xl:w-[20%] md:h-96 lg:h-fit lg:pb-6 xl:px-4 flex flex-col items-center shrink-[0] bg-[#FFD9B3] rounded-lg p-2 cursor-pointer ">
      <h1 className="text-lg font-medium py-1 rounded-lg bg-[#FFF2E0] text-[#4D2300] px-4 w-fit my-4">
        {certName}
      </h1>
      <img
        src={certImg}
        alt="image-1"
        className="rounded-xl object-cover  md:h-70 lg:h-96 "
      />
    </div>
  );
};

export default PortraitCert;
