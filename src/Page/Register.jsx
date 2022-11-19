import { useRegisterMutation } from "../store/service/endPoint/AuthEndPoint";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// middleware for private route
import Defender from "../helper/middleware/Defender";

const Register = () => {
  const formRef = useRef();
  const [register, response] = useRegisterMutation();

  const { isAuthorization } = useSelector((state) => state.auth);

  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: formRef.current[0].value,
      email: formRef.current[1].value,
      password: formRef.current[2].value,
    };

    register(data);

    console.log(response);
  };

  useEffect(() => {
    if (response.isSuccess) {
      nav("/");
    }
  }, [response]);

  if (response.isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <h1>I am loading...</h1>
      </div>
    );
  }

  return (
    <Defender check={isAuthorization} path={"/home"}>
      <div className=" flex justify-center items-center h-full">
        <div className={"shadow-lg w-[400px] px-5 py-5"}>
          <h1 className="text-center text-2xl ">Register</h1>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="my-4">
              <label htmlFor="email" className="block mt-4">
                Enter username
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
                type="text"
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
    </Defender>
  );
};

export default Register;
