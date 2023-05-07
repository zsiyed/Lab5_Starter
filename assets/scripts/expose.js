// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Get the  DOM elements
const hornSelect = document.getElementById("horn-select");
const soundImage = document.querySelector("img");
const volumeSlider = document.getElementById("volume");
const volumeImage = document.querySelector("#volume-controls img");
const playButton = document.querySelector("button");
const audioElement = document.querySelector("audio");
const jsConfetti = new JSConfetti();


// Set up event listeners
hornSelect.addEventListener("change", () => {
  soundImage.src = `assets/images/${hornSelect.value}.svg`;

  audioElement.src = `assets/audio/${hornSelect.value}.mp3`;
});

volumeSlider.addEventListener("input", () => {
  // Update the volume of the audio element based on the slider value
  audioElement.volume = volumeSlider.value / 100;

  // Update the volume icon based on the slider value
  if (volumeSlider.value == 0) {
    volumeImage.src = "assets/icons/volume-level-0.svg";
  } else if (volumeSlider.value < 33) {
    volumeImage.src = "assets/icons/volume-level-1.svg";
  } else if (volumeSlider.value < 67) {
    volumeImage.src = "assets/icons/volume-level-2.svg";
  } else {
    volumeImage.src = "assets/icons/volume-level-3.svg";
  }
});

playButton.addEventListener("click", () => {
  // Play the audio element at the selected volume
  audioElement.play();
  if (hornSelect.value === "party-horn") {
        jsConfetti.addConfetti();
      }
});
}