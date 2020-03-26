import { getKey } from '../utils/util';
export default function parsedata(state = [], action) {

    switch(action.type) {
        case 'ADD_DATA':
            return [...state, {id: getKey(), text: action.text}]
        default:
            return state;
    }
}
