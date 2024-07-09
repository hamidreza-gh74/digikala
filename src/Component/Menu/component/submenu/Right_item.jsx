const Right_item = ({ show, item, setshow, sample }) => {
  let select = show == sample;
  return (
    <a
      className={`${
        select ? "bg-white" : null
      } flex gap-[10px] justify-start items-center  pl-[16px] pr-[12px] py-[16px] w-[100%]`}
      onMouseEnter={() => setshow(`right-${item.id}`)}
    >
      <img
        src={item.svg}
        alt=""
        className="w-[18px] h-[18px] object-cover self-center"
      />
      <p
        className={` text[16px] font-[400] ${
          select ? "text-[red]" : "text-[#3f4064]"
        }`}
      >
        {item.text}
      </p>
    </a>
  );
};

export default Right_item;
