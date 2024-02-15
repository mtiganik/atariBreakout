let ball = null
let dx = 5;
let dy = -5;
let ballHOP = 30 // milliseconds aka speed
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

document.addEventListener("keydown", event => {
  if(isPause){
    isPause = false
    const welcome = document.getElementById("welcome")
    welcome.style.display = "none"

    let [boardWidth,boardHeight, boardLeft, boardTop] = getBoardComputedStyles();
    console.log(ball.offsetWidth)
    if(bInter == -1){
      bInter = setInterval(() => {
        if(parseInt(ball.style.left) <= boardLeft || parseInt(ball.style.left) >= (boardWidth -ball.offsetWidth)){
          dx = -dx
        }
        if(parseInt(ball.style.top) <= boardTop || parseInt(ball.style.top) >= (boardHeight- ball.offsetHeight)){
          dy = -dy
        }
        ball.style.left = parseInt(ball.style.left) + dx + "px"
        ball.style.top = parseInt(ball.style.top) + dy + "px"
      },ballHOP)
    }

  }
})

function getBoardComputedStyles(){
  let board = document.getElementById("board");
  let boardComputedStyle = window.getComputedStyle(board)

  let boardWidth = parseInt(boardComputedStyle.left) + parseInt(boardComputedStyle.width);
  let boardHeight = parseInt(boardComputedStyle.top) + parseInt(boardComputedStyle.height);
  let boardLeft = parseInt(boardComputedStyle.left)
  let boardTop = parseInt(boardComputedStyle.top)
  return [boardWidth,boardHeight, boardLeft, boardTop];
}
