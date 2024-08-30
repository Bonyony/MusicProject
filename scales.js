//Array of keys and the notes of their major scales
const majorScales = [
  {
    key: "A",
    scaleNotes: ["A", "B", "C#", "D", "E", "F#", "G#"],
  },
  {
    key: "Bb",
    scaleNotes: ["Bb", "C", "D", "Eb", "F", "G", "A"],
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
    key: "Db",
    scaleNotes: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
  },
  {
    key: "D",
    scaleNotes: ["D", "E", "F#", "G", "A", "B", "C#"],
  },
  {
    key: "Eb",
    scaleNotes: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
  },
  {
    key: "E",
    scaleNotes: ["E", "F#", "G#", "A", "B", "C#", "D#"],
  },
  {
    key: "F",
    scaleNotes: ["F", "G", "A", "Bb", "C", "D", "E"],
  },
  {
    key: "Gb",
    scaleNotes: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
  },
  {
    key: "G",
    scaleNotes: ["G", "A", "B", "C", "D", "E", "F#"],
  },
  {
    key: "Ab",
    scaleNotes: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
  },
];
//Minor Scales
const minorScales = [
  {
    key: "Am", //
    scaleNotes: ["A", "B", "C", "D", "E", "F", "G"],
  },
  {
    key: "Bbm", //
    scaleNotes: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
  },
  {
    key: "Bm", //
    scaleNotes: ["B", "C#", "D", "E", "F#", "G", "A"],
  },
  {
    key: "Cm", //
    scaleNotes: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
  },
  {
    key: "C#m", //
    scaleNotes: ["C#", "D#", "E", "F#", "G#", "A", "B"],
  },
  {
    key: "Dm", //
    scaleNotes: ["D", "E", "F", "G", "A", "Bb", "C"],
  },
  {
    key: "Ebm", //
    scaleNotes: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
  },
  {
    key: "Em", //
    scaleNotes: ["E", "F#", "G", "A", "B", "C", "D"],
  },
  {
    key: "Fm", //
    scaleNotes: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
  },
  {
    key: "F#m", //
    scaleNotes: ["F#", "G#", "A", "B", "C#", "D", "E"],
  },
  {
    key: "Gm", //
    scaleNotes: ["G", "A", "Bb", "C", "D", "Eb", "F"],
  },
  {
    key: "G#m", //
    scaleNotes: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
  },
];

// Inputs
const keyInput = document.getElementById("keyInput");
const majMinInput = document.getElementById("majMinInput");
// Displays
const notesDisplay = document.getElementById("notes-display");

const output = document.getElementById("output");
const output2 = document.getElementById("output2");

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetDisplay();
  console.log(keyInput.value);
  console.log(majMinInput.value);

  majMinInput.value === "major" ? displayMajorInputs() : displayMinorInputs();
});

//reset the svg for a new chord
const resetDisplay = () => {
  output.innerHTML = "";
  output2.innerHTML = "";
};

// display the user inputs visually
const displayMajorInputs = () => {
  findNotes(majorScales);
  let readyScale = userScale.map(function (el, index) {
    let newEl = index < 7 ? el + "/4" : el + "/5";
    console.log(el);
    return newEl;
  });
  notesDisplay.innerText = `Notes: ${userScale.join(" - ")}`;
  showScale(readyScale);
  console.log(readyScale);
  //   chordDisplay.innerText = prepareMajorChordDisplay();
  //   showTab();
};

const displayMinorInputs = () => {
  console.log("miner minor");
  updateKeyInputs();
  findNotes(minorScales);
  //   readyChord = chord.map(octivize);
  notesDisplay.innerText = `Notes: ${userScale.join(" - ")}`;
  //   showChord(readyChord);
  //   chordDisplay.innerText = prepareMinorChordDisplay();
  //   showTab();
};

/*
 function to prepare the chord for the SVG view, may need to be changed
 as this only returns notes within the same octave, and I may want the octaves to 
 be reactive and climb or fall +/- one octave in the future
*/
const octivize = (el) => {};

// Switch the keyInput value to a minor version
let keyHolder;
const updateKeyInputs = () => {
  switch (keyInput.value) {
    case "A":
      keyHolder = "Am";
      break;
    case "Bb":
      keyHolder = "Bbm";
      break;
    case "B":
      keyHolder = "Bm";
      break;
    case "C":
      keyHolder = "Cm";
      break;
    case "Db":
      keyHolder = "C#m";
      break;
    case "D":
      keyHolder = "Dm";
      break;
    case "Eb":
      keyHolder = "Ebm";
      break;
    case "E":
      keyHolder = "Em";
      break;
    case "F":
      keyHolder = "Fm";
      break;
    case "Gb":
      keyHolder = "F#m";
      break;
    case "G":
      keyHolder = "Gm";
      break;
    case "Ab":
      keyHolder = "G#m";
      break;

    default:
      break;
  }
  console.log(keyHolder);
  return keyHolder;
};

// match the input value to the proper scale key
let userScale;
const findNotes = (scale) => {
  for (let i = 0; i <= 11; i++) {
    if (scale[i].key === keyInput.value || scale[i].key === keyHolder) {
      userScale = scale[i].scaleNotes;
    }
  }
  console.log(userScale);
};

// Destructure from VexFlow
const {
  Renderer,
  Stave,
  TabStave,
  TabNote,
  KeySignature,
  Accidental,
  StaveNote,
  Beam,
  Voice,
  Formatter,
  Dot,
} = Vex.Flow;

// Create an SVG renderer
const showScale = (userScale) => {
  const div = document.getElementById("output");
  const renderer = new Renderer(div, Renderer.Backends.SVG);
  // Configure the rendering context.
  renderer.resize(200, 200);
  const context = renderer.getContext();
  // Create a stave of width 400 at position 10, 40 on the canvas.
  const stave = new Stave(10, 40, 500);
  // Add a clef and time signature.
  stave
    .addClef("treble")
    .addKeySignature(
      majMinInput.value === "major" ? keyInput.value : keyHolder
    );
  // Connect it to the rendering context and draw!
  stave.setContext(context).draw();
  // Create the notes
  const notes = [
    new StaveNote({
      keys: userScale,
      duration: "q",
    }),
  ];
  // Create a voice and add above notes
  const voices = [
    new Voice({
      num_beats: 4,
      beat_value: 4,
    }).addTickables(notes),
  ];
  // Format and justify the notes to 400 pixels.
  new Formatter().joinVoices(voices).format(voices, 350);
  // Render voices.
  voices.forEach(function (v) {
    v.draw(context, stave);
  });
};
