export default function Home() {
  const numberOfVotes = 0;
  const candidates = ["Doge", "Oh Long Johnson", "Grumpy Cat"];
  const candidatesInfo = [
    {
      image: "/doge.jpg",
      candidateName: "Doge",
      numberOfVotes: 0
    },
    {
      image: "/oh-long-johnson.jpg",
      candidateName: "Oh Long Johnson",
      numberOfVotes: 0
    },
    {
      image: "/grumpy-cat.jpg",
      candidateName: "Grumpy Cat",
      numberOfVotes: 0
    }
  ]
  return (
    <div>
      <h1>DOGE DON'T WORRY WE'RE GONNA BEAT OH LONG JOHNSON!</h1>
      <h1>Number of votes: {numberOfVotes}</h1>
      <h2>Candidates:</h2>
      <ul>
        {candidates.map((candidate) => <li>{candidate}</li>)}
      </ul>
      {
        candidatesInfo.map((candidateInfo) => <Card {...candidateInfo} />)
      }
    </div>
  );
}


const Card = ({ image, candidateName, numberOfVotes }: { image: string, candidateName: string, numberOfVotes: number }) => {
  return (
    <div className="p-4 bg-slate-100 border-1 shadow-slate-50 flex flex-row items-center justify-center w-[400px]">
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
