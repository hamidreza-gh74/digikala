import Right_item from "./Right_item";

const Sub_menu_right = ({ data, setshow, show }) => {
  return (
    <div className="right bg-[#f5f5f5] flex flex-col W-[20%]  h-[100%] w-fit overflow-y-scroll ">
      {data?.main_menu?.map((item) => {
        return (
          <Right_item
            key={item.id}
            setshow={setshow}
            show={show}
            sample={`right-${item.id}`}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default Sub_menu_right;
