import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddNewBillModal from "./Components/Dashboard/AddNewBillModal";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Login />
      <AddNewBillModal />
    </div>
  );
}

export default App;
