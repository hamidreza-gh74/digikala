
import { create_slice, fetch_data } from "../needs";

export const fetch_bestceller_goods = fetch_data(
  "/bestceller_goods/fetch",
  "http://localhost:1000/bestceller_goods"
);


const Bestceller_goods_Slice = create_slice(
  "bestceller_goods",
  fetch_bestceller_goods
);

export default Bestceller_goods_Slice.reducer;
