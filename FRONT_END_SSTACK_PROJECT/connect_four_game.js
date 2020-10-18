var nameOne = prompt("Player One: Enter your name, you will be Blue");
var nameTwo = prompt("Player Two: Enter your name, you will be Red");
$("#lblPlayer").text(nameOne + ": it is your turn, please pick a column to drop your blue chip");

var isPlayerOne = true;
var isPlayerTwo = false;
var topCells = document.querySelectorAll(".topCell");

function pushChip(){
  //alert($(this).index());
  var colIndex = $(this).index();

  for(var i=5; i>0;i--){

    //Check which cell in the column needs change in color
    var currentBgc = $('table tr').eq(i).find('td').eq(colIndex).css("background-color");
    if(currentBgc === "rgb(128, 128, 128)"){
      //then update the bgc based on player's color
      if(isPlayerOne){
        $('table tr').eq(i).find('td').eq(colIndex).css("background-color","DeepSkyBlue");
        $("#lblPlayer").text(nameTwo + ": it is your turn, please pick a column to drop your red chip");
        isPlayerOne = false;
        isPlayerTwo = true;

        //check for streak of four chips
        var streakCount = 0;
        if(colIndex>=3){
          var idx = colIndex;
          while(idx>=0){
            if($('table tr').eq(i).find('td').eq(idx).css("background-color") === "rgb(0, 191, 255)"){
              streakCount++;
            }
            if(streakCount === 4){
              $("#lblPlayer").text(nameOne + " has won! Refresh your browser to play again!");
              break;
            }
            idx--;
          }
        }

      }else if(isPlayerTwo){
        $('table tr').eq(i).find('td').eq(colIndex).css("background-color","LightCoral");
        $("#lblPlayer").text(nameOne + ": it is your turn, please pick a column to drop your blue chip");
        isPlayerTwo = false;
        isPlayerOne = true;

        //check for streak of four chips
        var streakCount = 0;
        if(colIndex>=3){
          var idx = colIndex;
          while(idx>=0){
            if($('table tr').eq(i).find('td').eq(idx).css("background-color") === "rgb(240, 128, 128)"){
              streakCount++;
            }
            if(streakCount === 4){
              $("#lblPlayer").text(nameTwo + " has won! Refresh your browser to play again!");
              break;
            }
            idx--;
          }
        }

      }//End of player check if condn

      break;
    }//End of bgc check condn
  }
}

for(var i=0;i<topCells.length;i++){
  topCells[i].addEventListener("click",pushChip);
}
