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
import { QueryClientProvider, QueryClient } from "react-query";
import { Suspense } from "react";
import RequireAuth from "./Components/Authentication/RequireAuth";
import RequiredToken from "./Components/Authentication/RequiredToken";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const client = new QueryClient(
    //For React Suspense

    {
      defaultOptions: { queries: { suspense: true } },
    }
  );
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/requireToken" element={<RequiredToken />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <QueryClientProvider client={client}>
                <Suspense fallback={<h1>Loading ...</h1>}>
                  <Dashboard />
                </Suspense>
              </QueryClientProvider>
            </RequireAuth>
          }
        ></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <Login />
      <ToastContainer />
    </div>
  );
}

export default App;
