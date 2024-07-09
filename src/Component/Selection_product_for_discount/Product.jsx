import toman from "../../../public/image/suggestion/toman.svg";

const Product = ({ item }) => {
  return (
    <div className="product w-[15%] min-w-[176px] max-w-[201px] h-[auto] px-[8px] py-[12px] bg-[white] ml-[8px] rounded-[8px]">
      <a href="" className="flex flex-col items-center w-[100%] h-[100%] ">

        <div className="w-[150px] h-[150px] ">
          <img src={item.adress} alt="" className="w-[100%] h-[100%] object-contain " />
        </div>

        

        <div className="flex justify-center gap-[30px] w-[100%] mt-[15px]">
          <div className="w-[34px] h-[20px] px-[4px] bg-[red] rounded-[16px] font-[700] text-[10px] text-[white] leading-[20px] text-center self-start ">
            {item.discount}
          </div>
          <div className="flex gap-[5px] mb-[10px]">
            <span className="text-[15px] font-[700]">{item.price}</span>
            <img src={toman} alt="" className="w-[16px] h-[16px]" />
          </div>
        </div>

        <div className="flex  pl-[20px] text-[15px] text-[#c0c2c5] font-[700] mb-[20px]  ">
          {item.price}
        </div>
      </a>
    </div>
  );
};

export default Product;
