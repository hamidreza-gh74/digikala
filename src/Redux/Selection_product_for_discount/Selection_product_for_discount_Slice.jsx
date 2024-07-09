


import { create_slice, fetch_data } from "../needs";

export const fetch_selection_product_for_discount = fetch_data(
  "/selection_product_for_discount/fetch",
  "http://localhost:1000/selection_product_for_discount"
);


const Selection_product_for_discount_Slice = create_slice(
  "selection_product_for_discount",
  fetch_selection_product_for_discount
);

export default Selection_product_for_discount_Slice.reducer;