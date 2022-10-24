//objects
import {GoalModel} from "/model.js"
const  gameboard=document.getElementById("gameboard") 
const numCards= 5;
const cardList= GoalModel()
cardList.sort(() => Match.random()-0.5);
cardList.cardList.slice(0, numCards)
cardList.cardList.concat(cardList)
cardList.sort(() => Match.random()-0.5);


for(let card of cardList){
       let div = document.createElement("div")
       div.innerText = cardgoal
       gameboard.append(div)
}