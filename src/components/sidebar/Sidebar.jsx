import Profile from "./Profile";
import Menu from "./Menu";
import Menudue from "./Menudue";
import Footer from "../Footer"

export default function Sidebar() {
  return (
    <nav className="bg-slate-600 w-64">
      <Profile />
      <Menu />
      <Menudue />
      <Footer />
    </nav>
  );
}
