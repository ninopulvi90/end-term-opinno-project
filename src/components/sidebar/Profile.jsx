import "tailwindcss/tailwind.css";
import RoundedImg from "../../components/RoundedImg";

function Profile() {
  return (
    <div className="dark:bg-smp-light-gray bg-smp-sky p-4 shadow-lg shadow-smp-shadow w-64 flex flex-col rounded-b-2xl gap-8">
      <div className="flex justify-start items-center gap-4">
        <img
          className="h-12 w-14 object-cover"
          src="src\assets\icons8-senza-plastica-32.png"
          alt="img logo"
        ></img>
        <h1 className="text-white font-bold text-xl">Save Me Please</h1>
      </div>
      <div className="flex items-center gap-6">
        <RoundedImg
          size="16"
          alt="Profile Pic"
          url="https://picsum.photos/id/64/600"
        />
        <h2 className="text-lg font-semibold text-white">Federica Tommasone</h2>
      </div>
      <div className="flex justify-around">
        <img
          className="h-7 w-7 object-cover cursor-pointer"
          src="src\assets\icons8-impostazioni-32 (1).png"
          alt="img impostazioni"
        ></img>

        <img
          className="h-7 w-7 object-cover cursor-pointer"
          src="src\assets\icons8-chat-32 (2).png"
          alt="img chat"
        ></img>
        <img
          className="h-7 w-7 object-cover cursor-pointer"
          src="src\assets\icons8-allarme-32 (1).png"
          alt="img allarme"
        ></img>
      </div>
    </div>
  );
}

export default Profile;
