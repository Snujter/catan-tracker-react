import React, {Component} from 'react';
import { numbers, types } from '../../immutables';

class Chart extends Component {
    render() {
        return (
            numbers.map(number => (
                <div key={number}>{number}</div>
            ))
        )
    }
}

export default Chart;
