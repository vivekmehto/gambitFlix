
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function PublicRoute({ children }) {
  const user = useSelector((state) => state.user);

  if (user) return <Navigate to="/browse" replace />;

  return children;
}
