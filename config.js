// Everything the site says lives here. Change the words, save, and reload the page.
// The company, the cars and the contact details are invented for the demo.
//
// Pictures go in assets/car. A "file" is a picture's name without .jpg.
window.ARKA = {
  brand: "Arka",
  sub: "Motorworks",
  city: "Mumbai",
  email: "build@arkamotorworks.example",
  phone: "+91 22 5550 0148",

  // The opening: three cars, then the camera flies into the middle one.
  // "file" is the picture shown before the film has loaded (and the film's first frame).
  hero: {
    file: "lineup",
    title: "For the few who want the only one.",
    note: "Arka builds one-off cars in Mumbai. Twelve a year, each for one owner.",
    hint: "Scroll to step inside",
  },

  // Where the film ends: inside the cabin. Each entry of "lines" is one line of the statement.
  cabin: {
    file: "cabin",
    lines: ["We don't tune cars.", "We build yours."],
  },

  // The picture that grows from the middle of the screen.
  approach: {
    file: "craft",
    label: "Approach",
    title: "One workshop. Twelve people. Your car.",
    text: "Every stitch, weld and coat of paint is done under one roof, by the same hands, from the first sketch to the day you drive away.",
    button: "Start your build",
    facts: [
      { number: "12", label: "cars a year" },
      { number: "1,400", label: "hours in each" },
      { number: "100%", label: "built in-house" },
    ],
  },

  // Three ideas, one at a time. Square pictures.
  values: [
    { file: "value-1", title: "Identity", text: "A build starts with you, not with a catalogue. The colour, the stance and the sound are drawn around how you live." },
    { file: "value-2", title: "Purpose", text: "We ask where you drive before we ask what you want. A car for the ghats is not a car for Marine Drive." },
    { file: "value-3", title: "Harmony", text: "Nothing is bolted on. Every panel, wheel and stitch is chosen so the whole car reads as one idea." },
  ],

  // The sentence that lights up word by word.
  line: "A car should say who you are before you turn the key. Every line, every material and every sound is chosen.",

  // What we do. Square pictures; "Interior" reuses the cabin picture.
  services: [
    { file: "body", name: "Bodywork", text: "Wider arches, carbon panels and paint mixed for one car only. Shaped by hand, checked by laser." },
    { file: "cabin", name: "Interior", text: "Leather, Alcantara and thread picked by you, then cut and sewn in our own trim shop." },
    { file: "wheels", name: "Wheels", text: "Forged wheels and brakes sized for the way you drive, not for the brochure." },
    { file: "lights", name: "Lighting", text: "A light signature drawn for your car, so it is known in the dark from across the road." },
    { file: "exhaust", name: "Exhaust", text: "Titanium systems tuned by ear, from a quiet morning start to a full roar." },
  ],

  start: {
    label: "Start",
    title: "Tell us what you drive. We will show you what it could be.",
    text: "One conversation, no cost. We reply within two working days with a first sketch and a rough timeline.",
    button: "Start your build",
  },
};
