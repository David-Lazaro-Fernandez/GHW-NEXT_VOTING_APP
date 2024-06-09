const Card = ({ image, candidateName, numberOfVotes }: { image: string, candidateName: string, numberOfVotes: number }) => {
    return (
        <div className="p-4 bg-white border-2 shadow-lg shadow-gray-100 flex flex-row items-center justify-between w-[400px]">
            <div className="max-w-48">
                <img src={image} alt={candidateName} />
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-blue-100 font-bold text-xl">{candidateName}</h2>
                <p className="text-gray-300">Votes: {numberOfVotes}</p>
            </div>
        </div>
    )
}

export default Card;