import down from "../../../../public/image/footer/mobile/down.svg";

const Accordion = ({ item, selected, sample, setSelect }) => {
  const open = selected == sample;
  return (
    <div className="w-[100%] flex flex-col justify-between items-center py-[12px] border-b border-solid ">
      <div
        className="acc_main flex  w-[100%] justify-between items-center"
        onClick={() => {
          setSelect(
            selected == `carousel-${item.id}` ? "" : `carousel-${item.id}`
          );
        }}
        id={item.id}
      >
        <div className="text text-[12px] text-[black] font-[700]">
          {item.titr}
        </div>
        <div className="img w-[24px] h-[24px] ">
          <img
            src={down}
            alt=""
            className={`w-[100%] h-[100%] object-contain ${
              open ? "rotate-180" : null
            } `}
          />
        </div>
      </div>

      <div
        className={` ${
          open ? "flex" : "hidden"
        }  flex-wrap justify-center items-center  w-[100%] mt-[5px]`}
      >
        {item.id <= 3
          ? item.items.map((sub) => {
              return (
                <div key={sub.id} className="subitem w-[100%] mt-[10px] ">
                  <a
                    href="#"
                    className="block text-[black] text-[12px] font-[400] pr-[10px] mb-[12px]"
                  >
                    {sub.titr}
                  </a>
                </div>
              );
            })
          : item.items.map((sub) => {
              return (
                <div key={sub.id} className="w-[30%] h-[80px] border border-solid px-[8px] ">
                  <img
                    src={sub.adress}
                    alt=""
                    className="block w-[100%] h-[100%] min-w-[70px] max-w-[279px]"
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Accordion;
