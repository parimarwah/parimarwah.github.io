// close any dialog when you click outside of it (on the backdrop)

let allDialogs = document.querySelectorAll('.project-modal');

allDialogs.forEach(function(dialog){
  dialog.addEventListener('click', function(e){
    if (e.target === dialog) {
      dialog.close();
    }
  });
});

let thoughts = [
  "i've been nervous about grad school starting, which is why i've been trying to teach myself how to code" ,
  "i miss home. i want to go back to visit so bad. my pink bedroom beckons me",
  "been watching a lot of action movies and kdramas. feeling a deep desire to learn mixed martial arts...",
  "is anyone else up feeling inexplicable sadness with no discernable source..."
]
  

document.getElementById('ticker-text').textContent = thoughts.join('               ☆               ')
