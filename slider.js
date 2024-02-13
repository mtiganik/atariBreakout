
// SLIDER movement
let sliderItem = null
let sInter = -1;
let sHOP = 30; // milliseconds aka speed
// Touch screen handle
let touchMoveX = 0

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

document.addEventListener("touchmove", event => {
  touchMoveX = event.touches[0].clientX
})

document.addEventListener("touchstart", event => {
  touchMoveX = event.touches[0].clientX
  if (sInter == -1) {
    sInter = setInterval(handleTouchMove, sHOP)
  }
})

function handleTouchMove(event) {
  if (touchMoveX < parseInt(sliderItem.style.left) + window.innerWidth * 0.09) { // left
    moveLeft()
  }
  else if (touchMoveX > parseInt(sliderItem.style.left) + window.innerWidth * 0.11) { // right
    moveRight()
  } 
}


// Keypress handle
document.addEventListener("keydown", event => {
  if(sInter == -1){
    let e = event.code
    sInter = setInterval(function(){
      if(event.code == "ArrowLeft"){ // left
        moveLeft()
      }
      if(event.code == "ArrowRight"){ // right
        moveRight()
      }
    } , sHOP)
  }
})

  document.addEventListener("touchend", clearIntervalHandler, false)
  document.addEventListener("keyup", clearIntervalHandler, false)
  function clearIntervalHandler(event){
    clearInterval(sInter)
    sInter = -1
  }

  function moveRight() {
    sliderItem.style.left = parseInt(sliderItem.style.left) + 5 + "px"
  }

  function moveLeft(){
    sliderItem.style.left = parseInt(sliderItem.style.left) - 5 + "px"
  }