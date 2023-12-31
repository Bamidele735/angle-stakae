import React from "react";
import "flowbite";
import Image from "next/image";
import Logo from "../public/media/logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Web3Button } from "@thirdweb-dev/react";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";
export default function Navbar() {
  return (
    <nav className="bg-transparent dark:bg-white  w-full z-20 top-0 left-0 border-transparent border-transparent dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="" className="flex items-center">
          <img
            src="https://yellow-instant-gazelle-449.mypinata.cloud/ipfs/QmXUBWu5412Agr4Jc2ZjJAnfj5oDdFdAyTaoUfurNUPuLM?_gl=1*1aarsgj*_ga*MTM5OTUzMjUxOS4xNjcwNzYwMTMw*_ga_5RMPXG14TE*MTY5MTg1NDY1OS4xNi4wLjE2OTE4NTQ2ODEuMzguMC4w"
            className="pt-0"
            alt="Angel Logo"
            width={30}
            height={30}
          />
          <span className="nav_logo_name pl-4 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Angel Warriors
          </span>
        </Link>
        <div className="flex md:order-2">
          <ConnectWallet className="connet usdc2" />


          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="ml-4 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-white dark:border-gray-700">
            <li>
              <a
                href="https://worrior.vercel.app/"
                className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
                aria-current="page"
                target="_blank"
                rel="noreferrer"
              >
                Home
              </a>
            </li>
            {/* <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-900 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li> */}


          </ul>
        </div>
      </div>
    </nav>
  );
}
