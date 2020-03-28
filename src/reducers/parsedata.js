import { getKey } from '../utils/util';
//const param = {link: ""};
export function parsedata(state = [], action) {

    switch(action.type) {
        case 'ADD_DATA':
            return [...state, {id: getKey(), text: action.text}]
        default:
            return state;
    }
}

export function addlink(state = {link: ""}, action) {

    switch(action.type) {
        case 'ADD_LINK':
            return {link: action.text}
        default:
            return state;
    }
}