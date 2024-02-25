import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav className="flex items-center justify-between w-full p-4 md:p-6">
      <h1 className="text-lg font-bold text-gray-200 md:text-xl lg:text-2xl xl:text-3xl">
        Vibe<span className="text-blue-400">Vault</span>
      </h1>
      <button
        onClick={() => setLibraryStatus(!libraryStatus)}
        className="text-gray-300 transition duration-300 ease-in-out hover:text-white focus:outline-none focus:ring focus:border-blue-300"
      >
        <FontAwesomeIcon
          icon={faMusic}
          className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
        />
      </button>
    </nav>
  );
};

export default Nav;
