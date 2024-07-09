import logo from "../../../../public/image/footer/mobile/logo.png";

const Download = () => {
    return (
        <div className=" download h-[auto] w-[100%] flex justify-between items-center py-[8px] border-b border-solid">
        <div className="right flex gap-[20px]">
          <img
            src={logo}
            alt=""
            className="w-[44px] h-[44px] object-contai self-center "
          />
          <div className="text flex flex-col gap-[10px]">
            <p className="text-[black] text-[10px] font-[400] leading-[2.17]">
              تجربه خرید بهتر در
            </p>
            <p className="text-[black] text-[13px] font-[700] leading-[2.15]">
              اپلیکیشن دیجی کالا
            </p>
          </div>
        </div>

        <div className="left w-[62px] px-[16px] h-[38px] py-[8px] bg-[black]  rounded-[6px]">
          <a
            href="#"
            className="flex justify-center items-center w-[100%] h-[100%] text-[white] text-[12px] font-[700] "
          >
            دانلود
          </a>
        </div>
      </div>

      );
}
 
export default Download;