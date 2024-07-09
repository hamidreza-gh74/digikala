import sign_b from "../../../../../public/image/menu/main_menu/sign-b.svg";
import Cart_item from "./Cart_item";

const Cart = ({ elem }) => {
  return (
    <div className="cart w-fit h-[100%] flex flex-col px-[20px]">
      <div className="titr flex gap-[10px] mb-[10px] items-center hover:text-[red] cursor-pointer">
        <div className="w-[2px] h-[15px] bg-[red]  "></div>
        <p className="text-[11px] font-[700] ">{elem.titr}</p>
        <img src={sign_b} alt="" className="w-[16px] h-[16px] object-cover " />
      </div>

      <div className="items flex flex-col gap-[5px] justify-start pr-[8px]">
        {elem?.subtitr?.map((row) => {
          return <Cart_item key={row.id} row={row} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
