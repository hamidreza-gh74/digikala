import { create_slice, fetch_data } from "../needs";

export const fetch_classify_buy = fetch_data(
  "/classify_buy/fetch",
  "http://localhost:1000/classify_buy"
);


const Classify_buy_Slice = create_slice(
  "classify_buy",
  fetch_classify_buy
);

export default Classify_buy_Slice.reducer;
