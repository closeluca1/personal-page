function AbrirPage(){
    let x = document.getElementById("single-page-contato");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    };
};

function AbrirPageItem(){
  let x = document.getElementById("single-page-item");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  };
};