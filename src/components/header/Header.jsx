import NavItem from "./NavItem"
import SearchBar from "./SearchBar"

export default function Header() {

    return <header className="bg-slate-700 p-4 flex justify-between items-center">
        <nav className="flex justify-center items-center gap-4">
            <NavItem to="/" img={"https://picsum.photos/200"} />
            <NavItem to="/" img={"https://picsum.photos/200"} />
            <NavItem to="/" img={"https://picsum.photos/200"} />
        </nav>
        <SearchBar placeholder="Search..." />
    </header>
}