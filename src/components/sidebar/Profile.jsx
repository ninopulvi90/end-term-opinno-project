import "tailwindcss/tailwind.css";

function Profile() {
  return (
    <div className="bg-gray-100 p-8  shadow-md w-64 flex">
      <img
        className="h-24 w-24 rounded-full mx-auto object-cover"
        src="src\assets\img.jpg"
        alt="img utente"
      />
      <h2 className="mt-8 text-center text-xl font-semibold">Federica</h2>
    </div>
  );
}

export default Profile;
