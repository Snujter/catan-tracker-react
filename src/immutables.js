import brickHex from './images/brick-hex.png';
import forestHex from './images/forest-hex.png';
import fieldHex from './images/field-hex.png';
import rockHex from './images/rock-hex.png';
import wheatHex from './images/wheat-hex.png';

const availableRolls = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const availableTypes = {
    'brick': brickHex,
    'field': fieldHex,
    'forest': forestHex,
    'rock': rockHex,
    'wheat': wheatHex,
}

export { availableRolls, availableTypes };
