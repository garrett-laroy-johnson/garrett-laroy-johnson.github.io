

  function loadDoc(name) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       document.getElementById("main-space").innerHTML =
       this.responseText;
     }

}


  xhttp.open("GET", `../${name}.html`, true);

  xhttp.send();
}
