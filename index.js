// let homeScoreBtnOne = document.getElementById("home-score-btn-1")
// let guestScoreBtnOne = document.getElementById("guest-score-btn-1")

// let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
// let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")

// let homeScoreBtnThree = document.getElementById("home-score-btn-3")
// let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

// let homeScoreEl = document.getElementById("home-score")
// let guestScoreEl = document.getElementById("guest-score")
// let homeScore = 0
// let guestScore = 0

// function increaseHomeScoreOne(){
//     homeScore = homeScore + 1
//     homeScoreEl.textContent = homeScore
// }

// function increaseHomeScoreTwo(){
//     homeScore = homeScore + 2
//     homeScoreEl.textContent = homeScore
// }

// function increaseHomeScoreThree(){
//     homeScore = homeScore + 3
//     homeScoreEl.textContent = homeScore
// }

// function increaseGuestScoreOne(){
//     guestScore = guestScore + 1
//     guestScoreEl.textContent = guestScore
// }

// function increaseGuestScoreTwo(){
//     guestScore = guestScore + 2
//     guestScoreEl.textContent = guestScore
// }

// function increaseGuestScoreThree(){
//     guestScore = guestScore + 3
//     guestScoreEl.textContent = guestScore
// }



let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

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

function addOnePointToGuest() {
  guestScore = guestScore + 1
  guestScoreEl.textContent = guestScore
}

function addTwoPointToGuest() {
  guestScore = guestScore + 2
  guestScoreEl.textContent = guestScore
}

function addThreePointToGuest() {
  guestScore = guestScore + 3
  guestScoreEl.textContent = guestScore
}



