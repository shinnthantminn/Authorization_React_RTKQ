import { useDispatch } from "react-redux";
import { loginReducer, logoutReducer } from "../../store/slicer/authSlicer";
import { useGetMeQuery } from "../../store/service/endPoint/AuthEndPoint";
import { userModel } from "../../model/user.model";

import { useEffect } from "react";

const useAuth = () => {
  const dispatch = useDispatch();

  const { data, error, isSuccess, isLoading } = useGetMeQuery();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!error) {
      if (token) {
        const user = new userModel(
          token,
          data?.result.username,
          data?.result.email
        );

        dispatch(loginReducer({ ...user }));
      }
    } else {
      localStorage.removeItem("token");
      dispatch(logoutReducer());
    }
  }, [data]);

  return { isSuccess, isLoading };
};

export default useAuth;
