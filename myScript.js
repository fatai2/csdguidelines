function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNav2() {
  document.getElementById("mySidenav2").style.width = "250px";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}

function myFunction() {
  			var input, filter, ul, li, a, i;
  			input = document.getElementById("mySearch");
  			filter = input.value.toUpperCase();
  			ul = document.getElementById("myMenu");
  			li = ul.getElementsByTagName("li");
  			for (i = 0; i < li.length; i++) {
    				a = li[i].getElementsByTagName("a")[0];
    				if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      					li[i].style.display = "";
    				} else {
      					li[i].style.display = "none";
    				}
  			}
		}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
		function scrollFunction() {
		  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("myBtn").style.display = "block";
		  } else {
			document.getElementById("myBtn").style.display = "none";
		  }
		}
		// When the user clicks on the button, scroll to the top of the document
		function topFunction() {
		  document.body.scrollTop = 0; // For Safari
		  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}
