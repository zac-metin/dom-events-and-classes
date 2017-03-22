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
    dots[i].addEventListener('dblclick', makeInvisible)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  evt.target.classList.remove('blue')
  evt.target.classList.remove('invisible')
  updateCounts()
}

function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  evt.target.classList.remove('green')
  evt.target.classList.remove('invisible')
  updateCounts()
}
function makeInvisible (evt) {
  evt.target.classList.toggle('invisible')
  evt.target.classList.remove('blue')
  evt.target.classList.remove('green')
  updateCounts()
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }

var dtAry = document.getElementsByClassName('board')[0].children;

  for (i=0; i < dtAry.length;i++){
    if (dtAry[i].classList.contains('blue'))
    {
      totals.blue ++;
    }
    else if (dtAry[i].classList.contains('green'))
    {
      //dtAry[i].classList.remove('blue')
      //dtAry[i].classList.remove('invisible')
      totals.green ++;
    }
    else if (dtAry[i].classList.contains('invisible'))
    {
      //dtAry[i].classList.remove('blue')
      //dtAry[i].classList.remove('green')
      totals.invisible ++;
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
