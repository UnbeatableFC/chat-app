import Navlinks from "./components/Navlinks";
import Chatbox from "./components/Chatbox";
import Chatlist from "./components/Chatlist";
import Login from "./components/Login";
import Register from "./components/Register";
import { auth } from "./firebase/firebaseConfig";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      {user ? (
        <div className="flex lg:flex-row flex-col items-start w-[100%]">
          <Navlinks />
          <Chatlist />
          <Chatbox />
        </div>
      ) : (
        <div>
          {isLoggedIn ? (
            <Login
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          ) : (
            <Register
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
