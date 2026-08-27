let imgs=[]
let vid

function preload(){
	files =['IMG1.jpeg',
           'IMG2.jpeg',
            'IMG3.jpeg',
           'IMG4.jpeg',
           'IMG5.jpeg',
           'IMG6.jpeg',
           'IMG7.jpeg',
           'IMG8.jpeg',
           'IMG9.jpeg',
           'IMG10.jpeg',
           'IMG11.jpeg']
  imgs = files.map(f => loadImage(f)) ;
  vid = createVideo('vid1.mp4');
  // mobile browsers only allow a video to autoplay if it's actually
  // muted (not just volume 0) and marked playsinline, or they block it
  vid.elt.muted = true;
  vid.elt.setAttribute('muted', '');
  vid.elt.setAttribute('playsinline', '');
  vid.elt.setAttribute('webkit-playsinline', '');
  vid.volume(0);
  vid.loop();
  vid.hide();
}

function setup() {
	let canvas = createCanvas(1500, 1000);
  canvas.parent('p5_sketch'); 

	
   
    
}

function draw() {

    frameRate(4)

    
    image(vid,0,0,width,height);
    
    for (let i=0; i<5; i++){
      let img = random(imgs);
      tint(255,190);
      image(img, random(2000), random(1500), 120, 200)
      noTint();
    
      
      noTint();
      stroke('black')
      fill('lightblue');
      textSize(20);
      text('i choose you'
           , random(800), random(600));

 
      
    }
}

