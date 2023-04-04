import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AddRestaurant from "./pages/AddRestaurant";
import DetailRestaurant from "./pages/DetailRestaurant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddRestaurant />,
  },
  {
    path: "/update",
    element: <DetailRestaurant />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
