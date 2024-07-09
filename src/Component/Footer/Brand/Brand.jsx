const Brand = () => {
  let data = [
    { id: 1, adress: "../../../../public/image/footer/Brands/num1.svg" },
    { id: 2, adress: "../../../../public/image/footer/Brands/num2.svg" },
    { id: 3, adress: "../../../../public/image/footer/Brands/num3.svg" },
    { id: 4, adress: "../../../../public/image/footer/Brands/num5.svg" },
    { id: 5, adress: "../../../../public/image/footer/Brands/num6.svg" },
    { id: 6, adress: "../../../../public/image/footer/Brands/num7.svg" },
    { id: 7, adress: "../../../../public/image/footer/Brands/num8.svg" },
    { id: 8, adress: "../../../../public/image/footer/Brands/num9.svg" },
    { id: 9, adress: "../../../../public/image/footer/Brands/num10.svg" },
    { id: 10, adress: "../../../../public/image/footer/Brands/num11.svg" },
    { id: 11, adress: "../../../../public/image/footer/Brands/num12.svg" },
    { id: 12, adress: "../../../../public/image/footer/Brands/num13.svg" },
    { id: 13, adress: "../../../../public/image/footer/Brands/num14.svg" },
    { id: 14, adress: "../../../../public/image/footer/Brands/num15.svg" },
    { id: 15, adress: "../../../../public/image/footer/Brands/num16.svg" },
  ];
  return (
    <div className="hidden des:w-[100%] des:h-[160px] des:bg-[#f0f0f1] des:block">
      <div className="w-[100%] h-[80px]  mx-auto flex justify-evenly items-center border-b-[1px] border-solid border-[#e0e0e2] flex-wrap">
        {data.map((item) => {
          return (
            
              <div key={item.id} className="h-[100%] w-[12%] flex justify-center items-center ">
                <a href="#" className="des:block w-fit h-[20px]">
                  <img src={item.adress} className="w-fit  object-fit" alt="" />
                </a>
              </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default Brand;
