import DarkMode from "../DarkMode";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";
import foresta from "../../assets/icons8-foresta-64.png";
import mare from "../../assets/icons8-onda-dell'oceano-64(1).png";
import citta from "../../assets/icons8-centro-64.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-smp-sky text-smp-semi-black dark:bg-smp-light-gray dark:text-white p-3 flex justify-between items-center w-full rounded-br-2xl mx-10">
      <SearchBar placeholder="Search..." />

      <nav className="flex justify-between items-center gap-6 w-64">
        <NavItem to="/" img={mare} testo="Mare" />
        <NavItem to="/" img={foresta} testo="Foresta" />
        <NavItem to="/" img={citta} testo="Città" />
      </nav>
      <DarkMode />
    </header>
  );
}
