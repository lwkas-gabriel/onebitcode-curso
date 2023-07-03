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
                 isPartidaFinalizada = true;
            }else if (matrizDoJogo[0][j] === matrizDoJogo[1][j] && matrizDoJogo[1][j] === matrizDoJogo[2][j]){
                isPartidaFinalizada = true;
            }
            else if(matrizDoJogo[0][0] === matrizDoJogo[1][1] && matrizDoJogo[1][1] === matrizDoJogo[2][2]){
                isPartidaFinalizada = true;
            }else if(matrizDoJogo[0][2] === matrizDoJogo[1][1] && matrizDoJogo[1][1] === matrizDoJogo[2][0]){
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
        }
    });
    matrizDoJogo = 
    [
        ["A","B","C"],
        ["C","D","E"],
        ["F","G","H"],
    ];
    container.lastChild.remove();
    //console.log(container.lastChild);
}

function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}