// https://calculator.swiftutors.com/sound-intensity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const soundIntensityRadio = document.getElementById('soundIntensityRadio');
const soundPowerRadio = document.getElementById('soundPowerRadio');
const areaRadio = document.getElementById('areaRadio');

let soundIntensity;
let soundPower = v1;
let area = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

soundIntensityRadio.addEventListener('click', function() {
  variable1.textContent = '(P) Sound Power (W)';
  variable2.textContent = '(A) Area (m²)';
  soundPower = v1;
  area = v2;
  result.textContent = '';
});

soundPowerRadio.addEventListener('click', function() {
  variable1.textContent = '(I) Sound Intensity (W/m²)';
  variable2.textContent = '(A) Area (m²)';
  soundIntensity = v1;
  area = v2;
  result.textContent = '';
});

areaRadio.addEventListener('click', function() {
  variable1.textContent = '(I) Sound Intensity (W/m²)';
  variable2.textContent = '(P) Sound Power (W)';
  soundIntensity = v1;
  soundPower = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(soundIntensityRadio.checked)
    result.textContent = `Sound Intensity = ${computeSoundIntensity().toFixed(2)} W/m²`;

  else if(soundPowerRadio.checked)
    result.textContent = `Sound Power = ${computeSoundPower().toFixed(2)} W`;

  else if(areaRadio.checked)
    result.textContent = `Area = ${computeArea().toFixed(2)} m²`;
})

// calculation

function computeSoundIntensity() {
  return Number(soundPower.value) / Number(area.value);
}

function computeSoundPower() {
  return Number(soundIntensity.value) * Number(area.value);
}

function computeArea() {
  return Number(soundPower.value) / Number(soundIntensity.value);
}