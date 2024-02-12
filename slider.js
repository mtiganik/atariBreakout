
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


window.onkeydown = function() {
  if(inter == -1){
    let e = event.keyCode
    inter = setInterval(function(){
      if(e == 37){ // left
        sliderItem.style.left = parseInt(sliderItem.style.left) - 5 + "px"
      }
      if(e == 39){ // right
        sliderItem.style.left = parseInt(sliderItem.style.left) + 5 + "px"
      }
    } , HOP)
  }
}
window.onkeyup = function() {
  clearInterval(inter)
  inter = -1
}
