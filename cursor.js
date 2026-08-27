// leaves a trail of fading pink sparkles behind the mouse as it moves
// (the cursor image itself comes from the cursors-4u stylesheet in index.html)

let lastSparkleTime = 0;

document.addEventListener('mousemove', function(e){
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
