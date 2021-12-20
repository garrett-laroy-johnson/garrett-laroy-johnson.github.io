

  function loadDoc(name, dest) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       document.getElementById(dest).innerHTML =
       this.responseText;
     }

}


  xhttp.open("GET", `../html/${name}.html`, true);

  xhttp.send();
}
