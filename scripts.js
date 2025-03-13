// images setup
const images = [
  "https://images.unsplash.com/photo-1543777166-81504743e51e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=1920",
  "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80"
];

// content setup
const texts = [
  ["Antan", "Digital Production\nDuo Toward Innovative\nAnd Immersive Projects"],
  ["Portfolio", "Clean And Minimalist\nDesigns For\nMathéo PICHOT-MOÏSE"],
  ["OratisAI", "Fast & Easy\nSpeech Recognition\nFor Your Business"]
];

// init plugin
rgbKineticSlider = new rgbKineticSlider({
  // images and content sources
  slideImages: images, // array of images >demo size : 1920 x 1080
  itemsTitles: texts,  // array of titles / subtitles

  // displacement images sources
  backgroundDisplacementSprite: "assets/map.jpg", // slide displacement image
  cursorDisplacementSprite: "assets/displace.png", // cursor displacement image

  // cursor displacement effect
  cursorImgEffect: true, // enable cursor effect
  cursorTextEffect: false, // enable cursor text effect
  cursorScaleIntensity: 0.65, // cursor effect intensity
  cursorMomentum: 0.14, // lower is slower

  // swipe
  swipe: true, // enable swipe
  swipeDistance: window.innerWidth * 0.4, // swipe distance - ex : 580
  swipeScaleIntensity: 2, // scale intensity during swipping

  // slide transition
  slideTransitionDuration: 1, // transition duration
  transitionScaleIntensity: 30, // scale intensity during transition
  transitionScaleAmplitude: 160, // scale amplitude during transition

  nav: false,

  // image rgb effect
  imagesRgbEffect: false, // enable img rgb effect
  imagesRgbIntensity: 0.9, // set img rgb intensity
  navImagesRgbIntensity: 80, // set img rgb intensity for regular nav

  // texts settings
  textsDisplay: true, // show title
  textsSubTitleDisplay: true, // show subtitles
  textsTiltEffect: true, // enable text tilt
  googleFonts: ["Playfair Display:700", "Roboto:400"], // select google font to use
  buttonMode: true, // enable button mode for title
  textsRgbEffect: true, // enable text rgb effect
  textsRgbIntensity: 0.03, // set text rgb intensity
  navTextsRgbIntensity: 15, // set text rgb intensity for regular nav

  textTitleColor: "white", // title color
  textTitleSize: 125, // title size
  mobileTextTitleSize: 125, // title size
  textTitleLetterspacing: 3, // title letterspacing

  textSubTitleColor: "white", // subtitle color ex : 0x000000
  textSubTitleSize: 21, // subtitle size
  mobileTextSubTitleSize: 21, // mobile subtitle size
  textSubTitleLetterspacing: 2, // subtitle letter spacing
  textSubTitleOffsetTop: 90,
  mobileTextSubTitleOffsetTop: 90,
});
