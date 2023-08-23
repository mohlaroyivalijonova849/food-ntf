import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import MenuLayout from "./layout/MenuLayout";
import ProductDetail from "./products/ProductDetail";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        /*FROM*/
        <Route path="menu" element={<MenuLayout />}>
          <Route path=":id" element={<ProductDetail />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
