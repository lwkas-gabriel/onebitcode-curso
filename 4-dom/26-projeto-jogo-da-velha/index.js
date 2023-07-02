let tagJogada = false; //false == X true = O
let finalizouPartida = 0;
const matrizDoJogo = 
[
    ["A","B","C"],
    ["C","D","E"],
    ["F","G","H"],
];

const playerOne = document.getElementById("namePlayer1");
const playerTwo = document.getElementById("namePlayer2");

document.querySelectorAll(".availablePlay").forEach(function (ticTacToeBtn){
    ticTacToeBtn.addEventListener("click", function(){
        if(tagJogada){
            ticTacToeBtn.innerHTML = "O";
            ticTacToeBtn.disabled = true;
            tagJogada = false;
            matrizDoJogo[parseInt(ticTacToeBtn.dataset.value[0])][parseInt(ticTacToeBtn.dataset.value[2])] = "O";
            //console.table(matrizDoJogo);
            const isPartida = verificaTabuleiro();
            console.log(isPartida);
            if (isPartida) {
                alert("O jogador da 'O' venceu!")
            }
        }else{
            ticTacToeBtn.innerHTML = "X";
            ticTacToeBtn.disabled = true;
            tagJogada = true;
            matrizDoJogo[parseInt(ticTacToeBtn.dataset.value[0])][parseInt(ticTacToeBtn.dataset.value[2])] = "X";
            const isPartida = verificaTabuleiro();
            console.log(isPartida);
            if (isPartida) {
                alert("O jogador do 'X' venceu!")
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