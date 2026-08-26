// replaces the mouse pointer with a little pink sparkle, and leaves a
// trail of fading sparkles behind it as you move

let cursorGlow = document.createElement('div');
cursorGlow.id = 'cursor-glow';
cursorGlow.textContent = '✨';
document.body.appendChild(cursorGlow);

let lastSparkleTime = 0;

document.addEventListener('mousemove', function(e){
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';

  // only spawn a new trail sparkle every 60ms, otherwise mousemove
  // fires so often it would create hundreds of elements per second
  let now = Date.now();
  if (now - lastSparkleTime > 60){
    lastSparkleTime = now;

    let sparkle = document.createElement('div');
    sparkle.className = 'sparkle-trail';
    sparkle.textContent = '✦';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    document.body.appendChild(sparkle);

    // remove the sparkle once its fade-out animation finishes
    setTimeout(function(){
      sparkle.remove();
    }, 600);
  }
});
