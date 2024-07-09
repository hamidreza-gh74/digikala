import search from "../../../../public/image/menu/search.svg";
import digikala from "../../../../public/image/menu/digikala.svg";

const Mobile_bottom = () => {
  return (
    <div className="w-[100%] h-[100%] rounded-[8px] bg-[#f0f0f1] ">
      <div className="w-[100%] h-[100%] px-[8px] flex items-center ">
        <img
          src={search}
          alt=""
          className="w-[24px] h-[24px] ml-[8px] cursor-pointer "
        />
        <input
          type="search"
          placeholder="جستجو در"
          className="text-[12px] text-[#81858b] font-[400px] bg-[#f0f0f1] w-[65px]"
        />
        <img src={digikala} alt="" className="w-[90px] h-[24px]" />
      </div>
    </div>
  );
};

export default Mobile_bottom;
