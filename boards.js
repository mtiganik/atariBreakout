
function fiveTimesSevenBoard(boardType){
  const parent = document.getElementById("grid-container")
  parent.style.gridTemplateColumns= "auto auto auto auto auto";
  parent.style.justifyContent = "center"
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 5; j++) {
      const newDiv = document.createElement("div")
      newDiv.innerHTML = "&nbsp";
      newDiv.style.width = "14vw"
      newDiv.style.height = "5vh"
      newDiv.style.backgroundColor = fiveTimesSevenLayout(i,j,boardType)
      newDiv.style.borderRadius = "1px"
      parent.appendChild(newDiv)
      tiles.push(newDiv)
    }
  }
}
function fiveTimesSevenLayout(i,j,type){
  if(type === "test"){
    return i == 5 && j==1 ? "rgb(155,72,0)" : "black";
  }
  else if(type === "cube"){
    return i == 0 ? "rgb(155,0,0)" : 
    i == 1 ? j == 2 ? "black" : "rgb(155,72,0)" : 
    i == 2 ? [1,2,3].contains(j) ? "black": "rgb(155,155,0)":
    i == 3 ? [1,2,3].contains(j) ? "black": "rgb(0,125,0)" : 
    i == 4 ? [1,2,3].contains(j) ? "black" : "rgb(0,0,155)" : 
    i == 5 ? j==2 ? "black" :"rgb(155,0,155)" : "rgb(0,155,155";
  }else if(type === "asterix"){
    return i == 0 ? "rgb(155,0,0)" : 
    i == 1 ? j == 2 ? "black" : "rgb(155,72,0)" : 
    i == 2 ? [1,3].contains(j) ? "black": "rgb(155,155,0)":
    i == 3 ? [1,3].contains(j) ? "black": "rgb(0,125,0)" : 
    i == 4 ? [1,3].contains(j) ? "black" : "rgb(0,0,155)" : 
    i == 5 ? j==2 ? "black" :"rgb(155,0,155)" : "rgb(0,155,155";
  }else{
    // default is all displayed
    return i == 0 ? "rgb(155,0,0)" : i == 1 ? "rgb(155,72,0)" : i == 2 ? "rgb(155,155,0)":
    i == 3 ? "rgb(0,125,0)" : i == 4 ? "rgb(0,0,155)" : i == 5 ? "rgb(155,0,155)" : "rgb(0,155,155";

  }
}

Array.prototype.contains = function(obj) {
  var i = this.length;
  while (i--) {
      if (this[i] === obj) {
          return true;
      }
  }
  return false;
}
