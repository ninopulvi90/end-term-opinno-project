import "tailwindcss/tailwind.css";

function Profile() {
  return (
    <div className="bg-gray-100 p-2 shadow-md w-64 flex flex-col">
      <div className=" p-4">
        <img
          className="h-9 w-9 rounded-full  object-cover"
          src="src\assets\img.jpg"
          alt="img utente"
        ></img>
      </div>
      <div className="flex">
        <img
          className="h-20 w-20 rounded-full mx-auto object-cover"
          src="src\assets\img.jpg"
          alt="img utente"
        />
        <h2 className="mt-6 text-center text-xl font-semibold">Federica</h2>
      </div>
    </div>
  );
}

export default Profile;
