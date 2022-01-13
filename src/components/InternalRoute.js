import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SaveContext } from "../context/SaveContext";

const InternalRoute = ({ fallback }) => {
  const { gameData } = useContext(SaveContext);

  return gameData.ships ? <Outlet /> : fallback || <Navigate to="/" />;
};

export default InternalRoute;
