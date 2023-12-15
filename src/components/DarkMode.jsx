import { useEffect, useState } from "react";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark")
  );

  useEffect(() => {
    document.body.classList.toggle("dark");
    console.log(darkMode);
  }, [darkMode]);

  return (
    <div
      onClickCapture={(event) => {
        event.stopPropagation();
        event.preventDefault();
        console.log("Click!");
        setDarkMode(!darkMode);
      }}
      className="flex justify-center items-center gap-2 transition-all"
    >
      <MyIcon dark={false} />
      <SwitchButton checked={darkMode} />
      <MyIcon dark={true} />
    </div>
  );
}

function MyIcon({ dark }) {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 stroke-current dark:text-slate-500 text-slate-800"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d={
        dark
          ? "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          : "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      }
    />
  </svg>;
}

function SwitchButton({ checked }) {
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {}}
          className="sr-only peer"
        />
        <div className="w-11 h-6 dark:bg-gray-200 bg-slate-900 peer-focus:outline-none rounded-full peer dark:bg-slate-500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
      </label>
    </>
  );
}
