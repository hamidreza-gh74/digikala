import Base from "./Base";

const Sub_menu_left = ({ data ,show}) => {
  return (
    <div className="left w-[80%] h-[100%] overflow-y-scroll flex flex-wrap">
      {data?.main_menu?.map((item) => {
        return (
            <Base key={item.id} sample={`right-${item.id}`} item={item} show={show}/>
        
        );
      })}
    </div>
  );
};

export default Sub_menu_left;
