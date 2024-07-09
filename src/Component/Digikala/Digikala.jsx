import Sub from "./Sub";

import { fetch_digikala } from "../../Redux/Digikala/Digikala_Slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Digikala = () => {
  const { data, loading, error } = useSelector((state) => state.digikala);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_digikala());
  }, []);

  return (
    <div className="w-[100%] h-[auto] px-[8px] flex gap-[30px] flex-wrap justify-center items-center mt-[20px]">
      {data?.map((elem) => {
        return (
          <Sub
            className=""
            adress={elem.adress}
            text={elem.text}
            key={elem.id}
          />
        );
      })}
    </div>
  );
};

export default Digikala;
