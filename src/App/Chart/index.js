import React, {Component} from 'react';
import NumberButtons from "../components/NumberButtons";
import Tile from "../SettlementSetup/Tile";
import { availableRolls } from "../../immutables";

class Chart extends Component {
    constructor(props) {
        super(props);

        const resources = this.calculateResourcesForRolls();
        const disabledNumbers = availableRolls.filter(roll => !resources[roll]);

        this.state = {
            selectedNumber: props.selectedNumber,
            resources: resources,
            disabledNumbers: disabledNumbers,
        };
    }

    handleNumberUpdate = number => {
        const { disabledNumbers } = this.state;
        if (disabledNumbers.indexOf(number) !== -1) {
            return;
        }

        this.setState({
            selectedNumber: number,
        })
    };

    render() {
        const { resources, selectedNumber, disabledNumbers } = this.state;
        const resourcesForSelected = resources[selectedNumber] || [];

        return (
            <React.Fragment>
                <NumberButtons
                    className="d-flex justify-content-center flex-wrap mb-5"
                    selectedNumber={selectedNumber}
                    disabledNumbers={disabledNumbers}
                    onButtonClick={this.handleNumberUpdate}
                />
                <div className="d-flex justify-content-center bd-highlight mb-3">
                    {Object.keys(resourcesForSelected).map(function(type) {
                        const amount = resourcesForSelected[type];

                        return (
                            <div className="p-2 bd-highlight" key={type}>
                                <Tile key={type} type={type} number={amount} />
                            </div>
                        );
                    })}
                </div>
            </React.Fragment>
        )
    }

    calculateResourcesForRolls() {
        const { settlements, tiles } = this.props;

        return tiles.reduce((resources, tile) => {
            const settlement = settlements.find(settlement => settlement.id === tile.settlementId);
            const { type, number } = tile;

            if (!resources[number]) {
                resources[number] = {};
            }

            if (!resources[number][type]) {
                resources[number][type] = 0;
            }

            resources[number][type] += settlement.isCity ? 2 : 1;

            return resources;
        }, {});
    }
}

export default Chart;
