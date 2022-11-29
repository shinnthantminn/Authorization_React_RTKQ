// routing 
import { Routes, Route } from "react-router-dom";
//Page
import { Login, Register, Success } from "./Page/index.jsx";

// components
import { Nav } from "./Components/index.jsx";

// authorizations
import useAuth from "./helper/auth/useAuth.jsx";

const App = () => {
  // authorizations statements
  const { isLoading, isSuccess } = useAuth();

  return (
    <div>
      <Nav />
      <div className="container mx-auto h-[100vh]">
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path="/home" element={<Success />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
