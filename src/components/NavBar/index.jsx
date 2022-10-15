import { useState } from "react";
import "./index.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-100 ">
      <div className="flex flex-row w-screen justify-between items-center p-6">
        <div className="logo">
          <h1 className="text-2xl lg:text-3xl font-black">
            <span>tr</span>
            <span className="text-red-500">.</span>
          </h1>
        </div>
        <div>
          <div
            onClick={() => {
              setOpen(!open);
            }}
          >
            Hamburger Button
          </div>
        </div>
      </div>
      {open && (
        <div className="w-screen bg-gray-100 absolute flex flex-col text-center p-8">
          <div className="text-3xl font-bold m-4">home</div>
          <div className="text-3xl font-bold m-4">projects</div>
          <div className="text-3xl font-bold m-4">about</div>
        </div>
      )}
    </div>
  );
}
