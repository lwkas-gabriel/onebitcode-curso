export function label(attr){
    const element = document.createElement("label");
    Object.assign(element, attr);
    return element;
}

export function input(attr){
    const element = document.createElement("input");
    Object.assign(element, attr)
    return element;
}

export function br(attr){
    const element = document.createElement("br");
    return element;
}