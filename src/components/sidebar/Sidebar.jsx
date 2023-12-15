import Profile from "./Profile";
import Menu from "./Menu";
import Menudue from "./Menudue";
import Footer from "../Footer";

export default function Sidebar() {
  return (
    <nav className="">
      <Profile />
      <Menu />
      <Menudue />
      <Footer />
    </nav>
  );
}
