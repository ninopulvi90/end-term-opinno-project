import AttualeMissione from "./AttualeMissione";
import Followers from "./Followers";
import NameFollowers from "./NameFollowers";

export default function RightSidebar() {
  return (
    <nav className="sticky top-0 h-screen flex flex-col gap-4 w-64">
      <div className="rounded-2xl overflow-hidden p-2 bg-smp-white dark:bg-smp-light-gray flex flex-col gap-4 shadow-lg shadow-smp-shadow h-screen" 
      // bg-[url('src/assets/sfndoAz.png')] dark:bg-[url('src/assets/sfondoScuro.png')]
      >
        <AttualeMissione/>
        <h1 className="text-xl font-bold mt-3 ml-2">Followers</h1>
        <Followers
        nome={props.follower.name}
        />
      </div>
    </nav>
  );
}