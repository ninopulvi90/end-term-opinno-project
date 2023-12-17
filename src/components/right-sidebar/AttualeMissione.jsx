import RoundedImg from "../RoundedImg"

export default function AttualeMissione(){
    return(
        <div className="flex flex-row rounded-2xl overflow-hidden px-4 py-2 bg-smp-white dark:bg-smp-light-gray gap-4 shadow-lg shadow-smp-shadow">
            <RoundedImg
                size={12}
                url="src\assets\icons8-premio-64.png"
                alt="Medaglia"
                />
            <div className="flex flex-row">
                <div className="ml-2">
                    <h2 className="text-lg font-semibold dark:text-white">Missione attuale</h2>
                    <h2 className="dark:text-white">CityLife</h2>
                </div>
            </div>
        </div>
    )
}