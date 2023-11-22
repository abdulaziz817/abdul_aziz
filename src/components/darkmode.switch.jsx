"use client";
import { Switch } from "@headlessui/react";
import useDarkSide from "../hook/useDark";
import { useState } from "react";

function Swith() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <Switch
      checked={darkSide}
      onChange={toggleDarkMode}
      className={`${
        darkSide ? "bg-gray-200" : "bg-[#212121]"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      
      <span
        className={`${
          darkSide ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full dark:bg-[#212121] bg-white transition`}
      />
    </Switch>
  );
}

export default Swith;
