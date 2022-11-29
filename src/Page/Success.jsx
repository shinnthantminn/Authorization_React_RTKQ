// router
import { useSelector } from "react-redux";

//middleware for auth
import Defender from "../helper/middleware/Defender";

const Success = () => {
  // redux for auth
  const { isAuthorization } = useSelector((state) => state.auth);

  return (
    <Defender check={!isAuthorization} path="/">
      <div className=" h-[100vh] flex justify-center items-center">
        <p>Success</p>
      </div>
    </Defender>
  );
};

export default Success;
