import { useState } from "react";
import './LuckyX.scss';
import { getRolls, sum } from "../../utils/utils";
import Dice from "../Dice/Dice";
import DiceTotal from "../DiceTotal/DiceTotal";

function LuckyX({ toWin, numDice }) {

    const [dice, setDice] = useState(Array.from({ length: numDice }, () => 0));
    const [count, setCount] = useState(0);
    const isWinner = toWin === sum(dice);

    const buttonText = () => {
        if (dice[0] === 0) {
            return "Roll";
        } else if (isWinner) {
            return "Game Over";
        } else {
            return "Roll Again!";
        }
    }

    const onRoll = () => {
        setDice(getRolls(numDice));
        setCount(c => c + 1);
    }
    return (
        <div className="LuckyX">
            {isWinner && <h2 className="won">🎊 You Won 🎊</h2>}

            <h1>Dice Game</h1>
            <h2>Goal : {toWin}</h2>

            <Dice dice={dice} />

            <DiceTotal count={count} dice={dice} />

            <div className="button">
                <button onClick={onRoll} disabled={isWinner && true} >{buttonText()}</button>
            </div>
        </div>
    );
}

export default LuckyX;
