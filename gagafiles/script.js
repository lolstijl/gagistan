const files = document.querySelectorAll('.file');

let animationRunning = false;

files.forEach(file => {
  let menu_open = false;
  let inhoud = file.querySelector(".fileInhoud")

  file.addEventListener('click', function() {
    console.log(file)
    if (menu_open) {
        //menu gaat toe
        file.style.gridTemplateRows = ""
        inhoud.style.paddingTop = ""
        inhoud.style.paddingBottom = ""
        menu_open = false

        console.log(inhoud)
        
    } else {
        //menu gaat open
        file.style.gridTemplateRows = "3rem 1fr"
        inhoud.style.paddingTop = "1rem"
        inhoud.style.paddingBottom = "1rem"
        menu_open = true
    }
    console.log(`menuOpen = ${menu_open}`)
  });
});

