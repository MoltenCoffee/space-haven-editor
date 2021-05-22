import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SaveContext } from "../context/SaveContext";

const InternalRoute = ({ element, fallback }) => {
  const { gameData } = useContext(SaveContext);

  if (!fallback) {
    fallback = <Navigate to="/" />;
  }

  return gameData ? element : fallback;
};

export default InternalRoute;
