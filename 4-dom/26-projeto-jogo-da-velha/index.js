let number = randomNumberInterval(1,2);

let tagJogada =  number === 1 ? true : false;
let contagemEmpate = 0;
let  matrizDoJogo = 
[
    ["A","B","C"],
    ["C","D","E"],
    ["F","G","H"],
];

const playerOne = document.getElementById("namePlayer1");
const playerTwo = document.getElementById("namePlayer2");
const playerTurn = document.querySelector("h2");
const container = document.getElementById("container");

document.querySelectorAll(".availablePlay").forEach(function (ticTacToeBtn){
    ticTacToeBtn.addEventListener("click", function jogada(){
        if(playerOne.value != "" && playerTwo.value!= "") {
            if(tagJogada){
                playerTurn.innerText = `É a sua vez, ${playerTwo.value}!`;
                console.log(playerOne);
                ticTacToeBtn.innerText = "O";
                //ticTacToeBtn.disabled = true;
                ticTacToeBtn.classList.remove("availablePlay");
                ticTacToeBtn.classList.add("unavailablePlay");
                ticTacToeBtn.removeEventListener("click", jogada);
                tagJogada = false;
                matrizDoJogo[parseInt(ticTacToeBtn.dataset.value[0])][parseInt(ticTacToeBtn.dataset.value[2])] = "O";
                //console.table(matrizDoJogo);
                const isPartida = verificaTabuleiro();
                contagemEmpate++;
                if (isPartida) {
                    playerTurn.innerText = `Parabéns ${playerOne.value}, você venceu!`;
                    document.querySelectorAll("button").forEach(function (ticTacToeBtn) {
                        ticTacToeBtn.removeEventListener("click", jogada);
                    });
                    const restartButton = document.createElement("button");
                    restartButton.innerText = "Reiniciar jogo!"
                    restartButton.type = "button";
                    restartButton.addEventListener("click", restartGame);
                    container.appendChild(restartButton);
                }
                if(contagemEmpate===9){
                    playerTurn.innerText = "Jogo empatado!";
                    const restartButton = document.createElement("button");
                    restartButton.innerText = "Reiniciar jogo!"
                    restartButton.type = "button";
                    restartButton.addEventListener("click", restartGame);
                    container.appendChild(restartButton);
                }
            }else{
                playerTurn.innerText = `É a sua vez, ${playerOne.value}!`;
                ticTacToeBtn.innerText = "X";
                ticTacToeBtn.classList.remove("availablePlay");
                ticTacToeBtn.classList.add("unavailablePlay");
                ticTacToeBtn.removeEventListener("click", jogada);
                //ticTacToeBtn.disabled = true;
                tagJogada = true;
                matrizDoJogo[parseInt(ticTacToeBtn.dataset.value[0])][parseInt(ticTacToeBtn.dataset.value[2])] = "X";
                const isPartida = verificaTabuleiro();
                contagemEmpate++;
                if (isPartida) {
                    playerTurn.innerText = `Parabéns ${playerTwo.value}, você venceu!`;
                    document.querySelectorAll("button").forEach(function (ticTacToeBtn) {
                        ticTacToeBtn.removeEventListener("click", jogada);
                    });
                    const restartButton = document.createElement("button");
                    restartButton.innerText = "Reiniciar jogo!"
                    restartButton.type = "button";
                    restartButton.addEventListener("click", restartGame);
                    container.appendChild(restartButton);
                }
                if(contagemEmpate===9){
                    playerTurn.innerText = "Jogo empatado!";
                    const restartButton = document.createElement("button");
                    restartButton.innerText = "Reiniciar jogo!"
                    restartButton.type = "button";
                    restartButton.addEventListener("click", restartGame);
                    container.appendChild(restartButton);
                }
                //console.table(matrizDoJogo);
            }
        }else{
            alert("Por favor insira o nome dos jogadores!");
        }
    })
});

function verificaTabuleiro(){
    let isPartidaFinalizada = false;
    for(let i = 0; i < matrizDoJogo.length; i++){
        for(let j = 0; j < matrizDoJogo.length; j++){
            if(matrizDoJogo[j][0] === matrizDoJogo[j][1] && matrizDoJogo[j][0] === matrizDoJogo[j][2]){
                let posicao1 = `${j}.0`
                let posicao2 = `${j}.1`
                let posicao3 = `${j}.2`
                //console.log(posicao)
                changeStyleColor(posicao1, posicao2, posicao3);
                isPartidaFinalizada = true;
            }else if (matrizDoJogo[0][j] === matrizDoJogo[1][j] && matrizDoJogo[1][j] === matrizDoJogo[2][j]){
                let posicao1 = `0.${j}`
                let posicao2 = `1.${j}`
                let posicao3 = `2.${j}`
                //console.log(posicao)
                changeStyleColor(posicao1, posicao2, posicao3);
                isPartidaFinalizada = true;
            }
            else if(matrizDoJogo[0][0] === matrizDoJogo[1][1] && matrizDoJogo[1][1] === matrizDoJogo[2][2]){
                let posicao1 = `0.0`
                let posicao2 = `1.1`
                let posicao3 = `2.2`
                //console.log(posicao)
                changeStyleColor(posicao1, posicao2, posicao3);
                isPartidaFinalizada = true;
            }else if(matrizDoJogo[0][2] === matrizDoJogo[1][1] && matrizDoJogo[1][1] === matrizDoJogo[2][0]){
                let posicao1 = `0.2`
                let posicao2 = `1.1`
                let posicao3 = `2.0`
                //console.log(posicao)
                changeStyleColor(posicao1, posicao2, posicao3);
                isPartidaFinalizada = true;
            }
        }
    }
    return isPartidaFinalizada;
}

function restartGame(){
    playerOne.value = "";
    playerTwo.value = "";
    playerTurn.innerText = "";
    document.querySelectorAll("div > button").forEach(function(button){
        if(button.classList.value === "unavailablePlay"){
            button.classList.remove("unavailablePlay");
            button.classList.add("availablePlay");
            button.innerHTML = "";
        }else if(button.classList.value = "winPostion"){
            button.classList.remove("winPostion");
            button.classList.add("availablePlay");
            button.innerHTML = "";
        }
    });
    matrizDoJogo = 
    [
        ["A","B","C"],
        ["C","D","E"],
        ["F","G","H"],
    ];
    container.lastChild.remove();
    number = randomNumberInterval(1,2);
    //console.log(container.lastChild);
}

function randomNumberInterval(a, b) {
    // decide aleatoriamente quem começa o jogo
    return Math.floor(Math.random() * (b - a + 1)) + a
}

function changeStyleColor(position1, position2, position3){
    document.querySelectorAll("div > button").forEach(function(button){
        if(button.dataset.value === position1 || button.dataset.value === position2 || button.dataset.value === position3){
            button.classList.remove("unavailablePlay");
            button.classList.add("winPosition");
        }
    });
}