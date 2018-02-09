

// Variables representing elements on the "Basic" screen
var currentColor
var targetColor
var redSlider
var redLabel
var greenSlider
var greenLabel
var blueSlider
var blueLabel
var onOffSwitch
var onOffSwitchLabel

// Variables representing elements on the "Settings" screen
var autoOffSwitch
var autoOffSwitchLabel
var autoOffTimeSlider


// Utility Function: Convert an RGB values (in tegers) to a string for use in HTML/CSS styles.
function rgb(r,g,b) {
  return "rgb(" + r + "," + g + "," + b + ")";
}

// Update the current color to reflect the positions of the sliders
function updateTargetColor() {
  var red = Math.round(redSlider.value*255/100)
  var green = Math.round(greenSlider.value*255/100)
  var blue = Math.round(blueSlider.value*255/100)
  targetColor.style.background = rgb(red, green, blue)
}

function setColorClicked(event) {
  var red = Math.round(redSlider.value*255/100)
  var green = Math.round(greenSlider.value*255/100)
  var blue = Math.round(blueSlider.value*255/100)
  // TODO: Pass the choice of colors to the light.
  light.setColor({"r":red, "g":green, "b":blue})
}

function redSliderChange(event) {
  redLabel.innerText = redSlider.value
  updateTargetColor()
}
function greenSliderChange(event) {
  greenLabel.innerText = greenSlider.value
  updateTargetColor()
}
function blueSliderChange(event) {
  blueLabel.innerText = blueSlider.value
  updateTargetColor()
}

function autoOffSliderChange(event) {
  autoOffTimeLabel.innerText = autoOffTimeSlider.value + "s"
}

function autoOffUpdate() {
  if(autoOffSwitch.checked) {
    autoOffTimeSlider.disabled = false;
  } else {
    autoOffTimeSlider.disabled = true;
  }
  // Send to light
  light.setAutoOffEnabled(autoOffSwitch.checked)
}

function onOffUpdate() {
  light.setPowered(onOffSwitch.checked)
}

function stateUpdate(newState) {
  // TODO 2: Update the UI with the state

}

function loadingPage(value) {
  document.getElementById("loading").hidden = !value;
  document.getElementById("allControls").hidden = value;
}

// On startup:  Things to do once the page is fully loaded and the DOM is configured
document.addEventListener("DOMContentLoaded", function(event) {
  currentColor = document.getElementById("currentColor")
  targetColor = document.getElementById("targetColor")
  redSlider = document.getElementById("redSlider")
  redLabel = document.getElementById("redLabel")
  greenSlider = document.getElementById("greenSlider")
  greenLabel = document.getElementById("greenLabel")
  blueSlider = document.getElementById("blueSlider")
  blueLabel = document.getElementById("blueLabel")
  onOffSwitch = document.getElementById("onOffSwitch")
  onOffSwitchLabel = document.getElementById("onOffSwitchLabel")

  // Variables representing elements on the "Settings" screen
  autoOffSwitch = document.getElementById("autoOffSwitch")
  autoOffSwitchLabel = document.getElementById("autoOffSwitchLabel")
  autoOffTimeSlider = document.getElementById("autoOffTimeSlider")

  // Event handlers
  document.getElementById("setColorButton").addEventListener("click", setColorClicked)
  document.getElementById("redSlider").addEventListener("change", redSliderChange)
  document.getElementById("greenSlider").addEventListener("change", greenSliderChange)
  document.getElementById("blueSlider").addEventListener("change", blueSliderChange)
  autoOffTimeSlider.addEventListener("change", autoOffSliderChange)
  autoOffSwitch.addEventListener("click", autoOffUpdate)
  onOffSwitch.addEventListener("click", onOffUpdate)

  // TODO 3: Disable all controls on the page initially (and ensure that they are enabled once the state is known.)
  // HINT: Use loadingPage().

  // TODO 1: Note the line below
  light.setStateChangeListener(stateUpdate)


  // Update the state of elements not changed by the light's state
  updateTargetColor()
  redSliderChange()
  blueSliderChange()
  greenSliderChange()
})
