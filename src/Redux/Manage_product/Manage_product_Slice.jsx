



import { create_slice, fetch_data } from "../needs";

export const fetch_manage_product = fetch_data(
  "/manage_product/fetch",
  "http://localhost:1000/manage_product"
);


const Manage_product_Slice = create_slice(
  "manage_product",
  fetch_manage_product
);

export default Manage_product_Slice.reducer;