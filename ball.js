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
        for (let tile of tiles){
          if(isColliding(ball, tile)){
            tile.style.display = "none"
            const currTile = tile.getBoundingClientRect();
            // console.log(parseInt(ball.style.left) + " " +tile.style.left )
            // console.log(parseInt(ball.style.left) + " " +parseInt(tile.style.left) + tile.offsetWidth )
            if(parseInt(ball.style.left) <= currTile.left
            || parseInt(ball.style.left) >= (currTile.left + currTile.width)){
          dx = -dx
          }
          // console.log(parseInt(ball.style.top) + " " +parseInt(tile.style.top) )
          // console.log(parseInt(ball.style.top) + " " +parseInt(tile.style.top) + tile.offsetHeight )

          if (parseInt(ball.style.top) <= currTile.top || 
          parseInt(ball.style.left) >= (currTile.top + currTile.height)){
            dy = -dy
          }
          // clearIntervalHandler()        
        }
        }

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