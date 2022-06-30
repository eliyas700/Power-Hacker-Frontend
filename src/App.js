import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddNewBillModal from "./Components/Dashboard/AddNewBillModal";
import EditBillModal from "./Components/Dashboard/EditBillModal";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Footer></Footer>
      <Login />
      <AddNewBillModal />
      <EditBillModal />
      <ToastContainer />
    </div>
  );
}

export default App;
