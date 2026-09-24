let petals = document.getElementById("petals")
let petalColor = document.getElementById("petal-color")
let petalX = document.getElementById("petal-x")
let petalY = document.getElementById("petal-y")
let petalScale = document.getElementById("petal-scale")
let petalSkewX = document.getElementById("petal-skew-x")
let petalSkewY = document.getElementById("petal-skew-y")

function updateOutput(element, input) {
  element.textContent = input.value
}
 
// each petal is painted with "currentColor", so changing the text color changes every petal
function changeColor(element, colorInput) {
  element.style.color = colorInput.value
}
 
function changePosition(element, xInput, yInput) {
  element.style.translate = xInput.value + "px " + yInput.value + "px"
}
 
function changeScale(element, scaleInput) {
  element.style.scale = scaleInput.value
}
 
function changeSkew(element, xInput, yInput) {
  element.style.transform = `skew(${xInput.value}deg, ${yInput.value}deg)`
}
 
// listen for changes
petalColor.addEventListener("input", function () {
  changeColor(petals, petalColor)
  updateOutput(petalColorOutput, petalColor)
})
 
petalX.addEventListener("input", function () {
  changePosition(petals, petalX, petalY)
  updateOutput(petalXOutput, petalX)
})
petalY.addEventListener("input", function () {
  changePosition(petals, petalX, petalY)
  updateOutput(petalYOutput, petalY)
})
 
petalScale.addEventListener("input", function () {
  changeScale(petals, petalScale)
  updateOutput(petalScaleOutput, petalScale)
})
 
petalSkewX.addEventListener("input", function () {
  changeSkew(petals, petalSkewX, petalSkewY)
  updateOutput(petalSkewXOutput, petalSkewX)
})
petalSkewY.addEventListener("input", function () {
  changeSkew(petals, petalSkewX, petalSkewY)
  updateOutput(petalSkewYOutput, petalSkewY)
})
 
// show the starting values when the page first loads
updateOutput(petalColorOutput, petalColor)
updateOutput(petalXOutput, petalX)
updateOutput(petalYOutput, petalY)
updateOutput(petalScaleOutput, petalScale)
updateOutput(petalSkewXOutput, petalSkewX)
updateOutput(petalSkewYOutput, petalSkewY)