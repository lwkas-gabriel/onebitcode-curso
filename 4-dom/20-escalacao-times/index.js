function addPlayer(){
    const positionInput = document.getElementById("position");
    const nameInput = document.getElementById("name");
    const numberInput = document.getElementById("number");
    const section = document.getElementById("players-list");

    if(positionInput.value === "" || nameInput.value === "" || numberInput.value === ""){
        alert("Verifique os campos!");
    }else{
        const confirma = confirm("Você deseja realmente adicionar esse jogador na sua escalação?");
        if(confirma){
            const ul = document.createElement("ul");
            const liPosition = document.createElement("li");
            liPosition.innerText = positionInput.value;
            ul.appendChild(liPosition);
            const liName = document.createElement("li");
            liName.innerText = nameInput.value;
            ul.appendChild(liName);
            const liNumber = document.createElement("li");
            liNumber.innerText = numberInput.value;
            liNumber.id = numberInput.value;
            ul.appendChild(liNumber);

            section.appendChild(ul);

            positionInput.value = "";
            nameInput.value = "";
            numberInput.value = "";
        }else{
            alert("Cancelando operação!");
            positionInput.value = "";
            nameInput.value = "";
            numberInput.value = "";
        }
    }
}

function removePlayer(){
    const numberInputDelete = document.getElementById("number-deletion");
    const section = document.getElementById("players-list");

    if(numberInputDelete === ""){
        alert("Verifique os campos necessário para deleção!");
    }else{
        const confirma = confirm("Você deseja realmente remover esse jogador da sua escalação?");
        if(confirma){
            const liForDeletion = document.getElementById(numberInputDelete.value);
            if(liForDeletion == undefined || liForDeletion == null){
                alert("Verifique o valor de entrada!");
            }else{
                const ulForDeletion = liForDeletion.parentNode;
                section.removeChild(ulForDeletion);
                numberInputDelete.value = "";
            }
        }else{
            alert("Cancelando operação!");
            positionInput.value = "";
            nameInput.value = "";
            numberInput.value = "";
        }
    }
}