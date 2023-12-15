import { useState } from "react";
import "tailwindcss/tailwind.css";

function Menudue() {
  const [activeClick, setactiveClick] = useState(0);

  const cliccaMissione = (idMissione) => {
    setactiveClick(idMissione);
  };

  return (
    <div className="bg-gray-100   shadow-md w-64 flex-col">
      <h3 className="text-xl text-center border font-semibold mb-4">
        Partecipa a nuove missioni
      </h3>
      <ul className="flex-col space-x-4">
        <li
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            activeClick === 1 ? "bg-blue-900" : ""
          }`}
          onClick={() => cliccaMissione(1)}
        >
          <p className="text-center text-sm font-semibold">Missione 1</p>
          <div>
            {activeClick === 1 && (
              <div>
                <p>
                  E quando arriva la notte E resto sola con me La testa parte e
                  va in giro In cerca dei suoi perchè Né vincitori né vinti Si
                  esce sconfitti a metà La vita può allontanarci L amore
                  continuerà
                </p>
                <div className="flex space-x-20">
                  <button>Scopri di più...</button>
                </div>
              </div>
            )}
          </div>
        </li>
        <li
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            activeClick === 2 ? "bg-blue-900" : ""
          }`}
          onClick={() => cliccaMissione(2)}
        >
          <p className="text-center text-sm font-semibold">Missione 2</p>
          <div>
            {activeClick === 2 && (
              <div>
                <p>
                  E quando arriva la notte E resto sola con me La testa parte e
                  va in giro In cerca dei suoi perchè Né vincitori né vinti Si
                  esce sconfitti a metà La vita può allontanarci L amore
                  continuerà
                </p>
                <div className="flex space-x-20">
                  <button>Scopri di più...</button>
                </div>
              </div>
            )}
          </div>
        </li>
        <li
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            activeClick === 3 ? "bg-blue-900" : ""
          }`}
          onClick={() => cliccaMissione(3)}
        >
          <p className="text-center text-sm font-semibold">Missione 3</p>
          <div>
            {activeClick === 3 && (
              <div>
                <p>
                  E quando arriva la notte E resto sola con me La testa parte e
                  va in giro In cerca dei suoi perchè Né vincitori né vinti Si
                  esce sconfitti a metà La vita può allontanarci L amore
                  continuerà
                </p>
                <div className="flex space-x-20">
                  <button>Scopri di più...</button>
                </div>
              </div>
            )}
          </div>
        </li>
        <li
          className={`px-4 py-2 rounded-lg cursor-pointer ${
            activeClick === 4 ? "bg-blue-900" : ""
          }`}
          onClick={() => cliccaMissione(4)}
        >
          <p className="text-center text-sm font-semibold">Altro</p>
          <div>
            {activeClick === 4 && (
              <div>
                <p>Missione 4</p>
                <p>Missione 5</p>
                <p>Missione 6</p>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Menudue;
