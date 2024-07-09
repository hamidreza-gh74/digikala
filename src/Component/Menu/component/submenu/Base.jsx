import sign from "../../../../../public/image/menu/main_menu/sign.svg";

import Cart from "./Cart";

const Base = ({ item, show, sample }) => {
  let open = show == sample;
  return (
    <div
      className={`base w-[100%] h-[100%] flex flex-col gap-[10px] ${
        open ? "flex" : "hidden"
      }`}
    >
      <div className="titr w-[100%] pr-[20px] mt-[15px] cursor-pointer">
        <div className=" flex gap-[8px]">
          <p className="text-[#008eb2] text-[15px] font-[400] ">
            {item.option && item.option.topic}
          </p>

          <img
            src={sign}
            alt=""
            className="w-[16px] h-[16px] object-cover self-center"
          />
        </div>
      </div>
      <div className="carts w-[100%] h-[100%] flex flex-wrap mt-[20px]  ">
        {item?.option?.suboption.map((elem) => {
          return <Cart key={elem.id} elem={elem} />;
        })}
      </div>
    </div>
  );
};

export default Base;
