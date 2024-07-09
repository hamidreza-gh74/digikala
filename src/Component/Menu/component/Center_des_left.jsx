import buy from "../../../../public/image/menu/buy.svg";
import sabad from "../../../../public/image/menu/sabad.svg";


const Center_des_left = () => {
  return (
    <div className="left w-[20%] h-[100%]  flex items-center justify-end ">
      <a href="" className="w-[132px] h-[40px] flex ">
        <button className="flex justify-center items-center w-[100%] h-[100%] py-[8px] px-[16px] border-[1px] border-solid border-[#e0e0e2] rounded-[8px] text-[11px] font-[700] text-[#0c0c0c] ">
          <img
            src={buy}
            alt=""
            className="w-[24px] h-[24px] ml-[8px] self-center "
          />
          ورود | ثبت نام
        </button>
      </a>
      <div className="line w-[1px] h-[24px] bg-[#e0e0e2] mx-[12px]"></div>

      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <img src={sabad} alt="" className="w-[24px] h-[24px]" />
      </div>
    </div>
  );
};

export default Center_des_left;
