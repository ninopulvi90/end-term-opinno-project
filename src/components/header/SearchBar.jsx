export default function SearchBar({ placeholder, onChange }) {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder={placeholder}
        className="text-slate-600 font-semibold bg-slate-300 border-2 border-slate-900 shadow-sm shadow-slate-900 py-2 pl-4 pr-12 rounded-full focus-visible:outline-none focus-visible:bg-slate-100"
      />
      <SearchIcon />
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#475569"
      className="w-6 h-6 absolute right-4 bottom-[10px]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}
