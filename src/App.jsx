import { Routes, Route } from "react-router-dom";
//Page
import { Login, Register } from "./Page/index.jsx";
import { Nav } from "./Components/index.jsx";

// authorizations
import useAuth from "./helper/auth/useAuth.jsx";

const App = () => {
  const { isLoading, isSuccess } = useAuth();

  return (
    <div>
      <Nav />
      <div className="container mx-auto h-[100vh]">
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;