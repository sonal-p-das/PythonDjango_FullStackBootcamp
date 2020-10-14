var cells = document.querySelectorAll("td");
var btnRestart = document.getElementById("btnRestart");

function changeContent(){

  if(this.textContent === ""){
    this.textContent = "X";
  }else if(this.textContent === "X"){
    this.textContent = "O";
  }else if(this.textContent === "O"){
    this.textContent = "";
  }

}

function refresh(){
  for(var i=0; i<cells.length; i++){
    cells[i].textContent = "";
  }
}

for(var i=0; i<cells.length; i++){
  cells[i].addEventListener("click",changeContent);
}

btnRestart.addEventListener("click",refresh);
