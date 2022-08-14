let synth = null;

window.addEventListener("DOMContentLoaded", () => {
    const audioStatusText = document.getElementById("audio-status-text")
    const audioStatusBtn = document.getElementById("audio-status-btn");
    audioStatusBtn.addEventListener("click", async () => {
        await Tone.start();
        audioStatusText.innerText = "Ready";
        audioStatusText.className = "text-positive";
        audioStatusBtn.style.display = "none";
        console.log("Audio is ready!");
        configureSynth();
    });
});

function configureSynth() {
    synth = new Tone.Synth().toDestination();
}