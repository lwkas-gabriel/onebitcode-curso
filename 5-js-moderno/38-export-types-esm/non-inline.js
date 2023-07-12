function group(){
    console.log("Export nomeado não-inline (agrupado)");
}

function exportDefault(){
    console.log("Export default não-inline");
}

// apenas uma forma de agrupar meus exports nomeados em uma parte diferente do codigo... depende da cultura do dev teem...
export { group };

//mesma coisa com o export default
export default exportDefault;