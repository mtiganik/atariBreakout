
function fiveTimesFiveBoard() {
  const parent = document.getElementById("grid-container")
  parent.style.gridTemplateColumns= "auto auto auto auto auto";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const newDiv = document.createElement("div")
      newDiv.innerHTML = "&nbsp";
      newDiv.style.backgroundColor = 
      i == 0 ? "rgb(155,0,0)" : i == 1 ? "rgb(155,72,0)" : i == 2 ? "rgb(0,125,0)" : 
      i == 3 ? "rgb(0,0,155)" : i == 4 ? "rgb(155,0,155)" : "rgb(155,155,0";
      newDiv.style.borderRadius = "1px"
      parent.appendChild(newDiv)
      tiles.push(newDiv)
    }
  }
}

function centeredRows() {
  const parent = document.getElementById("grid-container")
  parent.style.gridTemplateColumns= "auto auto auto auto auto";
  parent.style.justifyContent = "center"
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 5; j++) {
      const newDiv = document.createElement("div")
      newDiv.innerHTML = "&nbsp";
      newDiv.style.width = "14vw"
      newDiv.style.height = "5vh"
      newDiv.style.backgroundColor = 
      i == 0 ? "rgb(155,0,0)" : i == 1 ? "rgb(155,72,0)" : i == 2 ? "rgb(155,155,0)":
      i == 3 ? "rgb(0,125,0)" : i == 4 ? "rgb(0,0,155)" : i == 5 ? "rgb(155,0,155)" : "rgb(0,155,155";
      newDiv.style.borderRadius = "1px"
      parent.appendChild(newDiv)
      tiles.push(newDiv)
    }
  }
}

