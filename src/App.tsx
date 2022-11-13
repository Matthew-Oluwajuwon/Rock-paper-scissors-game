/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import rock from "./images/rock.png";
import paper from "./images/paper.png";
import scissors from "./images/scissors.png";
import question from "./images/question.png";

export const App = () => {
  const [userChoice, setUserChoice] = useState<string>("");
  const [userChoiceDisplay, setUserChoiceDisplay] = useState<string>("");
  const [computerChoice, setComputerChoice] = useState<string>("");
  const [computerDisplayChoice, setComputerDisplayChoice] =
    useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<string>("");
  const [winner, setWinner] = useState<string>("");

  const computerChoiceArray: Array<string> = ["rock", "paper", "scissors"];
  const index: number = Math.floor(Math.random() * 3);

  const DisplayUserChoiceOnScreen = () => {
    switch (userChoice) {
      case "rock":
       setUserChoiceDisplay(rock);
        break;
      case "paper":
        setUserChoiceDisplay(paper);
        break;
      case "scissors":
        setUserChoiceDisplay(scissors);
        break;
      default:
        setUserChoiceDisplay(question);
        break;
    }

    if (userChoice.length !== null) {
      setComputerChoice(computerChoiceArray[index]);
      setLoader(true);
      setWinner("loading");
    }

    setTimeout(() => {
      setLoader(false);
      if (userChoice && computerChoice && userChoice === computerChoice) {
        setGameStatus("Tie, re-draw");
        setWinner("draw");
      } else if (userChoice === "rock" && computerChoice === "scissors") {
        setGameStatus("You win!!!");
        setWinner("won");
      } else if (userChoice === "scissors" && computerChoice === "rock") {
        setGameStatus("You lose!!!");
        setWinner("lost");
      } else if (userChoice === "paper" && computerChoice === "scissors") {
        setGameStatus("You lost!!!");
        setWinner("lost");
      } else if (userChoice === "scissors" && computerChoice === "paper") {
        setGameStatus("You win!!!");
        setWinner("won");
      } else if (userChoice === "rock" && computerChoice === "paper") {
        setGameStatus("You lose!!!");
        setWinner("lost");
      } else if (userChoice === "paper" && computerChoice === "rock") {
        setGameStatus("You win!!!");
        setWinner("won");
      }

      switch (computerChoice) {
        case "rock":
          setComputerDisplayChoice(rock);
          break;
        case "paper":
          setComputerDisplayChoice(paper);
          break;
        case "scissors":
          setComputerDisplayChoice(scissors);
          break;

        default:
          setComputerDisplayChoice(question);
          break;
      }
    }, 1000);
  };

  useEffect(() => {
   DisplayUserChoiceOnScreen();
  }, [userChoice]);

  return (
    <div className="w-full h-screen bg-rock flex flex-col items-center justify-between">
      <h1 className="text-center text-[3rem] text-white font-extrabold">
        ROCK, PAPER AND SCISSORS
      </h1>
      <div className="flex gap-10 w-[40%] md:w-full md:flex-wrap md:px-10 h-[30%] md:h-fit md:gap-20">
        <div className="w-[100%] md:mb-[-50px]">
          <p className="text-white font-black mb-10 text-center">USER CHOICE</p>
          <div className="w-[100%] h-[100%] md:h-[12rem] outline outline-1 outline-slate-700 shadow-lg bg-black rounded-md flex items-center justify-center">
            <img
              src={userChoiceDisplay}
              alt="game-img"
              className="w-[50%] h-[60%]"
            />
          </div>
        </div>
        <div className="w-[100%]">
          <p className="text-white font-black mb-10 text-center">
            COMPUTER CHOICE
          </p>
          <div className="w-[100%] h-[100%] md:h-[12rem] outline outline-1 outline-slate-700 shadow-lg bg-black rounded-md flex items-center justify-center">
            {loader ? (
              <p className="text-white">Please wait..</p>
            ) : (
              <img
                src={computerDisplayChoice}
                alt="game-img"
                className="w-[50%] h-[60%]"
              />
            )}
          </div>
        </div>
      </div>
      <div className="w-[40%] md:w-full md:px-10">
        <p className="text-white font-bold mb-5">Select user choice</p>
        <select
          className="w-[100%] cursor-pointer h-[50%]"
          value={userChoice}
          onChange={(e) => setUserChoice(e.target.value)}
        >
          <option value="">Select your choice</option>
          <option value="rock">ROCK</option>
          <option value="paper">PAPER</option>
          <option value="scissors">SCISSORS</option>
        </select>
      </div>
      <div
        className="w-[40%] md:w-full md:px-10 h-[10%] bg-slate-200 shadow-lg rounded-md text-xl font-extrabold flex justify-center items-center mt-[-100px]"
        style={{
          color:
            winner === "draw"
              ? "orange"
              : winner === "won"
              ? "green"
              : winner === "lost"
              ? "red"
              : winner === "loading"
              ? "black"
              : "",
        }}
      >
        {loader ? "Loading..." : gameStatus}
      </div>
    </div>
  );
};
