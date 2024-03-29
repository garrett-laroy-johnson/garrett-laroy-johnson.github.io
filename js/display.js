let splash = 0;

function hookToProcessing() {
  remove();
  splash += 1;
}

function loadDoc(name, dest, type) {
  if (splash < 1) {
    hookToProcessing();
  }
  if (dest === "main-space") {
    window.scrollTo(0, 0);
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(dest).innerHTML = this.responseText;
    }
  }
  xhttp.open("GET", `../html/${name}.html`, true);
  xhttp.send();
  if (window.innerWidth < 768) {
    document.getElementsByClassName("sidebar-toggle")[0].style.left="-250px";
  }
}