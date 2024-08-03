import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";

const ProtectedRoute = ({ children, anonymous = false }) => {
  const location = useLocation();
  const from = location.state?.from || "/profile";
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(CurrentUserContext);

  useEffect(() => {
    if (anonymous && isLoggedIn) {
      navigate(from);
    }

    if (!anonymous && !isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, anonymous, from, navigate]);
  return children;
};

export default ProtectedRoute;
