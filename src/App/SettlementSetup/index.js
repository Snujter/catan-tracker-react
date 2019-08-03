import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faArrowAltCircleUp, faArrowAltCircleDown, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Alert, Card, CardBody, CardText, CardHeader } from 'reactstrap';

import Tile from './Tile';
import TileModal from './TileModal';
import SettlementImage from "../components/SettlementImage";
import AppButton from "../components/AppButton";

library.add(faPlusCircle, faArrowAltCircleUp, faArrowAltCircleDown, faTimesCircle)

class SettlementSetup extends Component {
    state = {
        showTileModal: false,
        activeTile: {},
    };

    // settlements
    getAddButton() {
        const { settlements, onSettlementAdd } = this.props;

        const settlementCount = settlements.filter(settlement => !settlement.isCity).length;
        return settlementCount === 5 ?
            <Alert color="info">Max number of settlements reached</Alert>  :
            <FontAwesomeIcon icon="plus-circle" size="2x" onClick={() => onSettlementAdd()} />;
    }

    getClearAllButton() {
        const { settlements, onClearAll } = this.props;

        if (!settlements || !settlements.length) {
            return;
        }

        return <AppButton className="mb-3" color="warning" onClick={onClearAll}>Clear All</AppButton>;
    }

    // tiles
    handleTileClick = tile => {
        this.setState({
            showTileModal: true,
            activeTile: {...tile},
        });
    };

    toggleTileModal = () => {
        this.setState({
            activeTile: {},
            showTileModal: !this.state.showTileModal,
        });
    };

    handleActiveTileClear = () => {
        const activeTile = Object.assign({...this.state.activeTile}, {
            number: null,
            type: null,
        });
        this.setState({ activeTile });
    };

    handleActiveTileNumberUpdate = number => {
        const activeTile = Object.assign({...this.state.activeTile}, { number });
        this.setState({ activeTile });
    };

    handleActiveTileTypeUpdate = type => {
        const activeTile = Object.assign({...this.state.activeTile}, { type });
        this.setState({ activeTile });
    };

    handleTileSave = () => {
        this.props.onTileUpdate(this.state.activeTile);
        this.toggleTileModal();
    };

    render() {
        const { settlements, tiles, onSettlementUpdate, onSettlementRemove } = this.props;
        const { showTileModal, activeTile } = this.state;

        return (
            <React.Fragment>
                <TileModal
                    isOpen={showTileModal}
                    tile={activeTile}
                    toggle={this.toggleTileModal}
                    onUpdateNumber={this.handleActiveTileNumberUpdate}
                    onUpdateType={this.handleActiveTileTypeUpdate}
                    onSave={this.handleTileSave}
                    onClear={this.handleActiveTileClear}
                />
                <div className="mb-3">
                    {this.getAddButton()}
                </div>
                <div className="hexagon"></div>
                <div>
                    {settlements.map(settlement => {
                        const settlementTiles = tiles.filter(tile => (tile.settlementId === settlement.id));

                        return (
                            <Card className="mb-3" key={settlement.id}>
                                <CardBody className="p-0">
                                    <CardHeader className="bg-light">
                                        <div className="row no-gutters">
                                            <div className="col-6 text-left">
                                                <FontAwesomeIcon
                                                    icon={
                                                        settlement.isCity ?
                                                        "arrow-alt-circle-down" :
                                                        "arrow-alt-circle-up"
                                                    }
                                                    size="2x"
                                                    onClick={() => onSettlementUpdate(settlement)}
                                                />
                                            </div>
                                            <div className="col-6 text-right">
                                                <FontAwesomeIcon
                                                    icon="times-circle"
                                                    size="2x"
                                                    onClick={() => onSettlementRemove(settlement.id)}
                                                />
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardText tag="div">
                                        <div className="row no-gutters align-items-center p-2">
                                            <div className="col-3 text-center align-content-center">
                                                <SettlementImage settlement={settlement} />
                                            </div>
                                            <div className="col-9">
                                                <div className="row no-gutters">
                                                    {settlementTiles.map((tile, i) => {
                                                        const className = i === 0 ? "col-12" : "col-6";

                                                        return (
                                                            <div key={tile.id} className={className}>
                                                                <Tile
                                                                    type={tile.type}
                                                                    number={tile.number}
                                                                    imgHeight={80}
                                                                    onClick={() => this.handleTileClick(tile)}
                                                                />
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </CardText>
                                </CardBody>
                            </Card>
                        );
                    })}
                </div>
                <div>
                    {this.getClearAllButton()}
                </div>
            </React.Fragment>
        );
    }
}

export default SettlementSetup;
