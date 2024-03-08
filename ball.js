let ball = null
let dx = -5;
let dy = -5;
let ballHOP = 15 // milliseconds aka speed
bInter = -1

function initBall() {
  ball = document.getElementById("ball")
  ball.style.position = "absolute";
  ball.style.backgroundColor = "white";
  ball.style.width = "20px"
  ball.style.height = "20px"
  ball.style.borderRadius = "10px"
  ball.style.bottom = "30px"
  ball.style.left = "50%"
  let ballComputedStyle = window.getComputedStyle(ball)
  ball.style.left = parseInt(ballComputedStyle.left) + "px"
  ball.style.top = parseInt(ballComputedStyle.top) + "px"

}
document.addEventListener("keydown", handleBallMovement, false)
document.addEventListener("touchstart", handleBallMovement, false)

function handleBallMovement(){
  if(isPause){
    isPause = false
    pauseBtn.src =  "images/pause.svg"
    const welcome = document.getElementById("welcome")
    welcome.style.display = "none"
    startTime = Date.now();
    let [boardWidth,boardHeight, boardLeft, boardTop] = getBoardComputedStyles();
    console.log(ball.offsetWidth)
    if(bInter == -1){
      bInter = setInterval(() => {
        handleTileCollision();
        handleSliderCollision();
        if(parseInt(ball.style.left) <= boardLeft || parseInt(ball.style.left) >= (boardWidth -ball.offsetWidth)){
          dx = -dx
        }
        if(parseInt(ball.style.top) <= boardTop ){
          dy = -dy
        }
        if(parseInt(ball.style.top) >= (boardHeight- ball.offsetHeight)){
          dy = -dy
          lives = lives -1
          livesDisplay.innerHTML = lives
          if(lives == 0){
            welcome.style.display = "inline-block"
            welcome.innerHTML = "Game lost. Out of lives"
            clearIntervalHandler()
          }
        }
        ball.style.left = parseInt(ball.style.left) + dx + "px"
        ball.style.top = parseInt(ball.style.top) + dy + "px"
      },ballHOP)
    }

  }
}

function handleSliderCollision(){

  if(isColliding(ball,slider)){
    dy = -Math.abs(dy)
    const ballRect = ball.getBoundingClientRect();
    const sRext = slider.getBoundingClientRect();
    const ballCenter = (ballRect.left + ballRect.right) / 2

    if(ballCenter < sRext.left + sRext.width*0.2 ) dx = -10
    else if(ballCenter < sRext.left + sRext.width*0.4) dx = -5
    else if(ballCenter < sRext.left + sRext.width*0.6) dx = 0
    else if(ballCenter < sRext.left + sRext.width*0.8) dx = 5
    else dx = 10
  }
}


function handleTileCollision() {
  for (let tile of tiles) {
    if (tile.style.backgroundColor != "black") {

      if (isColliding(ball, tile)) {
        const ballRect = ball.getBoundingClientRect();
        const tileRect = tile.getBoundingClientRect();
        if ((ballRect.left > tileRect.left && dx >= 0)
          || (ballRect.right < tileRect.right && dx <= 0)) {
          dy = -dy;
        }
        else if ((ballRect.top > tileRect.top && dy < 0)
          || (ballRect.bottom < tileRect.bottom && dy > 0)) {
          dx = -dx;
        } else {
          dx = -dx;
        }
        tile.style.backgroundColor = "black";
        if(isGameWon()){
          var delta = Date.now() - startTime

          welcome.style.display = "inline-block"
          welcome.innerHTML = "You won, time: " + (Math.floor(delta / 1000)) + "." + (Math.floor((delta%1000) / 10)) + " sec"
          clearIntervalHandler()
        }
        break;
      }
    }
  }
}

function isGameWon(){
  for (let tile of tiles)  {
    if(tile.style.backgroundColor != "black"){
      return false
    }
  };
  return true

}

function getBoardComputedStyles(){
  let board = document.getElementById("board");
  let boardComputedStyle = window.getComputedStyle(board)

  let boardWidth = parseInt(boardComputedStyle.left) + parseInt(boardComputedStyle.width);
  let boardHeight = parseInt(boardComputedStyle.top) + parseInt(boardComputedStyle.height);
  let boardLeft = parseInt(boardComputedStyle.left)
  let boardTop = parseInt(boardComputedStyle.top)
  return [boardWidth,boardHeight, boardLeft, boardTop];
}

function isColliding(element1, element2){
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();
  return !(rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom)
}

function clearIntervalHandler() {
  clearInterval(bInter)
  bInter = -1
}