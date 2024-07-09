const Row = ({ item }) => {
  return (
    <>
      <div className={`row h-[110px] w-[250px]   flex justify-center items-center  py-[3px] `}>
        <a href="" className="w-[100%] h-[100%]  items-center flex   ">
          <div className="pic w-[86px] h-[86px] ml-[12px]  ">
            <img
              src={item.adress}
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>

          <div className="text flex justify-center items-center text-[10px] text-[#0c0c0c] leading-[2.5] font-[700] mt-[8px] w-[200px] h-[100%] text-center ">
            <p className="ml-[12px] text-[22px] text-[#19bfd3] font-[800]">
              {item.id}
            </p>
            <p className={`h-[90px] w-[140px] text-[#3f4064] text-[10px] font-[400] leading-[2.17] flex  justify-center items-center text-start ${Number(item.id%3)===0 ? null :" border-b border-solid"}`}>
              {item.text}{" "}
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Row;
