import sign from "../../../../public/image/footer/mobile/sign.svg";

const Up = () => {
    return ( 

        <a
        className="up_button text-[#19bfd3] font-[700] text-[13px] scroll-smooth flex gap-[5px] my-[10px]"
        href="#"
      >
        <p className="self-center">بازگشت به بالا</p>
        <img src={sign} alt="" className="w-[24px] h-[24px] object-contain" />
      </a>

     );
}
 
export default Up;