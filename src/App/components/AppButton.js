import React, {Component} from 'react';
import { Button } from 'reactstrap';

class AppButton extends Component {
    render() {
        const { children, color, disabled } = this.props;

        return (
            <Button {...this.props} outline color={disabled ? "grey" : color || "secondary"}>
                {children}
            </Button>
        )
    }
}

export default AppButton;
