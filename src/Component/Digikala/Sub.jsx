const Sub = ({text ,adress}) => {
  return (
    <>
      <a href="" className="flex flex-col  w-[140px] h-[auto] justify-center items-center bg-[white] self-start">
        <div className="w-[52px] h-[52px]">
          <img src={adress} alt="" className="w-[52px] h-[52px]" />
        </div>
        <div className="mt-[10px] w-fit h-[auto] px-[16px] text-[#3f4064] font-[700] text-[11px] leading-[23px] max-w-[140px] flex justify-center items-center text-center">
            {text}

        </div>
      </a>
    </>
  );
};

export default Sub;
