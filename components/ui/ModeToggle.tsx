"use client";

import * as React from "react";
// import { Moon, Sun } from "lucide-react";
import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isShownThemeMenu, setIsShownThemeMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  console.log("theme", theme);
  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline" size="icon">
    //       <IoSunnyOutline className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <FaRegMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <div className="relative block  ">
      {/* <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {theme === "dark" ? (
            <FaRegMoon className="text-white" />
          ) : (
            <IoSunnyOutline className="text-black" />
          )}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1 text-black " role="none">
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-0"
            onClick={() => setTheme("light")}
          >
            Light
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-1"
            onClick={() => setTheme("dark")}
          >
            Dark
          </a>
        </div>
      </div> */}
      <button
        type="button"
        onClick={() => setIsShownThemeMenu(!isShownThemeMenu)}
        id="headlessui-listbox-button-:R2lkcr6:"
        aria-haspopup="listbox"
        aria-expanded="false"
        data-headlessui-state=""
        aria-labelledby="headlessui-label-:R1lkcr6: headlessui-listbox-button-:R2lkcr6:"
        // w-[130px]
        className=" absolute top-2 left-4 flex justify-center rounded-md bg-transparent  px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300"
      >
        <span className="dark:hidden">
          <IoSunnyOutline className="text-black w-5 h-5" />
          {/* <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-6 h-6"
          >
            <path
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              className="fill-sky-400/20 stroke-sky-500"
            ></path>
            <path
              d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
              className="stroke-sky-500"
            ></path>
          </svg> */}
        </span>
        <span className="hidden dark:inline">
          <FaRegMoon className="text-white w-5 h-5" />
          {/* <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
              className="fill-sky-400/20"
            ></path>
            <path
              d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
              className="fill-sky-500"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
              className="fill-sky-500"
            ></path>
          </svg> */}
        </span>
      </button>
      {isShownThemeMenu && (
        <div
          className="absolute z-50 left-4 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-16"
          id="headlessui-listbox-options-:R3lkcr6:"
          aria-labelledby="headlessui-listbox-button-:R2lkcr6:"
          aria-orientation="vertical"
          role="listbox"
          // tabindex="0"
          data-headlessui-state="open"
          data-open=""
          // style="--button-width: 23.993391036987305px;"
          aria-activedescendant="headlessui-listbox-option-:r7:"
        >
          <div
            className="py-1 px-3 flex items-center cursor-pointer text-sky-500 dark:text-white hover:bg-slate-600/30"
            id="headlessui-listbox-option-:r6:"
            role="option"
            // tabindex="-1"
            aria-selected="true"
            data-headlessui-state="selected"
            data-selected=""
            onClick={() => {
              setTheme("light");
              setIsShownThemeMenu(false);
            }}
          >
            <IoSunnyOutline className=" w-5 h-5 mr-4" />
            Light
          </div>
          <div
            className="py-1 px-3 flex items-center cursor-pointer text-black-100 dark:text-sky-500   hover:bg-slate-600/30"
            id="headlessui-listbox-option-:r7:"
            role="option"
            // tabIndex="-1"
            aria-selected="false"
            data-headlessui-state="active focus"
            data-active=""
            data-focus=""
            onClick={() => {
              setTheme("dark");
              setIsShownThemeMenu(false);
            }}
          >
            <FaRegMoon className=" w-5 h-5 mr-4" />
            Dark
          </div>
        </div>
      )}
      {/* <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent  px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300"
      >
        <option value="dark">
          <FaRegMoon /> Dark
        </option>
        <option value="light">
          <IoSunnyOutline className="text-black" />
          Light
        </option>
      </select> */}
    </div>
    //  {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
    // <select value={theme} onChange={(e) => setTheme(e.target.value)}>
    //     <option value="dark">Dark</option>
    //     <option value="light">Light</option>
    //   </select>
  );
}
