import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="fixed top-0 w-full">
      <div className=" bg-gray-800 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 itemx-center justify-between">
            <div className="flex items-center">
              <div className="rounded-md bg-gray-400 px-4">
                <p className="text-yellow-700 font-mono font-extrabold text-3xl">
                  Anime Quotes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 itemx-center justify-between items-center">
            <Link to="/">
              <div className="rounded-md bg-amber-600 px-4 h-8 flex items-center">
                <div className="font-bold">Home</div>
              </div>
            </Link>
            <Link to="/add">
              <div className="rounded-md bg-gray-400 px-4 h-8 flex items-center">
                <div className="font-bold">Add New</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
