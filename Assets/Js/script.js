//objects
import { GoalModel } from "./model.js"
const  gameboard = document.getElementById('gameboard') 
const numCards = 5;
let cardList = GoalModel()

// This helps (match.random)to set the card randomly not by numbers.
cardList.sort(() => Math.random()-0.15);
cardList = cardList.slice(0,numCards)
cardList = cardList.concat(cardList)
cardList.sort(() => Math.random()-0.12);


for(let card of cardList){
     let div = document.createElement('div')
       div.innerText = card.goal
       // gameboard.append(div)
       let img =document.createElement('img')
       img.src= card.picture
       gameboard.append(img)
}


 const card = document.getElementById("gameboard")
 card.addEventListener("click",flipCard);
       function flipCard(){
               card.cardList.toggle("flipCard");
 }

