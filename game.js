// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}
function hide (evt) {
  evt.target.classList.toggle('invisble')
}

var dotarray = new Array ();
for (y=0; y<10;y++)
{
dotarray[y] = document.getElementsByClassName('board.children'[y]);
}
console.log(dotarray[0])

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  for (i=0; i<10;i++)
  {
    if (dotarray[i].classList.contains='blue')
    {
      totals.blue ++;
      alert("Hello!");
    }
    else if (dotarray[i].classList.contains='green')
    {
    totals.green ++;
    }
    else if (dotarray[i].classList.contains="invisible"){
      totals.invisible ++;
    }
    else {
      alert('Error!');
    }
  }


  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
