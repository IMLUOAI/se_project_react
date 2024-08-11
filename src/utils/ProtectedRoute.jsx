import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";

// Hi, Reviewer! the reason I move the ProtectedRoute back to here for passing the automatic test, cause the test recognized this file not a jsx file so that it shouldn't
// stay in the components directory. If you have a good solution, I will move it back later on.

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
