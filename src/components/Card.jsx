const Card = ({
    title,
    desc,
    img,
    price,
    key
}) => {
    return (
        <>
            <div key={key} className="flex flex-col md:flex-row w-full lg:w-1/2 md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 border border-white bg-white">
                <div className="w-full md:w-1/2 lg:w-1/4 bg-white">
                    <img src={img} alt="tailwind logo" className="rounded-xl object-cover lg:h-32 lg:w-64"/>
                </div>
                <div className="w-full md:w-1/2 lg:w-3/4">
                    <div className="flex flex-row justify-between">
                        <h2 className="font-black text-xl text-gray-800"> {title} </h2>
                        <p className="text-xl font-black text-gray-800"> {price} </p>
                    </div>
                    <p className="text-gray-500 text-base py-4"> {desc} </p>
                </div>
            </div>
        </>
    );
}

export default Card;