export function addDataTxt(text) {
    return {
        type: "ADD_DATA",
        text: text
    }
}

export function updateLink(text) {
    return {
        type: "ADD_LINK",
        text
    }
}

/*
export function addSecondTxt(text) {
    console.log(text);
    return {
        type: "SEC_DATA",
        text
    }
}
*/