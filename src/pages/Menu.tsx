import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function Menu() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="text-blue-500 hover:text-blue-400"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          Go to {isLogin ? "signup" : "login"}
        </button>
      </div>

      {isLogin ? <Login /> : <Signup />}
    </>
  );
}

export default Menu;
