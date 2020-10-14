var cells = document.querySelectorAll("td");
var btnRestart = document.getElementById("btnRestart");

function changeContent(){

  if(this.innerHTML === ""){
    this.innerHTML = "X";
  }else if(this.innerHTML === "X"){
    this.innerHTML = "O";
  }else if(this.innerHTML === "O"){
    this.innerHTML = "";
  }

}

function refresh(){
  for(var i=0; i<cells.length; i++){
    cells[i].innerHTML = "";
  }
}

for(var i=0; i<cells.length; i++){
  cells[i].addEventListener("click",changeContent);
}

btnRestart.addEventListener("click",refresh);
