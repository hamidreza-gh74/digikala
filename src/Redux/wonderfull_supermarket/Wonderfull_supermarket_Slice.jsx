import { create_slice, fetch_data } from "../needs";

export const fetch_wonderfull_supermarket = fetch_data(
  "/wonderfull_supermarket/fetch",
  "http://localhost:1000/wonderfull_supermarket"
);

const Wonderfull_supermarket_Slice = create_slice(
  "wonderfull_supermarket",
  fetch_wonderfull_supermarket
);

export default Wonderfull_supermarket_Slice.reducer;
