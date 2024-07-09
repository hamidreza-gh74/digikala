
import art_sug from "../../../public/image/suggestion/art_sug.svg";
import icon from "../../../public/image/suggestion/icon.svg";
import toman from "../../../public/image/suggestion/toman.svg";
import { NavLink } from "react-router-dom";
const Product = ({item}) => {
  return (
    
      <div className="product w-[192px] h-[auto] px-[8px] py-[12px] bg-[white] ml-[8px] rounded-[8px]">
        <NavLink to={`/product/${item.id}`} href="" className="flex flex-col items-center w-[100%] h-[100%] ">
          <div className="w-[116px] h-[14px] self-start">
            <img src={art_sug} alt="" className="w-[116px] h-[14px] " />
          </div>
          <div className="w-[150px] h-[150px] mt-[15px]">
            <img src={item.adress} alt="" className="w-[150px] h-[150px]" />
          </div>

          <div className="font-[700] text-[10px] self-start mt-[8px] text-[#3f4064] leading-[2.17] ">
            <h3>{item.text.substr(0,42)}</h3>
          </div>
          <div className="flex self-start gap-[5px] mt-[20px]">
            <img src={icon} alt="" className="w-[18px] h-[18px]" />
            <div className="text-[10px] text-[#62666d] font-[400]">
              ارسال فروشنده
            </div>
          </div>
          <div className="flex justify-between w-[100%] mt-[15px]">
            <div className="w-[34px] h-[20px] px-[4px] bg-[red] rounded-[16px] font-[700] text-[10px] text-[white] leading-[20px] text-center self-start ">
              ۴٪
            </div>
            <div className="flex gap-[5px]">
              <span className="text-[10px] font-[700]">۱,۶۴۱,۶۰۰</span>
              <img src={toman} alt="" className="w-[16px] h-[16px]" />
            </div>
          </div>

          <div className="flex self-end pl-[20px] text-[10px] text-[#c0c2c5] font-[700] mb-[20px]  ">
            ۱,۷۱۰,۰۰۰
          </div>

          <div className="flex self-end text-[10px] text-[red] font-[700]">
            ۲۸ : ۰۴ : ۱۱
          </div>
        </NavLink>
      </div>
    
  );
};

export default Product;
