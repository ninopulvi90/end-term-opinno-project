import { useState } from "react";
import CameraIcon from "../assets/CameraIcon";
import PlayerIcon from "../assets/PlayerIcon";

export default function AddPost() {
    const [inputText, setInputText] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleShareClick = () => {
        console.log('File:', file);
        setInputText('');
    };

    return (
        <div className="flex bg-white dark:bg-[#353535] dark:text-[#FFFFFF] rounded-2xl p-4">
            <div className="bg-cyan-500 rounded-full h-8 w-8 m-2"></div>
            <div className="flex flex-col w-11/12">
                <div className="my-2">Nome Utente</div>
                <div>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Condividi i tuoi progressi"
                        className="bg-white dark:bg-[#353535] border-b-2 w-11/12 palceholder-[#A4A4A4] text-[#404040] dark:text-[#FFFFFF]" />
                </div>
                <div className="flex justify-between mt-2">
                    <div className="flex justify-between">
                        <div className="flex items-center mt-2">

                            {/* <div className="bg-cyan-500 rounded-full h-5 w-5 mr-2"></div> */}
                            {CameraIcon}

                            <label
                                htmlFor="imageInput"
                                className="cursor-pointer hover:underline dark:text-[#FFFFFF]">Inserisci foto</label>
                            <input
                                id="imageInput"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />

                        </div>
                        <div className="flex items-center mt-2 ml-2">
                            {/* <div className="bg-cyan-500 rounded-full h-5 w-5 mx-2"></div> */}
                            {PlayerIcon}

                            <label
                                htmlFor="videoInput"
                                className="cursor-pointer hover:underline dark:text-[#FFFFFF]">Inserisci video</label>
                            <input
                                id="videoInput"
                                type="file"
                                accept="video/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />

                        </div>
                    </div>
                    <button
                        onClick={handleShareClick}
                        className="bg-[#006793] dark:bg-[#008ECB] rounded-md p-2 text-[#FFFFFF] mt-2">Condividi</button>
                </div>
            </div>
        </div>
    )
}