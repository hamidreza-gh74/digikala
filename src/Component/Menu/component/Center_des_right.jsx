
import logo from "../../../../public/image/menu/logo.svg";
import search from "../../../../public/image/menu/search.svg";

const Center_des_right = () => {
  return (
    <div className="right w-[78%] h-[100%]  flex items-center">
      <a href="" className=" w-[115px] h-[30px] ml-[20px]">
        <img src={logo} alt="" />
      </a>
      <div className="w-[600px] h-[44px] px-[16px] bg-[#f0f0f1] rounded-[8px] flex relative ">
        <input
          type="search"
          placeholder="جستجو"
          className="w-[100%] h-[100%] bg-[#f0f0f1] pr-[50px] placeholder:text-[12px] placeholder:font-[400] outline-none "
        />
        <img
          src={search}
          alt=""
          className="w-[24px] h-[24px] absolute right-[30px] top-[10px]"
        />
      </div>
    </div>
  );
};

export default Center_des_right;
