let navOpen = false;

function toggleNav() {
  if (navOpen === true) {
    document.getElementById("nav-collapsible").style.height = "0px";
    navOpen = false;
  } else {
    document.getElementById("nav-collapsible").style.height = "185px";
    navOpen = true;
  }
}
