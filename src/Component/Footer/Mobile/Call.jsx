
import headphone from "../../../../public/image/footer/mobile/headphone.svg";

const Call = () => {
    return ( 
        <div className=" call h-[auto] w-[100%] flex justify-between items-center py-[8px] border-b border-solid pr-[10px]">
        <div className="right flex gap-[20px]">
          <img
            src={headphone}
            alt=""
            className="w-[24px] h-[24px] object-contai self-center "
          />
          <div className="text flex flex-col gap-[10px]">
            <p className="text-[black] text-[10px] font-[400] leading-[2.17]">
              ۷ روز هفته، ۲۴ ساعت
            </p>
            <p className="text-[black] text-[13px] font-[700] leading-[2.15]">
              تماس با پشتیبانی
            </p>
          </div>
        </div>

        <div className="left w-[62px] px-[16px] h-[38px] py-[8px] border border-solid border-[black] rounded-[6px]">
          <a
            href="#"
            className="flex justify-center items-center w-[100%] h-[100%] text-[black] text-[12px] font-[700] "
          >
            تماس
          </a>
        </div>
      </div>
     );
}
 
export default Call;