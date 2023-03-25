const playBoard = document.querySelector('.play-board');
const scoreElement = document.querySelector('.score');
const HighScoreElement = document.querySelector('.high-score');

let gameOver = false;
let foodX,foodY;
let snakeX= 5,snakeY = 10;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;
let highScore =
sessionStorage.getItem("high-score") || 0;

const controls = document.querySelectorAll('.controls i');
HighScoreElement.innerText = `High Score: ${highScore}`;

const changeFoodPosition = () =>{
    foodX = Math.floor(Math.random() *30) +1;
    foodY = Math.floor(Math.random() *30) +1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("game over! press OK to replay...");
    location.reload();
}

const changeDirection = (e) => {
        if(e.key === "ArrowDown" && velocityY != -1){
            velocityX = 0;
            velocityY = 1;
        }else if(e.key ==="ArrowUp" && velocityY != 1){
            velocityX = 0;
            velocityY = -1;
        }else if(e.key ==="ArrowLeft" && velocityX != 1){
            velocityX = -1;
            velocityY = 0;
        }else if(e.key ==="ArrowRight" && velocityX != -1){
            velocityX = 1;
            velocityY = 0;
        }
        initGame()
    }

controls.forEach(key => {
    key.addEventListener('click',
    () => changeDirection({ key: key.dataset.key}));
})
score.innerText
const initGame = () => {
    if(gameOver) return handleGameOver();
    if(snakeX ===foodX && snakeY ===foodY){
        changeFoodPosition();
        snakeBody.push([foodX,foodY]);
        score++;
        highScore = score >= highScore ? score : highScore;
        sessionStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        HighScoreElement.innerText = `Hight score: ${highScore}`
    }
    let htmlMarkup = `<div class="food" style="grid-area:${foodY} / ${foodX}"></div>`;
    for(let i = snakeBody.length-1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    snakeBody[0] = [snakeX,snakeY];
    snakeX += velocityX;
    snakeY += velocityY;

    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
        gameOver = true; 
    }
    for(let i = 0; i < snakeBody.length; i++){
        htmlMarkup += 
        `<div class="head" style="grid-area:
        ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`
        if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver = true;
        }
    }
    playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();
setIntervalId = setInterval(initGame,125);
document.addEventListener('keydown', changeDirection)