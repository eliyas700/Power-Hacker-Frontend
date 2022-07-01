import { Navigate, useNavigate, useLocation } from "react-router-dom";
const RequireAuth = ({ children }) => {
  let location = useLocation();
  const token = localStorage.getItem("accessToken");
  console.log(token, "token");
  if (!token) {
    return <Navigate to="/requireToken" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
