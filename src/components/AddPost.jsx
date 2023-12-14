import { useState } from "react";

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
        <div className="flex bg-slate-800 text-white border-2">
            <div className="bg-cyan-500 rounded-full h-8 w-8 m-2"></div>
            <div className="flex flex-col w-11/12">
                <div className="m-1">Nome Utente</div>
                <div>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Condividi i tuoi progressi"
                        className="bg-slate-800 border-b-2 w-11/12" />
                </div>
                <div className="flex justify-between">
                    <div className="flex justify-between">
                        <div className="flex items-center ">
                            <div className="bg-cyan-500 rounded-full h-5 w-5 mr-2"></div>

                            <label
                                htmlFor="imageInput"
                                className="cursor-pointer hover:underline">Inserisci foto</label>
                            <input
                                id="imageInput"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />

                        </div>
                        <div className="flex items-center m-2">
                            <div className="bg-cyan-500 rounded-full h-5 w-5 mr-1"></div>

                            <label
                                htmlFor="videoInput"
                                className="cursor-pointer hover:underline">Inserisci video</label>
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
                    className="bg-green-600 rounded-md p-1 text-white m-1">Condividi</button>
                </div>
            </div>
        </div>
    )
}