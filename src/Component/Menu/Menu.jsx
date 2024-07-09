import Center from "./Center";
import Top from "./Top";
import Bottom from "./Bottom";
import Mobile from "./Mobile";

const Menu = () => {
  return (
   <>
    <div className="flex flex-col w-[100%] h-[auto] bg-[white] z-[1000] fixed top-0 left-[50%] translate-x-[-50%] max-w-[1700px]">
      <Top />
      <Center/>
      <Bottom/>
    </div>

    <Mobile/>
   
   
   
   </>
  );
};

export default Menu;
