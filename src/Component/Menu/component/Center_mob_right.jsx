import close from "../../../../public/image/menu/close.svg";
import logo_mob from "../../../../public/image/menu/logo_mob.webp";

const Center_mob_right = ({setclick,click}) => {
  return (
    <div className="right w-[64%] h-[100%] flex ">
      <img onClick={()=>setclick(!click)} src={close} alt="" className="w-[36px] h-[36px] p-[8px] cursor-pointer" />
      <div className="min-w-[130px] max-w-[153px] w-fit flex gap-[10px] items-center">
        <img src={logo_mob} alt="" className="w-[32px] h-[32px]" />
        <h5 className="font-[700] text-[12px]">اپلیکیشن دیجی کالا</h5>
      </div>
    </div>
  );
};

export default Center_mob_right;
