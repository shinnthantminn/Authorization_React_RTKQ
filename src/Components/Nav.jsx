import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { logoutReducer } from "../store/slicer/authSlicer";

const Nav = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutReducer());
  };

  return (
    <div
      className={
        "flex bg-white z-[1000] w-full absolute justify-between items-center py-3 px-10 shadow"
      }
    >
      <h1 className={"text-2xl "}>DevOps</h1>

      {auth.isAuthorization ? (
        <ul className={"flex space-x-5"}>
          <li>
            <p>{auth.user.username}</p>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      ) : (
        <ul className={"flex space-x-5"}>
          <li>
            <Link to={"/"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
