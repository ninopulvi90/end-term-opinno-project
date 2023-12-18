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
            <div
                style={{ width: `${40}px`, height: `${40}px`, aspectRatio: "1" }}
                className={"rounded-full overflow-hidden shadow-sm shadow-slate-900/50 bg-smp-white dark:bg-smp-black m-2"} >
                <img src={'https://picsum.photos/id/64/100/105'} alt={'profile image'} className="object-cover w-full object-center" />
            </div>
            <div className="flex flex-col w-11/12">
                <div className="my-2">Federica Tommasone</div>
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