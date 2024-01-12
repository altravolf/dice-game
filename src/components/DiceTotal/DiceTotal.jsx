import { sum } from "../../utils/utils";
import './DiceTotal.scss';

function DiceTotal({ dice, count }) {
    return (
        <div className="DiceTotal">
            Total = {sum(dice)} <br />
            Count = {count}
        </div>
    );
}

export default DiceTotal;
