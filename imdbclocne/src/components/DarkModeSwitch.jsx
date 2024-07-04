"use client";

import { IoSunny } from "react-icons/io5";
import { CiCloudMoon } from "react-icons/ci";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <IoSunny className="text-2xl mr-4 hover:text-blue-600 hover:cursor-pointer font-bold" onClick={() => setTheme('light')} />
      ) : (
        <CiCloudMoon className="text-2xl mr-4 hover:text-blue-600 hover:cursor-pointer font-bold" onClick={() => setTheme('dark')} />
      )}
    </div>
  );
}
