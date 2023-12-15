import DarkMode from "../DarkMode";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-slate-700 p-4 flex justify-between items-center w-full">
      <nav className="flex justify-center items-center gap-8">
        <NavItem to="/" img={"https://picsum.photos/200"} />
        <NavItem to="/" img={"https://picsum.photos/200"} />
        <NavItem to="/" img={"https://picsum.photos/200"} />
      </nav>
      <div className="flex justify-center items-center gap-4">
        <SearchBar placeholder="Search..." />
        <DarkMode />
      </div>
    </header>
  );
}
