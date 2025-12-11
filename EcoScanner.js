const URL = "https://teachablemachine.withgoogle.com/models/M3rSecUsJ/";

let model, webcam, labelContainer, maxPredictions;

async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  const flip = true;
  webcam = new tmImage.Webcam(200, 200, flip);
  await webcam.setup();
  await webcam.play();
  window.requestAnimationFrame(loop);

  document.getElementById("webcam-container").appendChild(webcam.canvas);
  labelContainer = document.getElementById("label-container");
  labelContainer.innerHTML = "";

  for (let i = 0; i < maxPredictions; i++) {
    const line = document.createElement("div");
    labelContainer.appendChild(line);
  }
}

async function loop() {
  webcam.update();
  await predict();
  window.requestAnimationFrame(loop);
}

async function predict() {
  const prediction = await model.predict(webcam.canvas);

  for (let i = 0; i < maxPredictions; i++) {
    const className = prediction[i].className;
    const prob = prediction[i].probability.toFixed(2);
    const text = className + ": " + prob;
    labelContainer.childNodes[i].innerHTML = text;
  }
}

/* The JavaScript code below is adapted from the official Teachable Machine
example for image models. The original template was generated on the
Teachable Machine website for this specific model:
https://teachablemachine.withgoogle.com/models/M3rSecUsJ/

This script is only used on the Eco Scanner page to demonstrate how
machine learning can support more sustainable choices in an educational way. */



