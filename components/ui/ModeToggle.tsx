"use client";

import * as React from "react";

import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

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

  return (
    <div className="relative block  ">
      <button
        type="button"
        onClick={() => setIsShownThemeMenu(!isShownThemeMenu)}
        id="headlessui-listbox-button-:R2lkcr6:"
        aria-haspopup="listbox"
        aria-expanded="false"
        data-headlessui-state=""
        aria-labelledby="headlessui-label-:R1lkcr6: headlessui-listbox-button-:R2lkcr6:"
        className=" absolute top-2 left-4 flex justify-center rounded-md bg-transparent  px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300"
      >
        <span className="dark:hidden">
          <IoSunnyOutline className="text-black w-5 h-5" />
        </span>
        <span className="hidden dark:inline">
          <FaRegMoon className="text-white w-5 h-5" />
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
    </div>
  );
}
