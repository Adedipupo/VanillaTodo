var input = document.getElementById("one");
var button = document.getElementById("two");
var ul = document.querySelector("ul");

var inputElement = function(){
   if (input.value.length > 0 ){
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(input.value)); 
      ul.appendChild(li);
      input.value = "";
 }
}

var enterKey = function(event) {
   console.log("event.which")
   if (input.value.length > 0 && event.keyCode === 13 ){
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(input.value)); 
      ul.appendChild(li);
      input.value = "";
     } 
}

button.addEventListener("click", inputElement());

input.addEventListener("keypress", enterKey());

 // Create a "close" button and append it to each list item
var closeButton = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  closeButton[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
