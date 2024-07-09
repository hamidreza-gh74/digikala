import { fetch_data,create_slice } from "../needs";

export const fetch_digikala = fetch_data(
    "/digikala/fetch",
    "http://localhost:1000/digikala"
  );
  
  
  const Digikala_Slice = create_slice(
    "digikala",
    fetch_digikala
  );
  
  export default Digikala_Slice.reducer;
  