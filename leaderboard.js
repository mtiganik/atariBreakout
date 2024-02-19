function handleLeaderboardBtnClick(){
    console.log("lb btn click")

    const lb = document.getElementById("leaderboard")
    const computedStyle = window.getComputedStyle(lb)
    console.dir(computedStyle.display)
    if (computedStyle.display ==="none"){
        lb.style.display= "block"
    }else{
        lb.style.display = "none"
    }
}
