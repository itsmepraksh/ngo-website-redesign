

const PortraitCert = ({certName,certImg}) => {
  return (
    <div className="w-full h-full md:w-[40%] md:h-96  flex flex-col items-center shrink-[0] bg-[#FFD9B3] rounded-lg p-2 cursor-pointer ">
      <h1 className="text-lg font-medium py-1 rounded-lg bg-[#FFF2E0] text-[#4D2300] px-4 w-fit my-4">
        {certName}
      </h1>
      <img
        src={certImg}
        alt="image-1"
        className="rounded-xl object-cover  md:h-70  "
      />
    </div>
  );
};

export default PortraitCert;
