import React, { useState } from "react";
import styles from "./GamePlay.module.css";
import Box from "../Box/Box";
import MainContent from "../MainContent/mainContent";

const GamePlay = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const [error, setError] = useState();

  const [currDice, setCurrDice] = useState(1);

  const [selectedNo, setSelectedNo] = useState();

  const [val, setVal] = useState(0);

  const generateRandomNo = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (selectedNo === undefined) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    const randomNumber = generateRandomNo(1, 7);
    setCurrDice((prev) => randomNumber);

    if (selectedNo === randomNumber) {
      setVal((prev) => prev + randomNumber);
    } else {
      setVal((prev) => prev - 2);
    }

    setSelectedNo(undefined);
  };

  const reset = () =>{
    setVal(0);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.total}>
          <h1>{val}</h1>
          <p>Total Score</p>
        </div>

        <div className={styles.diceContainer}>
          <div className={styles.error}>
            {error}
            <div className={styles.dice}>
              {arrNumber.map((value, i) => (
                <Box
                  isSelected={value === selectedNo}
                  onClick={() => setSelectedNo(value)}
                  key={i}
                  text={value}
                />
              ))}
            </div>
          </div>
          <p>Select Number</p>
        </div>
      </div>

      <div className="imgContainer">
        <MainContent reset={reset} currDice={currDice} rollDice={rollDice} />
      </div>
    </>
  );
};

export default GamePlay;
