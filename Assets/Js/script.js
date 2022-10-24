//objects
import { GoalModel } from "/model.js"
const  gameboard=document.getElementById('gameboard') 
const numCards= 5;
const cardList= GoalModel()
cardList.sort(() => Math.random()-0.5);
cardList=cardList.slice(0,numCards)
cardList=cardList.concat(cardList)
cardList.sort(() => Math.random()-0.5);


for(let card of cardList){
       let div = document.createElement('div')
       div.innerText = card.goal
       gameboard.append(div)
}
console.log(GoalModel())