let tagJogada = false; //false = X true = O
let contagemEmpate = 0;
const matrizDoJogo = 
[
    ["A","B","C"],
    ["C","D","E"],
    ["F","G","H"],
];

const playerOne = document.getElementById("namePlayer1");
const playerTwo = document.getElementById("namePlayer2");
const playerTurn = document.querySelector("h2");

document.querySelectorAll(".availablePlay").forEach(function (ticTacToeBtn){
    ticTacToeBtn.addEventListener("click", function jogada(){
        if(tagJogada){
            playerTurn.innerText = `É a sua vez, ${playerOne.value}!`;
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
                alert(`Parabéns ${playerOne.value}, você venceu!`);
            }
            if(contagemEmpate===9){
                alert("jogo empatado!");
                contagemEmpate++;
            }
        }else{
            playerTurn.innerText = `É a sua vez, ${playerTwo.value}!`;
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
                alert(`Parabéns ${playerTwo.value}, você venceu!`);
            }
            if(contagemEmpate===9){
                alert("jogo empatado!");
            }
            //console.table(matrizDoJogo);
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