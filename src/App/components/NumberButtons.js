import React, {Component} from 'react';
import NumberButton from '../components/NumberButton';
import { availableRolls } from '../../immutables';

class NumberButtons extends Component {
    render() {
        const { numbers, selectedNumber, onButtonClick, className } = this.props;

        return (
            <div className={className}>
                {(numbers || availableRolls).map((number, i) => {
                    const extraClasses = (number === selectedNumber) ?
                        " bg-dark text-light" :
                        " bg-light text-dark";

                    return (
                        <NumberButton
                            key={i}
                            number={number}
                            extraClasses={extraClasses}
                            onClick={() => onButtonClick(number)}
                        />
                    );
                })}
            </div>
        )
    }
}

export default NumberButtons;
