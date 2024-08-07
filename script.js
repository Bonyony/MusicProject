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

//Array of minor scales
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
const scaleDegree = document.getElementById("scaleDegree");
// Displays
const keyDisplay = document.getElementById("key-display");
const chordDisplay = document.getElementById("chord-display");
const notesDisplay = document.getElementById("notes-display");

const output = document.getElementById("output");
const output2 = document.getElementById("output2");

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetDisplay();
  console.log(keyInput.value);
  console.log(majMinInput.value);
  console.log(scaleDegree.value);

  majMinInput.value === "major" ? displayMajorInputs() : displayMinorInputs();
});

//reset the svg for a new chord
const resetDisplay = () => {
  output.innerHTML = "";
  output2.innerHTML = "";
};

// display the user inputs visually
const displayMajorInputs = () => {
  keyDisplay.innerText = `Key: ${keyInput.value} Major`;
  findNotes(majorScales);
  let readyChord = chord.map(octivize);
  notesDisplay.innerText = `Notes: ${chord.join("-")}`;
  showChord(readyChord);
  chordDisplay.innerText = prepareMajorChordDisplay();
  showTab();
};

const displayMinorInputs = () => {
  console.log("miner minor");
  updateKeyInputs();
  keyDisplay.innerText = `Key: ${keyInput.value} Minor`;
  findNotes(minorScales);
  readyChord = chord.map(octivize);
  notesDisplay.innerText = `Notes: ${chord.join("-")}`;
  showChord(readyChord);
  chordDisplay.innerText = prepareMinorChordDisplay();
  showTab();
};

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

/*
 function to prepare the chord for the SVG view, may need to be changed
 as this only returns notes within the same octave, and I may want the octaves to 
 be reactive and climb or fall +/- one octave in the future
*/
const octivize = (el) => {
  return el + "/4";
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
  findChord(userScale);
};

let chord;
//destructure the notes into defined chords
const findChord = (notes) => {
  let [one, two, three, four, five, six, seven] = notes;
  switch (Number(scaleDegree.value)) {
    case 1:
      chord = [one, three, five];
      break;
    case 2:
      chord = [two, four, six];
      break;
    case 3:
      chord = [three, five, seven];
      break;
    case 4:
      chord = [four, six, one];
      break;
    case 5:
      chord = [five, seven, two];
      break;
    case 6:
      chord = [six, one, three];
      break;
    case 7:
      chord = [seven, two, four];
      break;

    default:
      break;
  }
  console.log(chord);
};

// chord display function
const prepareMajorChordDisplay = () => {
  let holder = Number(scaleDegree.value);
  let sig;
  if (holder === 1 || holder === 4 || holder === 5) {
    sig = "Major";
  } else if (holder === 2 || holder === 3 || holder === 6) {
    sig = "Minor";
  } else {
    sig = "Diminished";
  }

  return `Chord: ${chord[0]} ${sig}`;
};

const prepareMinorChordDisplay = () => {
  let holder = Number(scaleDegree.value);
  let sig;
  if (holder === 1 || holder === 4 || holder === 5) {
    sig = "Minor";
  } else if (holder === 3 || holder === 6 || holder === 7) {
    sig = "Major";
  } else {
    sig = "Diminished";
  }
  return `Chord: ${chord[0]} ${sig}`;
};

// This function will render the chords with vexFlow
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
const showChord = (userChord) => {
  const div = document.getElementById("output");
  const renderer = new Renderer(div, Renderer.Backends.SVG);
  // Configure the rendering context.
  renderer.resize(200, 200);
  const context = renderer.getContext();
  // Create a stave of width 400 at position 10, 40 on the canvas.
  const stave = new Stave(10, 40, 175);
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
      keys: userChord,
      duration: "w",
    }),
  ];
  // Create a voice and add above notes
  const voices = [
    new Voice({
      num_beats: 1,
      beat_value: 1,
    }).addTickables(notes),
  ];
  // Format and justify the notes to 400 pixels.
  new Formatter().joinVoices(voices).format(voices, 350);
  // Render voices.
  voices.forEach(function (v) {
    v.draw(context, stave);
  });
};

/* Guitar Tab renderer and some logic */

// section for Guitar Tabs, may need to be moved upwards in the code
// unused for production right now
// const showTab = () => {
//   const div2 = document.getElementById("output2");
//   const renderer2 = new Renderer(div2, Renderer.Backends.SVG);
//   // Configure the rendering context.
//   renderer2.resize(200, 250);
//   const context2 = renderer2.getContext();
//   // Create a tab stave of width 400 at position 10, 40 on the canvas.
//   const stave2 = new TabStave(10, 40, 175);
//   stave2.addClef("tab").setContext(context2).draw();

//   const notesTab = [
//     // A single note
//     new TabNote({
//       positions: [
//         { str: 1, fret: "G" },
//         { str: 2, fret: "U" },
//         { str: 3, fret: "I" },
//         { str: 4, fret: "T" },
//         { str: 5, fret: "A" },
//         { str: 6, fret: "R" },
//       ],
//       duration: "q",
//     }),

//     // A chord with the note on the 3rd string bent
//     new TabNote({
//       positions: [
//         { str: 2, fret: "T" },
//         { str: 3, fret: "E" },
//         { str: 4, fret: "S" },
//         { str: 5, fret: "T" },
//       ],
//       duration: "q",
//     }),
//   ];

//   Formatter.FormatAndDraw(context2, stave2, notesTab);
// };
