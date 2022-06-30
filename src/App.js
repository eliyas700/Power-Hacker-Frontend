import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Login />
    </div>
  );
}

export default App;
