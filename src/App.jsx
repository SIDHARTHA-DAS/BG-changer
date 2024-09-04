import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-2xl bg-white text-white">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 bg-red-700 rounded-full"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 bg-green-700 rounded-full "
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 bg-blue-700 rounded-full"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 bg-[olive]  rounded-full"
          >
            Olive
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4  bg-orange-400 rounded-full"
          >
            Orange
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 text-black  bg-yellow-300 rounded-full"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("teal")}
            className="outline-none px-4 text-black  bg-teal-400 rounded-full"
          >
            Teal
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 text-black bg-gray-500 rounded-full"
          >
            Gray
          </button>
          <button
            onClick={() => setColor("fuchsia")}
            className="outline-none px-4 text-black  bg-fuchsia-400 rounded-full"
          >
            Fuchsia
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
