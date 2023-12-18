import Profile from "./Profile";
import Menu from "./Menu";
import Footer from "../Footer";

export default function Sidebar() {
  return (
    <nav className="sticky top-0 h-screen flex flex-col gap-4 w-64">
      <Profile />
      <div className="rounded-2xl overflow-hidden p-4 bg-smp-white dark:bg-smp-light-gray flex flex-col gap-4 shadow-lg shadow-smp-shadow">
        <Menu
          title="Le tue missioni"
          missions={bundle.listabasemissione.slice(0, 2)}
        />
        <div className="h-0.5 bg-smp-gray w-full" />
        <div className="overflow-hidden scrolling-touch overflow-y-auto flex flex-1">
          <Menu
            title="Partecipa a nuove missioni"
            missions={bundle.listabasemissione}
          />
        </div>
      </div>
      <Footer />
    </nav>
  );
}

const bundle = {
  listabasemissione: [
    {
      missionId: 1,
    },
    {
      missionId: 2,
    },
    {
      missionId: 3,
    },
    {
      missionId: 4,
    },
    {
      missionId: 5,
    },
    {
      missionId: 6,
    },
  ],
};
