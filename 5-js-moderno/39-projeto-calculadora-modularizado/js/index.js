import calculate from "./calculate.js";
import copyToClipBoard from "./copyToClipBoard.js"; 
import { handleButtonPress, handleClearBtn, handleTyping } from "./keyHandlers.js";
import themeSwitcher from "./themeSwitcher.js";

document.querySelectorAll(".charKey").forEach(function (charKeyBtn){
    charKeyBtn.addEventListener("click", handleButtonPress);
});

document.getElementById("clear").addEventListener("click", handleClearBtn);

document.getElementById("input").addEventListener("keydown", handleTyping);

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("copyToClipboard").addEventListener("click", copyToClipBoard);

document.getElementById("themeSwitcher").addEventListener("click", themeSwitcher);