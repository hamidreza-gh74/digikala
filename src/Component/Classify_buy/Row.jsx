const Row = ({ item }) => {
  return (
    <>
      <div className="row h-[160px] w-[132px] px-[16px] flex justify-center items-center">
        <a href="" className="w-[100%] h-[134px]  items-center   ">
          <div className="pic w-[100px] h-[100px] rounded-[50%] overflow-hidden">
            <img
              src={item.adress}
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="text flex justify-center items-center text-[10px] text-[#0c0c0c] leading-[2.5] font-[700] mt-[8px] w-[100%] text-center ">
            <p>{item.text} </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Row;
