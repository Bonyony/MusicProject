// This function will render the chords
// Destructure from VexFlow
const { Renderer, Stave, Accidental, StaveNote, Beam, Voice, Formatter, Dot } =
  Vex.Flow;

// Create an SVG renderer
const div = document.getElementById("output");
const renderer = new Renderer(div, Renderer.Backends.SVG);
// Configure the rendering context.
renderer.resize(500, 500);
const context = renderer.getContext();
// Create a stave of width 400 at position 10, 40 on the canvas.
const stave = new Stave(10, 40, 400);
// Add a clef and time signature.
stave.addClef("treble");
// .addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();
// Create the notes
const notes = [
  new StaveNote({
    keys: ["C#/5"],
    duration: "q",
  }).addModifier(new Accidental("#")),
  new StaveNote({
    keys: ["D/4"],
    duration: "q",
  }),
  new StaveNote({
    keys: ["B/4"],
    duration: "qr",
  }),
  new StaveNote({
    keys: ["C/4", "E/4", "G/4"],
    duration: "q",
  }),
];

const notes2 = [
  new StaveNote({
    keys: ["C/3"],
    duration: "h",
  }),
  new StaveNote({
    keys: ["G/2"],
    duration: "h",
  }),
];
// Create a voice in 4/4 and add above notes
const voices = [
  new Voice({
    num_beats: 4,
    beat_value: 4,
  }).addTickables(notes),
  new Voice({
    num_beats: 4,
    beat_value: 4,
  }).addTickables(notes2),
];
// Format and justify the notes to 400 pixels.
new Formatter().joinVoices(voices).format(voices, 350);
// Render voices.
voices.forEach(function (v) {
  v.draw(context, stave);
});

// My Main Code

// Array of standard major chords
const majorChords = [
  {
    name: "A",
    chordNotes: ["(A4 C#4 E4)/", "(C#4 E4 A5)/", "(E4 A5 C#5)/"],
  },
  {
    name: "A#",
    chordNotes: ["(A#4 D4 F4)/", "(D4 F4 A#5)/", "(F4 A#5 D5)/"],
  },
  {
    name: "B",
    chordNotes: ["(B4 D#4 F#4)/", "(D#4 F#4 B5)/", "(F#4 B5 D#5)/"],
  },
  {
    name: "C",
    chordNotes: ["(C4 E4 G4)/", "(E4 G4 C5)/", "(G4 C5 E5)/"],
  },
  {
    name: "C#",
    chordNotes: ["(C#4 E#4 G#4)/", "(E#4 G#4 C#5)/", "(G#4 C#5 E#5)/"],
  },
  {
    name: "D",
    chordNotes: ["(D4 F#4 A4)/", "(F#4 A4 D5)/", "(A4 D5 F#5)/"],
  },
  {
    name: "D#",
    chordNotes: ["(D#4 G4 A#4)/", "(G4 A#4 D#5)/", "(A#4 D#5 G5)/"],
  },
  {
    name: "E",
    chordNotes: ["(E4 G#4 B4)/", "(G#4 B4 E5)/", "(B4 E5 G#5)/"],
  },
  {
    name: "F",
    chordNotes: ["(F4 A4 C4)/", "(A4 C4 F5)/", "(C4 F5 A5)/"],
  },
  {
    name: "F#",
    chordNotes: ["(F#4 A#4 C#4)/", "(A#4 C#4 F#5)/", "(C#4 F#5 A#5)/"],
  },
  {
    name: "G",
    chordNotes: ["(G4 B4 D4)/", "(B4 D4 G5)/", "(D4 G5 B5)/"],
  },
  {
    name: "G#",
    chordNotes: ["(G#4 C4 D#4)/", "(C4 D#4 G#5)/", "(D#4 G#5 C5)/"],
  },
];

const majorScales = [
  {
    key: "A",
    scaleNotes: ["A", "B", "C#", "D", "E", "F#", "G#"],
  },
  {
    key: "A#",
    scaleNotes: ["A#", "C", "D", "D#", "F", "G", "A"],
  },
  {
    key: "B",
    scaleNotes: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
  },
  {
    key: "C",
    scaleNotes: ["C", "D", "E", "F", "G", "A", "B"],
  },
  {
    key: "C#",
    scaleNotes: ["C#", "D#", "F", "F#", "G#", "A#", "C"],
  },
  {
    key: "D",
    scaleNotes: ["D", "E", "F#", "G", "A", "B", "C#"],
  },
  {
    key: "D#",
    scaleNotes: ["D#", "F", "G", "G#", "A#", "C", "D"],
  },
  {
    key: "E",
    scaleNotes: ["E", "F#", "G#", "A", "B", "C#", "D#"],
  },
  {
    key: "F",
    scaleNotes: ["F", "G", "A", "A#", "C", "D", "E"],
  },
  {
    key: "F#",
    scaleNotes: ["F#", "G#", "A#", "B", "C#", "D#", "F"],
  },
  {
    key: "G",
    scaleNotes: ["G", "A", "B", "C", "D", "E", "F#"],
  },
  {
    key: "G#",
    scaleNotes: ["G#", "A#", "C", "C#", "D#", "F", "G"],
  },
];

// Inputs and displays
const keyInput = document.getElementById("keyInput");
const scaleDegree = document.getElementById("scaleDegree");
const keyDisplay = document.getElementById("key-display");
const chordDisplay = document.getElementById("chord-display");

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayInputs();
  console.log(keyInput.value);
  console.log(scaleDegree.value);
});

// display the user inputs visually
const displayInputs = () => {
  keyDisplay.innerText = `Key: ${keyInput.value}`;
  /*
  THE chordDisplay.innerText IS ONLY A PLACEHOLDER FOR NOW
  TO SHOW THE VALUE EXISTS
  */
  chordDisplay.innerText = `Chord: ${scaleDegree.value}`;
  findNotes(majorScales);
  //console.log(majorScales[11]);
};

// match the input value to the proper scale key
const findNotes = (scale) => {
  let userScale;
  for (let i = 0; i <= 11; i++) {
    if (scale[i].key === keyInput.value) {
      userScale = scale[i].scaleNotes;
    }
  }
  console.log(userScale);
  findChord(userScale);
};

//destructure the notes into defined chords
const findChord = (notes) => {
  let [one, two, three, four, five, six, seven] = notes;
  console.log(four);
  let chord;
  if (scaleDegree.value == 1) {
    chord = [one, three, five];
  }
  if (scaleDegree.value == 2) {
    chord = [two, four, six];
  }
  if (scaleDegree.value == 3) {
    chord = [three, five, seven];
  }
  if (scaleDegree.value == 4) {
    chord = [four, six, one];
  }
  if (scaleDegree.value == 5) {
    chord = [five, seven, two];
  }
  if (scaleDegree.value == 6) {
    chord = [six, one, three];
  }
  if (scaleDegree.value == 7) {
    chord = [seven, two, four];
  }
  console.log(chord);
};
