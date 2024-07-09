const Image = ({ item }) => {
  return (
    <a className="brand flex w-[142px] h-[118px] bg-[white] px-[16px] py-[4px]  ">
      <div className="w-[110px] h-[110px]">
        <img
          src={item.adress}
          alt=""
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </a>
  );
};

export default Image;
