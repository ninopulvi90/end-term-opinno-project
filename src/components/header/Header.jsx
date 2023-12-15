import DarkMode from "../DarkMode";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-slate-700 p-4 flex justify-between items-center w-full">
        <SearchBar placeholder="Search..." />

      <nav className="flex justify-between items-center gap-8 w-80">
        <NavItem to="/" img={"https://picsum.photos/200"} />
        <NavItem to="/" img={"https://picsum.photos/200"} />
        <NavItem to="/" img={"https://picsum.photos/200"} />
      </nav>
        <DarkMode />
    </header>
  );
}
