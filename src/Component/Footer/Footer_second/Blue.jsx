import logo from "../../../../public/image/footer/footer_second/blue/logo.webp";
import sib from "../../../../public/image/footer/footer_second/blue/sib.svg";
import bazar from "../../../../public/image/footer/footer_second/blue/bazar.svg";
import myket from "../../../../public/image/footer/footer_second/blue/myket.svg";
import dot from "../../../../public/image/footer/footer_second/blue/dot.svg";

const Blue = () => {
  return (
    <>
      <div className="mob:hidden des:flex w-[100%] h-[auto]  justify-center my-[25px]">
        <div className="w-[96%] h-[auto] max-w-[1400px] flex  flex-row items-center   justify-between bg-[#3c4b6d]  rounded-[12px] px-[16px] py-[15px]">

          <div className="right w-fit h-[33px] mr-[25px] flex items-center gap-[15px] ">
            <img src={logo} alt="" className="w-[44px] h-[44px] object-fit" />
            <p className="text-[20px] text-[white] font-[500]">
              دانلود اپلیکیشن دیجی کالا
            </p>
          </div>

          <div className="left w-fit flex gap-[15px] items-center">
            <a href="" className="w-[158px] h-[60px] ">
            <img src={bazar} alt="" className="w-[100%] h-[100%] object-contain" />
            </a>
            <a href="" className="w-[158px] h-[60px] ">
            <img src={myket} alt="" className="w-[100%] h-[100%] object-contain" />
            </a>
            <a href="" className="w-[158px] h-[60px] ">
            <img src={sib} alt="" className="w-[100%] h-[100%] object-contain" />
            </a>
            <a href="" className="w-[43px] h-[44px] bg-[white] rounded-[4px] ">
            <img src={dot} alt="" className="w-[100%] h-[100%] object-contain" />
            </a>



           

          </div>
        </div>
      </div>
    </>
  );
};

export default Blue;
