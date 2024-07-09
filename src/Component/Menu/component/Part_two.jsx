const Part_two = ({ item }) => {
  return (
    <div className="one w-fit h-[40px] px-[10px] flex items-center hover:border-b-2 hover:border-solid hover:border-[red]">
      <a
        href=""
        className="w-fit h-[100%] text-[#62666d] text-[12px] font-[400] flex items-center"
      >
        <img
          src={item.svg}
          alt=""
          className="w-[15px] h-[15px] ml-[4px] self-center"
        />
        {item.text}{" "}
      </a>
    </div>
  );
};

export default Part_two;
