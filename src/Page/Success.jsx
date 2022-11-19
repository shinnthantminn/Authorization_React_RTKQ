import { useSelector } from "react-redux";
import Defender from "../helper/middleware/Defender";

const Success = () => {
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
