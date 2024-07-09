import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./Component/Menu/Menu";
import Home from "./pages/Home/Home";
import Show from "./pages/Show/Show";
import Manage_product from "./Component/Suggestion/Manage_product/Manage_product";
import Notfound from "./pages/Notfound/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Show />} />
        <Route path="/manage-product" element={<Manage_product />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
