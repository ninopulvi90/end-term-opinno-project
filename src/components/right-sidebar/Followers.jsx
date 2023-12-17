import RoundedImg from "../RoundedImg";
import NameFollowers from "./NameFollowers";

export default function Followers(nome){

    return(
        <div className="flex flex-row rounded-2xl overflow-hidden px-4 py-2 bg-smp-white dark:bg-smp-light-gray gap-4 shadow-lg shadow-smp-shadow">

        <RoundedImg
            size={12}
            url=""
            alt="Followers"
        />
            <div className="flex flex-row">
                <div className="ml-2">
                    <h2 className="text-base font-semibold h-12 w-12 leading-[48px] ml-6">{nome}</h2>
                </div>
            </div>
        </div>
    )
}