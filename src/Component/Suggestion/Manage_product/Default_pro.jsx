

const Default_pro = ({data}) => {
 

  return (
    <>
      {data?.map((item) => {
        return(
          <div key={item.id} className="w-[30%] flex flex-col justify-center items-center p-[5px] border border-solid border-[grey] rounded-[4px] m-[5px]">
            <div className="w-[100px] h-[70px] ">
              <img src={item.adress} alt="" className="w-[100%] h-[100%]" />
            </div>

            <div className="font-[700] text-[10px]  mt-[8px] text-[#3f4064] leading-[2.17] ">
              <h3>{item.text.substr(0, 10)}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Default_pro;
