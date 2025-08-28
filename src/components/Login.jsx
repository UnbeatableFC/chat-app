import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChangeUserData = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAuth = async () => {
    try {
      alert("Login Successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center h-[100vh] background-image">
      <div className="bg-white shadow-lg p-5 rounded-xl h-[27rem] w-[20rem] flex flex-col justify-center items-center">
        <div className="mb-10">
          <h1 className="text-center text-[28px] font-bold">
            Sign In
          </h1>
          <p className="text-center text-sm text-gray-400">
            Welcome Back! Log in to continue
          </p>
        </div>
        <div className="w-full">
          <input
            className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3 font-medium outline-none placeholder:text-[#00493958]"
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleChangeUserData}
          />
          <input
            className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3 font-medium outline-none placeholder:text-[#00493958]"
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChangeUserData}
          />
        </div>
        <div className="w-full">
          <button
            className="bg-[#01aa85] text-white font-bold w-full p-2 rounded-md flex items-center justify-center gap-2"
            onClick={handleAuth}
          >
            Log In
            <FaSignInAlt />
          </button>
        </div>
        <div className="mt-5 text-center text-gray-400 text-sm">
          <p>
            Don't have an account yet?{" "}
            <span>
              <button>Sign Up</button>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
