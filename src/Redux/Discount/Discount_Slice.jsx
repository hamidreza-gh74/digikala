import { create_slice, fetch_data } from "../needs";

export const fetch_discount = fetch_data(
  "/discount/fetch",
  "http://localhost:1000/discount"
);


const Discount_Slice = create_slice(
  "discount",
  fetch_discount
);

export default Discount_Slice.reducer;
