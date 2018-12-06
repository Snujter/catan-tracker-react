import React, {Component} from 'react';
import { availableRolls } from '../../immutables';
import AppButton from "./AppButton";

class NumberButtons extends Component {
    render() {
        const { numbers, selectedNumber, onButtonClick, className, disabledNumbers } = this.props;

        return (
            <div className={className}>
                {(numbers || availableRolls).map(number => {
                    const isDisabled = disabledNumbers && disabledNumbers.indexOf(number) !== -1;

                    return (
                        <AppButton
                            key={number}
                            className="btn-round p-2 m-2"
                            disabled={isDisabled}
                            active={number === selectedNumber}
                            onClick={() => onButtonClick && onButtonClick(number)}
                        >
                            {number}
                        </AppButton>
                    );
                })}
            </div>
        )
    }
}

export default NumberButtons;
