import Navlinks from "./components/Navlinks";
import Chatbox from "./components/Chatbox";
import Chatlist from "./components/Chatlist";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <div className="flex lg:flex-row flex-col items-start w-[100%]">
      <Navlinks />
      <Chatlist />
      <Chatbox />
    </div>
  );
};

export default App;
