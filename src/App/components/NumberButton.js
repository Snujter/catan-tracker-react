import React, {Component} from 'react';
import { Button } from 'reactstrap';

class NumberButton extends Component {
    render() {
        const { onClick, number, extraClasses, isDisabled  } = this.props;
        let classes = "btn-round p-2 m-2";
        if (extraClasses) {
            classes += " " + extraClasses;
        }
        if (isDisabled) {
            classes += " disabled";
        }

        return (
            <Button className={classes} onClick={isDisabled ? null : onClick}>
                {number}
            </Button>
        )
    }
}

export default NumberButton;
