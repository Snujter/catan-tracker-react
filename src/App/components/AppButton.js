import React, {Component} from 'react';
import { Button } from 'reactstrap';

class AppButton extends Component {
    render() {
        const { children, className, isDisabled, isActive, onClick} = this.props;
        return (
            <Button
                className={className}
                onClick={onClick}
                disabled={isDisabled}
                active={isActive}
                outline color="secondary"
            >
                {children}
            </Button>
        )
    }
}

export default AppButton;
