let homeScore = 0
let guestScore = 0

let home = document.getElementById("home-score")
let guest = document.getElementById("guest-score")


function incOne(team){
    if(team==='home'){
        homeScore += 1
        home.textContent = homeScore
    }
    else if(team === 'guest'){
        guestScore += 1
        guest.textContent = guestScore
    }
}

function incTwo(team){
    if(team==='home'){
        homeScore += 2
        home.textContent = homeScore
    }
    else if(team === 'guest'){
        guestScore += 2
        guest.textContent = guestScore
    }
}

function incThree(team){
    if(team==='home'){
        homeScore += 3
        home.textContent = homeScore
    }
    else if(team === 'guest'){
        guestScore += 3
        guest.textContent = guestScore
    }
}

function newGame(){
    homeScore = 0
    guestScore = 0
    home.textContent = homeScore
    guest.textContent = guestScore
}