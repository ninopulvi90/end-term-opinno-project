import Profile from "./Profile";
import Menu from "./Menu";
import Menudue from "./Menudue";
import Footer from "../Footer";

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-4 w-64">
      <Profile />
      <div className="rounded-2xl overflow-hidden p-4 bg-[#FAFAFA] dark:bg-[#353535]">
        <Menu />
        <Menudue />
      </div>
      <Footer />
    </nav>
  );
}
