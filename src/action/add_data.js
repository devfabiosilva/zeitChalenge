export function addDataTxt(text) {
    return {
        type: "ADD_DATA",
        text: text
    }
}

export function addSecondTxt(text) {
    console.log(text);
    return {
        type: "SEC_DATA",
        text
    }
}