// const input = document.getElementsByTagName('input');


const welcome = document.getElementById('welcome');
const generator = document.getElementById('generator');
const head = document.getElementById('keycode');
const boxes = document.getElementsByClassName('box');


// function keycode(event) {
//     var key = event.key;
//     // var location = event.location;
//     var which = event.which;
//     var code = event.code;
//     head.textContent = which;
//     document.getElementById("eventKey").innerHTML= key;
//     // document.getElementById("eventLocation").innerHTML= location;
//     document.getElementById("eventWhich").innerHTML= which;
//     document.getElementById("eventCode").innerHTML= code;
//     generator.classList.remove("show");
//     welcome.remove()
// }


document.addEventListener ("keyup", (event) => {
    var key = event.key;
    // var location = event.location;
    var which = event.which;
    var code = event.code;
    head.textContent = which;
    document.getElementById("eventKey").innerHTML= key;
    // document.getElementById("eventLocation").innerHTML= location;
    document.getElementById("eventWhich").innerHTML= which;
    document.getElementById("eventCode").innerHTML= code;
    generator.classList.remove("show");
    welcome.remove()

    if (event.key == "h") {
        head.style.visibility = "hidden";
    } else if (event.key == "s"){
        head.style.visibility = "visible";
    } else if (event.key == "y"){
        head.animate([
            // keyframes
            { transform: 'translateY(200px)' }, 
            { transform: 'translateY(-300px)' }
          ], { 
            // timing options
            duration: 1000,
            iterations: 1
          });
    
        
    } else if (event.key == "n"){
        for (let i = 0; i < boxes.length ; i++){
            let box = boxes[i];
            box.style.animationIterationCount  = "infinite";
        }
    }  else if (event.key == "t"){
        for (let i = 0; i < boxes.length ; i++){
            let box = boxes[i];
            box.style.animationIterationCount  = "0";
        }
    }
        
});

// generator.classList.toggle("show");

