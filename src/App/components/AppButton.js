import React, {Component} from 'react';
import { Button } from 'reactstrap';

class AppButton extends Component {
    render() {
        const { children, color } = this.props;
        return (
            <Button {...this.props} outline color={color || "secondary"}>
                {children}
            </Button>
        )
    }
}

export default AppButton;
