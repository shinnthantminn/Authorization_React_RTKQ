import { Navigate } from "react-router-dom";

const Defender = ({ check, path, children }) => {
  if (check) {
    return <Navigate to={path} />;
  } else {
    return <>{children}</>;
  }
};

export default Defender;
