function menuOpen() {
    let x = document.getElementById("menu-item");
    if (x.style.height == "100px") {
      x.style.height = "50px";
      document.getElementById("area-me").style.marginTop = "0";
      document.getElementById("myName").style.color = "#222";
      document.getElementById("social").style.display = "none";
    } else {
      x.style.height = "100px";
      x.style.justifyContent = "initial";
      document.getElementById("area-me").style.marginTop = ".5rem";
      document.getElementById("myName").style.color = "#fff";
      document.getElementById("social").style.display = "flex";
      
    }
}
