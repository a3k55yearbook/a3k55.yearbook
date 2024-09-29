const image = document.getElementById('container-img');
const element = document.getElementById('container');
const colorThief = new ColorThief();

colorThief.getColor(image, function(palette) {
  const domColor = palette[0];
  const boxShadowColor = `rgba(${domColor[0]}, ${domColor[1]}, ${domColor[2]}, 0.5)`;
  element.style.boxShadow = `0 4px 8px ${boxShadowColor}`;
});