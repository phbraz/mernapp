import React from "react";
import { UserFields } from "../../interfaces/UserFields";

const NavBar = ({ UserName }: UserFields) => {
  return (
    <>
      <div className="flex flex-row py-4 pl-3 pb-4 space-x-6 bg-zinc-800 shadow">
        <a href="#" className="text-white hover:opacity-40">
          Home
        </a>
        <a href="#" className="text-white hover:opacity-40">
          List of Users
        </a>
        <div className="flex flex-row justify-end space-x-3 flex-grow pr-8">
          <img
            src="https://bestprofilepictures.com/wp-content/uploads/2020/07/Awesome-Profile-Picture-For-Facebook.jpg"
            alt="Icon"
            className="rounded-full w-8 h-8"
          />
        </div>
      </div>
    </>
  );
};

export { NavBar };
