import "tailwindcss/tailwind.css";
import RoundedImg from "../../components/RoundedImg"

function Profile() {
  return (
    <div className="dark:bg-smp-black bg-smp-sky p-4 shadow-lg shadow-smp-shadow w-64 flex flex-col rounded-b-2xl gap-8">
        <img
          className="h-9 w-9 object-cover"
          src="src\assets\img.jpg"
          alt="img utente"
        ></img>
      <div className="flex items-center gap-6">
        {/* <img
          className="h-20 w-20 rounded-full mx-auto object-cover"
          src="src\assets\img.jpg"
          alt="img utente"
        /> */}
        <RoundedImg size="16" alt="Profile Pic" url="https://picsum.photos/200" />
        <h2 className="text-xl font-semibold text-white">Federica Tommasone</h2>
      </div>
    </div>
  );
}

export default Profile;
