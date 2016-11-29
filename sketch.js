var colorList = ['#65cbcd',
  '#d9e9e9',
  '#f68a8a',
  '#e50543',
  '#72a266',
  '#3c6b59',
  '#e2a03f',
  '#b35b1c',
  
];

function setup() {
  createCanvas(800, 600);
  noStroke();
  for (var x = 0; x < 800; x += 25) {
    for (var y = 0; y < 600; y += 40) {

      if (random() < 0.2) {
        fill(color('#65cbcd'));
      } else {
        fill(color(random(colorList)));
      }
      quad(x, y, x + 25, y, x + 25, y + 40, x, y + 40);
    }
  }
  for (var x = 0; x < 800; x += 25) {
    for (var y = 0; y < 600; y += 40) {

      if (random() < 0.2) {
        fill(color('#f68a8a'));
      } else {
        fill(color(random(colorList)));
      }
      triangle(x, y, x, y + 40, x + 25, y);
    }
  }
  for (var x = 25; x < 800; x += 25) {
    for (var y = 0; y < 600; y += 40) {

      if (random() < 0.2) {
        fill(color('#e2a03f'));
      } else {
        fill(color(random(colorList)));
      }
      triangle(x, y, x, y + 40, x - 25, y);
    }
  }
}