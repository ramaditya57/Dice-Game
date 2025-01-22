import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const MainContent = ({reset, currDice, rollDice }) => {

  const [state, setState] = useState(false);

  const func = () => {
    setState((prev) => !prev);
  };

  return (
    <div className="container">
      <DiceContainer>
        <div className="dice" onClick={rollDice}>
          <img
            src={`/images/dice_${currDice}.png`}
            className="image_file"
            alt=""
          />
        </div>
        <p>Click on Dice to roll</p>

        <div className="button_container">
          <Button onClick={reset} isColorProperty={false} text="Reset Score" />
          <Button onClick={func} isColorProperty={true} text="Show Rules" />
        </div>

        {state && <div className="rules">
          <h1>How to play dice game</h1>
          <div className="steps">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>
              after click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </p>
            <p>if you get wrong guess then 2 point will be dedcuted </p>
          </div>
        </div>}
      </DiceContainer>
    </div>
  );
};

export default MainContent;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  .image_file {
    max-width: 250px;
    max-height: 250px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }

  .button_container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .rules{
    margin-top: 64px;
    background-color: #FBF1F1;
    max-width: 794px;
    max-height: 208px;
    padding: 15px 20px;
    border-radius: 8px;
  }

  .rules h1 {
    font-size: 24px;
    font-weight: 800;
    margin-top: 0px;
  }

  .steps p{
    font-size: 16px;
    margin: 0;
  }
`;
