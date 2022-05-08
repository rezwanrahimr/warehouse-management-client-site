import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Error from "./components/Error/Error";
import Blogs from "./components/Blogs/Blogs";
import ProtractedRoute from "./components/ProtractedRoute/ProtractedRoute";
import Inventory from "./components/Inventory/Inventory";
import ManageInventori from "./components/ManageInventori/ManageInventori";
import AddItem from "./components/AddItem/AddItem";
import { ToastContainer } from "react-bootstrap";
import ManageInventoriItems from "./components/ManageInventoriItems/ManageInventoriItems";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/inventory"
          element={
            <ProtractedRoute>
              <Inventory></Inventory>
            </ProtractedRoute>
          }
        ></Route>
        <Route
          path="/manageInventory"
          element={<ManageInventori></ManageInventori>}
        ></Route>
        <Route
          path="/addItem"
          element={
            <ProtractedRoute>
              <AddItem />
            </ProtractedRoute>
          }
        ></Route>
        <Route path="/manageInventoriItems" element={<ManageInventoriItems></ManageInventoriItems>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
