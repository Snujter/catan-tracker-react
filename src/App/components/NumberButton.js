import React, {Component} from 'react';
import { Button } from 'reactstrap';

class NumberButton extends Component {
    render() {
        const { extraClasses, onClick, number } = this.props;

        return (
            <Button className={"btn-round p-2 m-2 " + extraClasses} onClick={onClick}>
                {number}
            </Button>
        )
    }
}

export default NumberButton;
