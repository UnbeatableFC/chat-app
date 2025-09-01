import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const Register = ({ isLoggedIn, setIsLoggedIn }) => {
  const [userData, setUserData] = useState({
    fullName: "",
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
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      const user = userCredentials.user;

      const userDocRef = doc(db, "user", user.uid);

      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        username: user.email.split("@")[0],
        fullName: userData.fullName,
        image: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center h-[100vh] background-image">
      <div className="bg-white shadow-lg p-5 rounded-xl h-[27rem] w-[20rem] flex flex-col justify-center items-center">
        <div className="mb-10">
          <h1 className="text-center text-[28px] font-bold">
            Sign Up
          </h1>
          <p className="text-center text-sm text-gray-400">
            Create an account to continue
          </p>
        </div>
        <div className="w-full">
          <input
            className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3 font-medium outline-none placeholder:text-[#00493958]"
            placeholder="Full name"
            name="fullName"
            type="text"
            onChange={handleChangeUserData}
          />
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
            Register
            <FaUserPlus />
          </button>
        </div>
        <div className="mt-5 text-center text-gray-400 text-sm">
          <p>
            Already have an account?{" "}
            <span>
              <button className="cursor-pointer text-green-700/80" onClick={() => setIsLoggedIn(!isLoggedIn)}>
                Sign In
              </button>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
