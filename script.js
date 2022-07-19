
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
    //document.getElementById('msg').innerHTML =   "You dropped the " + data + " in the " + ev.target.id + "." + "classname: ";
    //correct
    let correctAnswer = "You dropped the " + data + " in the " + ev.target.id + "." + "Correct!";
    let wrongAnswer =  "You dropped the " + data + " in the " + ev.target.id + "." + "Wrong! Try Again.";
    let draggedItem = data;
    let chosenDestination = ev.target.id; 

    switch(draggedItem) {
        case 'cardboard box':
        case 'plastic bottle':
        case 'plastic bag':
        case 'soda cans':
            if (chosenDestination == "recycleBin"){
              document.getElementById('msg').innerHTML = correctAnswer; 
            }
            else{
              document.getElementById('msg').innerHTML = wrongAnswer;
            }
          break;
        case "bananas":
        case "paper plate":
            if (chosenDestination == "trashCan"){
              document.getElementById('msg').innerHTML = correctAnswer; 
            }
            else{
              document.getElementById('msg').innerHTML = wrongAnswer;
            }
         break;
        default:
         
      }
     
  }