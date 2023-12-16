/* eslint-disable react/prop-types */
// function Menu() {
//   return (
//     <div className="flex-col  ">
//       <div className="w-64">
//         <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
//           <h3 className="text-xl font-semibold mb-4">Le tue missioni</h3>
//           <p>Lorem </p>
//           <p>Lorem </p>
//           <p>Lorem </p>
//         </div>
//       </div>
//       <div className="w-64">
//         <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
//           <h3 className="text-xl font-semibold mb-4">
//             Partecipa a nuove missioni
//           </h3>
//           <p>Lorem </p>
//           <p>Lorem </p>
//           <p>Lorem </p>
//           <p>Lorem</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Menu;

import { useState } from "react";
// import "tailwindcss/tailwind.css";

function Menu() {
  const [activeClick, setactiveClick] = useState(0);

  const cliccaMissione = (idMissione) => {
    setactiveClick(idMissione);
  };

  // return (
  //   <div className="shadow-md flex-col dark:text-white text-smp-black">
  //     <h3 className="text-xl font-extrabold my-4 cursor-pointer">
  //       Le tue missioni
  //     </h3>
  //     <ul className="flex-col">
  //       <li
  //         className={`py-2 rounded-lg cursor-pointer flex flex-col gap-2`}
  //         onClick={() => cliccaMissione(1)}
  //       >
  //         <p className="text-sm font-semibold">Missione 1</p>
  //         <div>
  //           {activeClick === 1 && (
  //             <div>
  //               <p>
  //                 E quando arriva la notte E resto sola con me La testa parte e
  //                 va in giro In cerca dei suoi perchè Né vincitori né vinti Si
  //                 esce sconfitti a metà La vita può allontanarci L amore
  //                 continuerà
  //               </p>
  //             </div>
  //           )}
  //         </div>
  //       </li>
  //       <li
  //         className={`px-4 py-2 rounded-lg cursor-pointer ${
  //           activeClick === 2 ? "bg-blue-900" : ""
  //         }`}
  //         onClick={() => cliccaMissione(2)}
  //       >
  //         <p className="text-center text-sm font-semibold">Missione 2</p>
  //         <div>
  //           {activeClick === 2 && (
  //             <div>
  //               <p>
  //                 Spegni la luce anche se non ti va Restiamo al buio avvolti
  //                 solo dal suono della voce Al di là della follia che balla in
  //                 tutte le cose Due vite, guarda che disordine
  //               </p>
  //             </div>
  //           )}
  //         </div>
  //       </li>
  //       <li
  //         className={`px-4 py-2 rounded-lg cursor-pointer ${
  //           activeClick === 3 ? "bg-blue-900" : ""
  //         }`}
  //         onClick={() => cliccaMissione(3)}
  //       >
  //         <p className="text-center text-sm font-semibold">Missione 3</p>
  //         <div>
  //           {" "}
  //           {activeClick === 3 && (
  //             <div>
  //               <p>
  //                 Ho visto lei che bacia lui Che bacia lei, che bacia me Mon
  //                 amour, amour, ma chi baci tu? Io farò una strage stasera Ballo
  //                 tra le lampade a sfera Lei piace sia a me che a te
  //               </p>
  //             </div>
  //           )}
  //         </div>
  //       </li>
  //       <li
  //         className={`px-4 py-2 rounded-lg cursor-pointer ${
  //           activeClick === 4 ? "bg-blue-900" : ""
  //         }`}
  //         onClick={() => cliccaMissione(4)}
  //       >
  //         <p className="text-center text-sm font-semibold">Altro</p>
  //         <div>
  //           {activeClick === 4 && (
  //             <div>
  //               <p>Missione 4</p>
  //               <p>Missione 5</p>
  //               <p>Missione 6</p>
  //             </div>
  //           )}
  //         </div>
  //       </li>
  //     </ul>
  //   </div>
  // );

  return (
    <div className="shadow-md flex-col dark:text-white text-smp-black">
      <h3 className="text-xl font-extrabold my-4 cursor-pointer">
        {bundle.title}
      </h3>
      <ul className="flex-col">
        {bundle.missions.map((item) => {
          return (
            <Mission
              key={item.missionId}
              missionId={item.missionId}
              activeClick={activeClick}
              onClick={() => setactiveClick(item.missionId)}
              body={item.body}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;

function Mission({ missionId, activeClick, onClick, body, key }) {
  return (
    <li
      key={key}
      className={`py-2 rounded-lg cursor-pointer flex flex-col gap-2`}
      onClick={onClick}
    >
      <p className="text-sm font-semibold">{"Missione " + missionId}</p>
      {activeClick == missionId && <p>{body}</p>}
    </li>
  );
}

const bundle = {
  title: "sdfluh",
  missions: [
    {
      missionId: 1,
      body: `
        E quando arriva la notte E resto sola con me La testa parte e
        va in giro In cerca dei suoi perchè Né vincitori né vinti Si
        esce sconfitti a metà La vita può allontanarci L amore
        continuerà
    `,
    },
    {
      missionId: 2,
      body: `
        Spegni la luce anche se non ti va Restiamo al buio avvolti
        solo dal suono della voce Al di là della follia che balla in
        tutte le cose Due vite, guarda che disordine
    `,
    },
    {
      missionId: 3,
      body: `
        Ho visto lei che bacia lui Che bacia lei, che bacia me Mon
        amour, amour, ma chi baci tu? Io farò una strage stasera Ballo
        tra le lampade a sfera Lei piace sia a me che a te
    `,
    },
  ],
};
