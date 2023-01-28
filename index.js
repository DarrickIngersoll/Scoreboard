let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let scoreh = 0
let scoreg = 0

function onePointHome() {
    scoreh += 1
    homeScore.textContent = scoreh
}

function twoPointHome() {
    scoreh += 2
    homeScore.textContent = scoreh
}

function threePointHome() {
    scoreh += 3
    homeScore.textContent = scoreh
}

function onePointGuest() {
    scoreg += 1
    guestScore.textContent = scoreg
}

function twoPointGuest() {
    scoreg += 2
    guestScore.textContent = scoreg
}

function threePointGuest() {
    scoreg += 3
    guestScore.textContent = scoreg
}

function newGame() {
    scoreg = 0
    scoreh = 0
    homeScore.textContent = scoreh
    guestScore.textContent = scoreg
}
