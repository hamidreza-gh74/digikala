const Menu_mob_four = ({ item }) => {
  return (
    <a className="part flex justify-center items-center flex-col gap-[4px] w-[25%] h-[100%] py-[4px]">
      <img src={item.svg} alt="" className="w-[24px] h-[24px] " />
      <div
        className={`text-[9px] ${
          item.id == 1 ? "font-[700] text-[black]" : "font-[400] text-[#81858b]"
        } `}
      >
        {item.text}
      </div>
    </a>
  );
};

export default Menu_mob_four;

//
