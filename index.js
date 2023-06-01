var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
  
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").classList.remove("hidden");
    } else {
        document.getElementById("header").classList.add("hidden");
    }
  
    prevScrollPos = currentScrollPos;
}
