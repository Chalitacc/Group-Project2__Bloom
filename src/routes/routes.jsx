import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../App";
import Home from "../Pages/Home/Home";
import AddPlant from "../Pages/AddPlant/AddPlant";
import PageNotFound from "../Pages/PageNotFount/PageNotFound";
import PlantItem from "../components/PlantItem/PlantItem";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path=":productId" element={<Home />} />
      <Route path="/add-plant" element={<AddPlant />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
