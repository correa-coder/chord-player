// chords with custom voicings
const chords = {
    "C-major": ["C3", "G3", "C4", "E4"],
    "D-minor": ["D3", "A3", "D4", "F4"],
    "E-minor": ["E3", "G3", "B3", "E4"],
    "F-major": ["F3", "A3", "C4", "F4"],
    "G-major": ["G3", "B3", "D4", "G4"],
    "A-minor": ["A3", "E3", "C4", "E4"],
    "B-diminished": ["B3", "D3", "F3"],
    "C-major-seventh": ["C3", "G3", "B3", "E4"],
    "D-minor-seventh": ["D3", "A3", "C4", "F4"],
    "E-minor-seventh": ["E3", "G3", "B3", "D4"],
    "F-major-seventh": ["F3", "A3", "C4", "E4"],
    "G-dominant-seventh": ["G3", "B3", "D4", "F4"],
    "A-minor-seventh": ["A3", "E3", "G3", "C4"],
    "B-half-diminished": ["B3", "D3", "F3", "A3"],
};

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
    const volume = new Tone.Volume(-12).toDestination();
    const synth = new Tone.PolySynth(Tone.Synth).connect(volume);
    const chordButtons = document.querySelectorAll(".btn-chord");
    let selectedChord = null;

    // map chords to buttons
    for (let button of chordButtons) {
        button.addEventListener("click", () => {
            selectedChord = chords[button.id];
            synth.triggerAttackRelease(selectedChord, 0.6, Tone.now());
        });
    }
}