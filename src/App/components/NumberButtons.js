import React, {Component} from 'react';
import NumberButton from '../components/NumberButton';
import { availableRolls } from '../../immutables';

class NumberButtons extends Component {
    render() {
        const { numbers, selectedNumber, onButtonClick, className, disabledNumbers } = this.props;

        return (
            <div className={className}>
                {(numbers || availableRolls).map((number, i) => {
                    const isDisabled = disabledNumbers && disabledNumbers.indexOf(number) !== -1;

                    const extraClasses = (number === selectedNumber) ?
                        "active" :
                        "bg-light text-dark";

                    return (
                        <NumberButton
                            key={i}
                            number={number}
                            extraClasses={extraClasses}
                            isDisabled={isDisabled}
                            onClick={() => onButtonClick && onButtonClick(number)}
                        />
                    );
                })}
            </div>
        )
    }
}

export default NumberButtons;
