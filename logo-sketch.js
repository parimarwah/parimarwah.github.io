
// This is the p5.js sketch for the logo animation on the home page

//putting the sketch in a function so that it doesn't interfere with the other sketch on the page

const logoSketch = (p) => {

let imgY = 0
let speed = 0.5;
let img1, img2;
const breakpoint = 600; // breakpoint for responsive design




p.preload = () => {
  img1 = p.loadImage('assets/paricloud.png')
  img2 = p.loadImage('assets/cloudmarwah.png')
  
}
p.setup =() => {
  let canvas = p.createCanvas(p.windowWidth,800); //placeholder height of 800, will be resized in windowResized function





  //this function updates the canvas size when the window is resized
p.windowResized = () => {

  let cloudWidth
  let canvasHeight

  if (p.windowWidth < breakpoint){
    cloudWidth = Math.min(p.windowWidth * 0.85, 1500); // stacked clouds can each take up most of the narrow screen
    let cloudHeight = cloudWidth * (2/3);
    canvasHeight = 20 +cloudHeight + 10 + cloudHeight + 40;
} else {
    cloudWidth = Math.min(p.windowWidth * 0.4, 700); // side-by-side clouds need to be narrower so they don't collide
    let cloudHeight = cloudWidth * (2/3);
    canvasHeight= 60 + cloudHeight + 40
}
p.resizeCanvas(p.windowWidth, canvasHeight);

}
p.windowResized();

}

p.draw =() => {
    if (!img1 || !img2) {
    return; // images aren't loaded yet, skip this frame
  }

  let cloudWidth, cloudHeight
  let x1, y1, x2, y2;

  p.frameRate(100)
  p.clear();

  // Adjust positions based on the breakpoint

  if (p.width < breakpoint){
  cloudWidth = Math.min(p.width * 0.85, 1500); // stacked clouds can each take up most of the narrow screen
  cloudHeight = cloudWidth * (2/3);
  x1 = x2 = p.width/2 - cloudWidth/2;  // centering the clouds horiizontally by setting the x position to half the canvas width minus half the cloud width as image is drawn on right
  y1 = 20;
  y2 = 20 + cloudHeight + 10; // setting the y position of the second cloud to be below the first cloud by adding the height of the first cloud and a small margin
  }

  else{
    cloudWidth = Math.min(p.width * 0.4, 700); // side-by-side clouds need to be narrower so they don't collide
    cloudHeight = cloudWidth * (2/3);
    x1 = p.width/3 -cloudWidth/2; //styling for desktop
    x2 = (p.width *2)/3 - cloudWidth/2;
    y1 = 60;
    y2 = 60;
  }

  
  p.image(img1 , x1, y1 + imgY , cloudWidth, cloudHeight)
  p.image(img2, x2, y2+ imgY, cloudWidth, cloudHeight)



// this makes the clouds move up and down by changing the direction of the speed when the clouds reach a certain height or depth
imgY = imgY + speed


  if (imgY > 30 || imgY < -30) {
    speed = speed * -1
}

}

}


new p5(logoSketch, document.getElementById('logo_sketch'))