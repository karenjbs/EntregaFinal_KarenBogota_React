import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import "./App.css";
import {NavBar} from "./components/Navbar/NavBar";
import ItemListContainer from "./components/Itemlistcontainer/ItemListContainer";
import {Item} from "./components/Item/Item";
import {ItemCount} from "./components/Itemcount/ItemCount";
import { Detail } from "./Pages/Detail";
import { Home } from "./Pages/Home";
import { Category } from "./Pages/Category";
import { CartProvider } from "./state/Cart.context";
import { ThemeProvider } from "./state/Theme.context";
import { Cart } from "./Pages/Cart";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavBar />}>
      {" "}
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<Detail />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <ThemeProvider>
        <CartProvider>
          <RouterProvider router={routes} />
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;