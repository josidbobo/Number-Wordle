import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
// import Sound from "../container/Sound/Sound";
// import charshoeX from "../assets/Charshoe-X.mp3";
import "./Main.css";

const Main = ({
  connected,
  claimFreeTokens,
  userBalance,
  isPlaying,
  connectWallet,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    if (!connected && parseInt(userBalance.DOWTokenBalance) < 5) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);

  return (
    <main>
      <div className="dow-text flicker">
        <div className="dow-text-border" />
        <h1 className="dead-text">Number</h1>
        <p className="dow-text-or">-</p>
        <h1>Wordle</h1>
        <div className="dow-text-border" />
      </div>

      <div className="main-menu-links">
        <Link to="/startGame">
          <button
            className="menu-button start-game"
            disabled={isDisabled}
            // onClick={startGame}
          >
            Start Game
          </button>
        </Link>
        <Link to="/howToPlay">
          <button className="menu-button">How To Play</button>
        </Link>
        <Link to="/options">
          <button className="menu-button">Options</button>
        </Link>
        <Link to="/about">
          <button className="menu-button">About</button>
        </Link>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
