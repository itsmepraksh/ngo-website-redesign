import designUnderline2 from "../assets/svgs/design-underline.svg";

import registration from "../assets/images/registration-certificate.png";
import yellowSvg from "../assets/svgs/yellow-elem.svg";
import pancard from "../assets/images/PAN-Card.jpg";
import iso from "../assets/images/iso-certificate.png";
import PortraitCert from "../components/PortraitCert";
import LandscapeCert from "../components/LandscapeCert";
import PdfViewer from "../components/PdfViewer";

const Certificates = () => {
  return (
    // https://docs.google.com/viewerng/viewer?url=https://bababhaskarpawarvrudhashram.org/wp-content/uploads/2022/11/9001-BABA-BHASKAR-PAWAR-VRUDHASHRAM-TRUST-_page-0001-1.pdf
    <div className=" relative w-full  p-6 md:pt-20 xl:px-[7%] mb-25 ">
      <div id="part-one" >
        <img
          src={yellowSvg}
          alt="yellow-elem"
          className="absolute rotate-35 top-5 md:top-19  md:left-[25%] lg:left-[30%] xl:left-[35%] 2xl:left-[40%]  -z-[1]"
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
      <div
        id="certificates"
        className="flex flex-wrap items-center justify-center gap-10 py-4 mt-10 h-full w-full "
      >
        <PortraitCert certImg={registration} certName={"Trust registration certificate"} />

        <PortraitCert certImg={iso} certName={"iso 9001 certification"} />

        <LandscapeCert certImg={pancard} certName={"Pan Card"} />
        
        {/* <PdfViewer/> */}

        <div className="w-full md:w-[40%]   flex flex-col items-center shrink-[0] bg-[#FFD9B3] rounded-lg p-2 ">
          <h1 className="text-lg font-medium py-1 rounded-lg bg-[#FFF2E0] text-[#4D2300] px-4 w-fit my-4">
            "NITI AAYOG"
          </h1>

          <div
            id="details"
            className="text-xs text-gray-700  p-2 bg-[white] rounded-lg"
          >
            <p>our organization has been granted the</p>
            <h3 className="font-medium text-sm text-zinc-800 py-2">
              NITI AAYOG Registration number :
            </h3>
            <p className="p-1 text-center border-[#FF6F00] border-[1px] my-2 mx-4 text-sm font-medium text-black ">
              {" "}
              MH/2021/0272400{" "}
            </p>
            <p className="leading-[1.5] py-2">
              Please note that there is no certificate is allocated. Only a
              Unique ID is given. You can visit their website NGO DARPAN.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
