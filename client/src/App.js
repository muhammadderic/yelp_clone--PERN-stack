import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import AddRestaurant from "./pages/AddRestaurant";
import DetailRestaurant from "./pages/DetailRestaurant";
import Layout from "./components/Layout";
import UpdateRestaurant from "./pages/UpdateRestaurant";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddRestaurant />} />
          <Route path="/:id/update" element={<UpdateRestaurant />} />
          <Route path="/:id/detail" element={<DetailRestaurant />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;