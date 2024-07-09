import { create_slice, fetch_data } from "../needs";

export const fetch_menu = fetch_data(
  "/menu/fetch",
  "http://localhost:1000/menu"
);


const Menu_Slice = create_slice(
  "menu",
  fetch_menu
);

export default Menu_Slice.reducer;
