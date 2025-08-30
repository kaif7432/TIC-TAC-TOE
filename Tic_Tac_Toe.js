let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset") ;
let turnO = true ;
  const winningPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] ;
   let flag = false ;
 boxes.forEach((box)=>{
          box.addEventListener("click", ()=>{
            if(turnO){
                box.innerText = "O";
                turnO = false ;
            }
            else {
                box.innerText = "X"; 
                turnO =true;
            }
            box.disabled = true ;
            checkWinner() ;
            if(flag === true ){
                  boxes.forEach( (box) => {
                       box.disabled =  true ;

                });
            }
          });
 });
   const checkWinner = ()=>{
        for(let pattern of winningPattern){
             let pos1 = boxes[pattern[0]].innerText ;
             let pos2 = boxes[pattern[1]].innerText ;
             let pos3 = boxes[pattern[2]].innerText ;
             if(pos1 !=="" && pos2!=="" && pos3!=""){
                if(pos1===pos2 && pos2===pos3){
                     res = document.createElement("h2");
                     document.getElementsByClassName("game")[0].append(res) ;
                      if(pos1==="O"){
                         res.innerText = " congratulations, winner is player 1 " ;
                      }
                      else {
                        res.innerText= "congratulations, winner is player 2 " ;
                      }
                       flag = true ;
                }
             }
             
        }
   }
    resetbtn.onclick = ()=>{
         location.reload();
    }
  