let startingPage = document.querySelector("#startingPage");
let choose = document.querySelectorAll(".choose");

let mainPage = document.querySelector("#mainPage");
let showChange = document.querySelector("#showChange");
let boxes = document.querySelectorAll(".boxes");
let winner = document.querySelector("#winner");
let winnerName = document.querySelector("#winnerName");
let quit = document.querySelector("#quit");

let changeTurn = null;



choose.forEach(chooseNow => {
    chooseNow.addEventListener("click", () => {
        if (chooseNow.id === "playerX") {
            changeTurn = false;
            showChange.style.left = `0px`;
        } else {
            changeTurn = true;
            showChange.style.left = `160px`;
        }
        startingPage.style.display = "none";
        mainPage.style.display = "block";
    })
});

//Reset Game
quit.addEventListener("click", () => {
    window.location.reload();
})



