const Pic = ({ item }) => {
  return (
    <>
      <a
        href=""
        className={`flex des:flex-row mob:flex-col mob:gap-[10px] des:gap-[2px] mob:py-[10px] des:py-[0px] des:justify-between des:w-[32%] mob:min-w-[96px] mob:max-w-[120px] mob:w-[25%] des:max-w-[273px] des:min-w-[224px] bg-[white]  pr-[20px]
            ${item.id == 3 ? "digikala_blue_last pl-[3px]" : null}
             ${item.id == 1 ? "digikala_blue_first" : null}`}
      >
        <div className="text flex des:flex-row mob:flex-col mob:gap-[10px] justify-center items-center gap-[8px] ">
          <img src={item.svg} alt="" className="w-[20px] h-[20px]" />
          <p className="text-[10px] font-[700]"> {item.text}</p>
        </div>
        <div className="image mob:w-[100%] des:w-[49%] des:min-w-[118px] des:max-w-[168px] h-[60px] mob:self-end mob:pl-[4px] des:pl-[0px] ">
          <img
            src={item.adress}
            alt=""
            className="w-[100%] h-[100%] object-fit"
          />
        </div>
      </a>
    </>
  );
};

export default Pic;
