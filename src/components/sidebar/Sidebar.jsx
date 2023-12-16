import Profile from "./Profile";
import Menu from "./Menu";
import Menudue from "./Menudue";
import Footer from "../Footer";

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-4 w-64">
      <Profile />
      <div className="rounded-2xl overflow-hidden p-4 bg-smp-white dark:bg-smp-light-gray flex flex-col gap-4 shadow-lg shadow-smp-shadow">
        <Menu title="Le tue missioni" missions={bundle.missions.slice(0, 3)}/>
        <div className="h-0.5 bg-smp-gray w-full" />
        <Menu title="Partecipa a nuove missioni" missions={bundle.missions.slice(3)} />
        {/* <Menudue /> */}
      </div>
      <Footer />
    </nav>
  );
}

const bundle = {
  title: "Mission List",
  missions: [
    {
      missionId: 1,
      body: "Mission 1: Quando sorridi, il mondo si illumina, come stelle in una notte serena",
    },
    {
      missionId: 2,
      body: "Mission 2: In questo mondo incerto, cerchiamo l'essenza, tra le note di una canzone d'amore",
    },
    {
      missionId: 3,
      body: "Mission 3: Sotto il cielo stellato, balliamo la vita, al ritmo di una melodia eterna",
    },
    {
      missionId: 4,
      body: "Mission 4: Navigare nei sogni, come una nave senza timone, tra le onde della felicità",
    },
    {
      missionId: 5,
      body: "Mission 5: Oltre l'orizzonte, dove il sole bacia il mare, scopriamo il segreto dell'eternità",
    },
    {
      missionId: 6,
      body: "Mission 6: Attraverso le strade della vita, cantiamo la libertà, come uccelli nel cielo azzurro",
    },
    {
      missionId: 7,
      body: "Mission 7: Sogniamo ad occhi aperti, tra le luci della città, danziamo al ritmo della nostra verità",
    },
    {
      missionId: 8,
      body: "Mission 8: Nell'abbraccio del tramonto, troviamo la quiete, tra le nuvole d'oro del crepuscolo",
    },
    {
      missionId: 9,
      body: "Mission 9: Amiamo senza confini, come il mare infinito, che accoglie ogni goccia di speranza",
    },
    {
      missionId: 10,
      body: "Mission 10: Nel caleidoscopio della vita, scopriamo colori nuovi, tra le sfumature dell'anima",
    },
    {
      missionId: 11,
      body: "Mission 11: Ogni passo è una melodia, che scriviamo sulla partitura del nostro destino",
    },
    {
      missionId: 12,
      body: "Mission 12: Con coraggio e determinazione, affrontiamo l'ignoto, come eroi di una storia senza fine",
    },
  ],
};
