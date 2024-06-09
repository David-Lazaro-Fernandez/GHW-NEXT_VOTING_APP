"use client"
import { useState } from "react";
import Card from "./components/Card";

export default function Home() {
  const [dogeVotes, setDogeVotes] = useState<number>(0)

  const handleVote = () => {
    setDogeVotes(dogeVotes + 1)
  }

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
      <h1 className="text-3xl font-bold">Number of votes for Doge: {dogeVotes}</h1>
      <h2>Candidates:</h2>
      <ul>
        {candidates.map((candidate) => <li>{candidate}</li>)}
      </ul>
      {
        candidatesInfo.map((candidateInfo, index) => <Card {...candidateInfo} key={index} />)
      }
      <button
        className="p-4 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600"
        onClick={handleVote}>
        Vote for Doge
      </button>
    </div>
  );
}