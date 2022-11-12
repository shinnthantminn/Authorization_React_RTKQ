import { useDispatch } from "react-redux";
import { loginReducer, logoutReducer } from "../../store/slicer/authSlicer";
import { useGetMeQuery } from "../../store/service/endPoint/AuthEndPoint";
import { userModel } from "../../model/user.model";

import { useEffect } from "react";

const useAuth = () => {
  const dispatch = useDispatch();

  const response = useGetMeQuery();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!response.error) {
      if (token) {
        const user = new userModel(
          token,
          response.data?.result.username,
          response.data?.result.email
        );

        dispatch(loginReducer({ ...user }));
      }
    } else {
      localStorage.removeItem("token");
      dispatch(logoutReducer());
    }
  }, [response]);

  return { isSuccess: response.isSuccess, isLoading: response.isLoading };
};

export default useAuth;
