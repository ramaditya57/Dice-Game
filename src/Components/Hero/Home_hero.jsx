import React from "react";
import Button from "../Button/Button";
import styles from "./Hero_home.module.css";

const Home_hero = ({toogle}) => {
  return (
    <div className={styles.original}>
      <img src="./images/dices 1.png" alt="" />

      <div className={styles.data}>
        <h1>DICE GAME</h1>
        <div>
          <Button text="Play Now" onClick={toogle}/>
        </div>
      </div>
    </div>
  );
};

export default Home_hero;
