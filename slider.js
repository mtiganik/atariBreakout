
function initSlider() {
  sliderItem = document.getElementById("slider")
  sliderItem.style.position = "absolute"
  sliderItem.style.backgroundColor = "white"
  sliderItem.style.width = "16%"
  sliderItem.style.bottom = "10px"
  sliderItem.style.margin = "auto"
  sliderItem.style.left = window.innerWidth / 2.5 + "px"
  sliderItem.style.borderRadius = "20%"
}

// Touch screen handle
let touchMoveX = 0
document.addEventListener("touchmove", event => {
  touchMoveX = event.touches[0].clientX
})

document.addEventListener("touchstart", event => {
  touchMoveX = event.touches[0].clientX
  if (inter == -1) {
    inter = setInterval(handleTouchMove, HOP)
  }
})

function handleTouchMove(event) {
  if (touchMoveX < parseInt(sliderItem.style.left) + window.innerWidth * 0.09) { // left
    console.log("left")
    moveLeft()
  }
  else if (touchMoveX > parseInt(sliderItem.style.left) + window.innerWidth * 0.11) { // right
    console.log("right")
    moveRight()
  } 
}


// Keypress handle
document.addEventListener("keydown", event => {
  if(inter == -1){
    let e = event.code
    inter = setInterval(function(){
      if(event.code == "ArrowLeft"){ // left
        moveLeft()
      }
      if(event.code == "ArrowRight"){ // right
        moveRight()
      }
    } , HOP)
  }
})

  document.addEventListener("touchend", clearIntervalHandler, false)
  document.addEventListener("keyup", clearIntervalHandler, false)
  function clearIntervalHandler(event){
    clearInterval(inter)
    inter = -1
  }

  function moveRight() {
    sliderItem.style.left = parseInt(sliderItem.style.left) + 5 + "px"
  }

  function moveLeft(){
    sliderItem.style.left = parseInt(sliderItem.style.left) - 5 + "px"
  }