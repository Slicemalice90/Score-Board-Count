let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

let awayScoreEl = document.getElementById("away-score")
let awayScore = 0

let oneToHome = document.getElementById("onePointHome")
let twoToHome = document.getElementById("twoPointHome")
let threeToHome = document.getElementById("threePointHome")

let oneToGuest = document.getElementById("onePointGuest")
let twoToGuest = document.getElementById("twoPointGuest")
let threeToGuest = document.getElementById("threePointGuest")


function addOnePointToHome() {
  homeScore = homeScore + 1
  homeScoreEl.textContent = homeScore
}

function addTwoPointToHome() {
  homeScore = homeScore + 2
  homeScoreEl.textContent = homeScore
}

function addThreePointToHome() {
  homeScore = homeScore + 3
  homeScoreEl.textContent = homeScore
}

function addOnePointToAway() {
  awayScore = awayScore + 1
  awayScoreEl.textContent = awayScore
}

function addTwoPointToAway() {
  awayScore = awayScore + 2
  awayScoreEl.textContent = awayScore
}

function addThreePointToAway() {
  awayScore = awayScore + 3
  awayScoreEl.textContent = awayScore
}



