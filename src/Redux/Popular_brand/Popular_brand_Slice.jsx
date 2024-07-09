import { create_slice, fetch_data } from "../needs";

export const fetch_popular_brand = fetch_data(
  "/popular_brand/fetch",
  "http://localhost:1000/popular_brand"
);


const Popular_brand_Slice = create_slice(
  "popular_brand",
  fetch_popular_brand
);

export default Popular_brand_Slice.reducer;
