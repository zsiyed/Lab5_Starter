// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    let voices = [];
    speechSynthesis.addEventListener("voiceschanged", () => {
      voices = speechSynthesis.getVoices();
      populateVoiceSelect(voices);
    });

    // Populate the "Select Voice" dropdown with available voices
    function populateVoiceSelect(voices) {
        const voiceSelect = document.getElementById("voice-select");
        voiceSelect.innerHTML = "";
        voices.forEach((voice) => {
        const option = document.createElement("option");
        option.textContent = voice.name;
        option.setAttribute("value", voice.name);
        voiceSelect.appendChild(option);
        });
    }
  
  // Handle button click to initiate speech synthesis
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        const textarea = document.getElementById("text-to-speak");
        const voiceSelect = document.getElementById("voice-select");
        const selectedVoiceName = voiceSelect.value;
        const selectedVoice = voices.find((voice) => voice.name === selectedVoiceName);
    
        // Create new SpeechSynthesisUtterance with selected text and voice
        const utterance = new SpeechSynthesisUtterance(textarea.value);
        utterance.voice = selectedVoice;
    
        // Swap image to open mouth while speaking
        const image = document.querySelector("img");
        utterance.addEventListener("start", () => {
        image.src = "assets/images/smiling-open.png";
        });
    
        // Swap image back to smiling when speaking ends
        utterance.addEventListener("end", () => {
        image.src = "assets/images/smiling.png";
        });
    
        // Speak text with selected voice
        speechSynthesis.speak(utterance);
    });
}
