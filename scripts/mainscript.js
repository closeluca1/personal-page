function viewPort(){
    if (window.width < "720px"){
      console.log("true");
    }else if (window.width > "720px"){
      console.log("false");
    };
}

let urlAtual = window.location.href;
let newWidth = "";
window.addEventListener('resize', function(event){
  newWidth = this.window.innerWidth;
  console.log(newWidth);
  if (newWidth < 720 && window.location.href != "https://closeluca1.github.io/personal-page/mb-view.html" ){
    window.location.href = "../mb-view.html";
    }else if (newWidth > 720 && window.location.href != "https://closeluca1.github.io/personal-page/pc-view.html"){
      window.location.href = "../pc-view.html";
    }
});

console.log(urlAtual);



window.onload = function(e){ 
  if (window.location.href === "https://closeluca1.github.io/personal-page/" && newWidth < 720){
    window.location.href = "https://closeluca1.github.io/personal-page/mb-view.html";
  }else if (window.location.href === "https://closeluca1.github.io/personal-page/" && newWidth > 720){
    window.location.href = "https://closeluca1.github.io/personal-page/pc-view.html";
  }
    
  
}


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
      document.getElementById("myName").style.color = "#fcfcfc";
      document.getElementById("social").style.display = "flex";
      
    }
}

