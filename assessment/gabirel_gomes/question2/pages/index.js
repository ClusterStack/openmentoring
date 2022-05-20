import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <div
        className="w-40 h-10 p-3 bg-black flex items-center justify-center cursor-pointer"
        onClick={() => toggleDropDown()}
      >
        <button className="w-40 h-10 pt-2 bg-black text-white flex items-start font-sans">
          Menu
        </button>
        {isOpen ? (
          <ChevronDownIcon className="h-6 w-12 text-white" />
        ) : (
          <ChevronUpIcon className="h-6 w-12 text-white" />
        )}
      </div>

      {isOpen == false ? (
        <div>
          <div className="p-2 mt-[0.10rem] flex items-start bg-black w-40 h-10 text-white font-sans">
            Element 1
          </div>
          <div className="p-2 mt-[0.10rem] bg-black w-40 h-10 text-white font-sans">
            Element 2
          </div>
          <div className="p-2 mt-[0.10rem] bg-black w-40 h-10 text-white font-sans">
            Element 3
          </div>
          <div className="p-2 mt-[0.10rem] bg-black w-40 h-10 text-white font-sans">
            Element 4
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
