import { useEffect, useRef } from "react";
import { useLoginMutation } from "../store/service/endPoint/AuthEndPoint";
import { useDispatch } from "react-redux";
import { loginReducer } from "../store/slicer/authSlicer";

import { userModel } from "../model/user.model";

const Login = () => {
  const formRef = useRef();
  const [login, response] = useLoginMutation();

  const dispatch = useDispatch();

  console.log(response);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: formRef.current[0].value,
      password: formRef.current[1].value,
    };

    login(data);
  };

  useEffect(() => {
    if (response.data) {
      const data = new userModel(
        response.data.result.token,
        response.data.result.username,
        response.data.result.email
      );
      dispatch(loginReducer({ ...data }));
    }
  }, [handleSubmit]);

  if (response.isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <h1>I am loading...</h1>
      </div>
    );
  }

  return (
    <div className=" flex justify-center items-center h-full">
      <div className={"shadow-lg w-[400px] px-5 py-5"}>
        <h1 className="text-center text-2xl ">Login</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="email" className="block mt-4">
              Email address
            </label>
            <input
              type="text"
              autoComplete={"off"}
              className="form-input"
              name="email"
              id="email"
            />
          </div>

          <div className="my-4">
            <label htmlFor="password" className="block">
              Enter your password
            </label>
            <input
              type="password"
              className={"form-input"}
              name="password"
              id="password"
              autoComplete={"off"}
            />
          </div>

          <div className="mt-5">
            <button className={"w-full py-2 bg-blue-500 text-white rounded"}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
