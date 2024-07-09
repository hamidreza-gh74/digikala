import { create_slice, fetch_data } from "../needs";

export const fetch_suggestion = fetch_data(
  "/suggestion/fetch",
  "http://localhost:1000/suggestion"
);


const Suggestion_Slice = create_slice(
  "suggestion",
  fetch_suggestion
);

export default Suggestion_Slice.reducer;
