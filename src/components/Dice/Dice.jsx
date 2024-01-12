import Die from "../Die/Die";
import './Dice.scss';

function Dice({ dice }) {
    return (
        <div className="Dice">
            {dice.map((val, i) => (
                <Die key={i} val={val} />
            ))}
        </div>
    );
}

export default Dice;
