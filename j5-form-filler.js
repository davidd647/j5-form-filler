console.log(`Not malfunction, Stephanie. Number 5 is alive!`);

function j5FormFillInit() {

  // Konami code from w.stoettinger
  // https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html
  //  they have lots of very clear comments, but I thought the naming conventions made it clear enough
  //  so if you want to see the comments, check out the S.O. article!
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };

  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  var konamiCodePosition = 0;

  document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];
    if (key == requiredKey) {
      konamiCodePosition++;

      if (konamiCodePosition == konamiCode.length) {
        activateJ5Alize();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });

  function activateJ5Alize() {
    alert("cheats activated");
    
    const form = document.querySelector('form.j5-form-filler')
    const j5button = document.createElement(`button`)
    j5button.innerHTML = `🤖 Johnny Fivalize 🤖 `
    form.appendChild(j5button)
    
    j5button.addEventListener('click', (e) => {
      e.preventDefault()
      
      const inputs = document.querySelectorAll('form.j5-form-filler input')
      const dropdowns = document.querySelectorAll('form.j5-form-filler select')
      const textareas = document.querySelectorAll('form.j5-form-filler textarea')
      
      inputs.forEach(input => {
        switch(input.type){
          case 'text':
          input.value = `I'm alive!`
          break
          case 'email':
          input.value = `johnny@j5.com`
          break
          case 'tel':
          input.value = `416-555-5555`
          break
          case 'number':
          input.value = `555`
          break
        }
      })
      
      dropdowns.forEach(dropdown => {
        dropdown.options.selectedIndex = 1;
      })
      
      textareas.forEach(textarea => {
        textarea.value = `I'm alive!`;
      })
    })
  }
}

j5FormFillInit()