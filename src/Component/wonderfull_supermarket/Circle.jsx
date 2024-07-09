const Circle = ({ item }) => {
  return (
    <div
      className={` ${
        item.id >= 4 ? `circle_${item.id}` : "flex"
      }  des:w-[70px] des:h-[70px] mob:w-[60px] mob:h-[60px] p-[8px] rounded-[50%] bg-[white]  relative`}
    >
      <div className="w-[100%] h-[100%] rounded-[50%] overflow-hidden">
        <img
          src={item.adress}
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
      </div>

      <span className=" bg-[red] des:w-[34px] des:h-[20px] mob:w-[25px] mob:h-[20px] rounded-[16px] text-[white] text-[12px] font-[400] absolute bottom-0 right-[-2px] flex justify-center items-center">
        {item.discount}
      </span>
    </div>
  );
};

export default Circle;
