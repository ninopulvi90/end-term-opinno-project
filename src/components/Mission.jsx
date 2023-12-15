

export default function Mission() {

    return (
        <div className="relative rounded overflow-hidden  ">
            <img src={'https://picsum.photos/id/16/1370/300'} className="w-full h-full rounded" />
            <div className="absolute top-0 left-0 w-full text-center p-4 text-white font-bold transform -skew-y-6">
                Missione in partenza!
            </div>
            <div className="absolute top-0 right-0 p-4">
                {/* <XIcon /> */}
            </div>
            <div className="absolute bottom-0 right-0 p-4">
                <button className="bg-blue-500 text-white rounded-md px-4 py-2">Scopri di più</button>
            </div>
        </div>
    )
}