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
  //ball.style.top = window.innerHeight - 100 + "px"
  ball.style.left = "50%"
}

document.addEventListener("keydown", event => {
  if(isPause){
    isPause = false
    const welcome = document.getElementById("welcome")
    welcome.style.display = "none"
    let computedStyle = window.getComputedStyle(ball)
    ball.style.left = parseInt(computedStyle.left) + "px"
    ball.style.top = parseInt(computedStyle.top) + "px"

    if(bInter == -1){
      bInter = setInterval(() => {
        ball.style.left = parseInt(ball.style.left) + dx + "px"
        ball.style.top = parseInt(ball.style.top) + dy + "px"
      },ballHOP)
    }

  }
})
