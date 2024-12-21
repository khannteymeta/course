import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <>
    //   <nav className="border-gray-200 max-[400px]: max-[320px]:">
    //     <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
    //       <a className="flex items-center space-x-3 rtl:space-x-reverse">
    //         <img
    //           src="\src\assets\logo\Star.png"
    //           className="h-8 dark:img-white"
    //           alt=""
    //         />

    //         <span className="self-center text-2xl font-semibold  whitespace-nowrap  dark:text-white">
    //           {/* logo */}
    //         </span>
    //       </a>

    //       <div className="gap-4  flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    //         <button
    //           type="button"
    //           className=" font-medium rounded-lg text-2xl px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
    //         ></button>

    //         {/* <button
    //           type="button"
    //           className=" font-medium rounded-lg text-2xl px-2 py-2 text-en dark:bg-blue-600 dark:hover:bg-blue-700 max-[400px]: "
    //         >
    //           <svg
    //             className=" w-5 h-5"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 17 14"
    //           >
    //             <path
    //               stroke="currentColor"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M1 1h15M1 7h15M1 13h15"
    //             />
    //           </svg>
    //         </button> */}

    //         <button
    //           data-collapse-toggle="navbar-cta"
    //           type="button"
    //           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //           aria-controls="navbar-cta"
    //           aria-expanded="false"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //         </button>
    //       </div>
    //       <div
    //         className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
    //         id="navbar-cta"
    //       >
    //         <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //           <li>
    //             <Link
    //               to="/home"
    //               className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/experience"
    //               className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Experiences
    //             </Link>
    //           </li>

    //           <li>
    //             <Link
    //               to="/project"
    //               className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               Projects
    //             </Link>
    //           </li>

    //           <li>
    //             <Link
    //               to="/about"
    //               className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    //             >
    //               About me
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </>

    <nav className="border-gray-200 bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/src/assets/logo/Star.png"
            className="h-8 dark:img-white"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {/* Logo */}
          </span>
        </Link>

        {/* Toggle Button for Small Screens */}
        <div className="flex md:order-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/home"
                onClick={() => setIsOpen(!isOpen)}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                onClick={() => setIsOpen(!isOpen)}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                onClick={() => setIsOpen(!isOpen)}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(!isOpen)}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
