import { Link } from "react-router-dom";

export default function Error(){
    return (
        <div className="container flex flex-col justify-center items-center w-screen h-screen ">
            <img className='w-[800px]' src="src\assets\war-zone-landscape-with-apocalyptic-destruction_23-2150985733.jpg" alt="Non abbiamo trovato nemmeno l'immagine" />
            <h1 className='text-6xl font-extrabold mt-10'>ERRORE 404</h1>
            <h1 className='text-4xl font-extrabold mt-4'>Stacca! Stacca!</h1>
            <button className="rounded-2xl mt-10 bg-white text-black hover:bg-[#006793] hover:text-white border-solid border-2 border-black font-bold py-2 px-4"><Link to="/">Home</Link></button>
            {/* <h2 className='text-2xl mt-10'>Non sei nel posto giusto, ma almeno hai visto quanto siamo belli</h2> */}
        </div>
    )
}