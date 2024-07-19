const pageControl = document.querySelector("html")
const screenModeButton = document.querySelector("#switch")
const playButton = document.querySelector(".ph-play-circle")
const pauseButton = document.querySelector(".ph-pause-circle")
const stopButton = document.querySelector(".ph-stop-circle")
const soundButton = document.querySelector(".ph-speaker-high")
const muteButton = document.querySelector(".ph-speaker-slash")

const toggleSetButtons = () => {
  pageControl.classList.toggle("running")
}
const toggleScreen = () => {
  pageControl.classList.toggle("light")
}
const toggleMusic = () => {
  pageControl.classList.toggle("music-on")
}

screenModeButton.addEventListener("click", toggleScreen)
playButton.addEventListener("click", toggleSetButtons)
pauseButton.addEventListener("click", toggleSetButtons)
stopButton.addEventListener("click", toggleSetButtons)
soundButton.addEventListener("click", toggleMusic)
muteButton.addEventListener("click", toggleMusic)
