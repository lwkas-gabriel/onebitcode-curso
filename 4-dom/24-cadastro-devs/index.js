function createLabel(text, htmlFor){
    const label = document.createElement("label");
    label.htmlF = htmlFor;
    label.innerText = text;
    return label;
}

function createInput(id, value, name, type="text", placeholder=""){
    const input = document.createElement("input");
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

function deletarTecnologia(ev){
    ev.currentTarget.parentNode.remove(ev.currentTarget);
}

function cadastrarDev(ev){
    ev.preventDefault();
    const nomeDev = document.getElementById("nameDev");
    const inputRows = document.querySelectorAll(".inputRow");
    let competencias = [];

    inputRows.forEach(function (row){
        const techName = document.querySelector("#" + row.id + " input[name='techName']").value;
        const techExp = document.querySelector("#" + row.id + " input[type='radio']:checked").value;
        competencias.push({name: techName, exp: techExp});
    })

    const newDev = {fullname: nomeDev.value, techs: competencias}
    devs.push(newDev);
    alert("Dev cadastrado com sucesso!");

    nomeDev.value = "";
    inputRows.forEach(function (row){
        row.remove();
    });

    console.log(devs);
}

function adicionarNovaTecnologia(ev){
    const listaDeTecnologias = document.getElementById("techList");
    const itemListaTecnologias = document.createElement("li");
    const rowIndex = inputRows;
    inputRows++;
    itemListaTecnologias.id = "inputRow-"+rowIndex;
    itemListaTecnologias.className = 'inputRow';

    const techNameLabel = createLabel("Nome: ", "techName-"+rowIndex);
    const techNameInput = createInput("techName-"+rowIndex, null, "techName");

    const expLabel = createLabel("Experiência: ");
    const expRadioJunior = createInput("expRadio-"+rowIndex+".1", "0-2 anos", "techExp-"+rowIndex, "radio");
    const expLabelJunior = createLabel("0-2 anos", "expRadio-"+rowIndex+".1");
    const expRadioPleno = createInput("expRadio-"+rowIndex+".1", "3-4 anos", "techExp-"+rowIndex, "radio");
    const expLabelPleno = createLabel("3-4 anos", "expRadio-"+rowIndex+".1");
    const expRadioSenior = createInput("expRadio-"+rowIndex+".1", "5+ anos", "techExp-"+rowIndex, "radio");
    const expLabelSenior = createLabel("5+ anos", "expRadio-"+rowIndex+".1");

    const buttonDelete = document.createElement("button");
    buttonDelete.type = "button";
    buttonDelete.innerText = "Remover"
    buttonDelete.addEventListener("click", deletarTecnologia);

    itemListaTecnologias.append(
        techNameLabel, techNameInput, expLabel, expRadioJunior, expLabelJunior, expRadioPleno, expLabelPleno, expRadioSenior, expLabelSenior, buttonDelete
    );

    listaDeTecnologias.appendChild(itemListaTecnologias);


    // const labelTempo = document.createElement("label");
    // labelTempo.innerText = "Tempo de Experiência: "
    // const tempoJunior = document.createElement("input");
    // tempoJunior.name = "experienceTime" + listaDeTecnologias.children.length;
    // tempoJunior.type = "radio";
    // tempoJunior.value = "0-2 Anos";
    // const labelJunior = document.createElement("label");
    // labelJunior.innerText = "0-2 Anos";
    // const tempoPleno = document.createElement("input");
    // tempoPleno.name = "experienceTime" + listaDeTecnologias.children.length;
    // tempoPleno.type = "radio";
    // tempoPleno.value = "3-4 Anos";
    // const labelPleno = document.createElement("label");
    // labelPleno.innerText = "3-4 Anos";
    // const tempoSenior = document.createElement("input");
    // tempoSenior.name = "experienceTime" + listaDeTecnologias.children.length;
    // tempoSenior.type = "radio"
    // tempoSenior.value = "5+ Anos";
    // const labelSenior = document.createElement("label")
    // labelSenior.innerText = "5+ Anos";
    // const buttonDelete = document.createElement("button");
    // buttonDelete.innerText = "deletar"
    // buttonDelete.addEventListener("click", deletarTecnologia);
}

const form = document.getElementById("devForm");
const addTechBtn = document.getElementById("addTechBtn");
const devs = [];
let inputRows = 0;

addTechBtn.addEventListener("click", adicionarNovaTecnologia);
form.addEventListener("submit", cadastrarDev)