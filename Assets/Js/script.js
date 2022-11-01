// Grap a cuple og things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 4;

// Link text
playerLivesCount.textContent = playerLives;

// Generate the data
const getData = () => [
       {
       title: "Afskaf fattigdom",
       goal: 1,
       picture:'/Assets/images/1.jpg'
       },
       {
       title: "stop slut",
       goal: 2,
       picture:'/Assets/images/2.jpg'
       },
       {
       title: "sundhed og trivsel",
       goal: 3,
       picture:'/Assets/images/3.jpg'
       },
       {
       title: " KVALITETSUDDANNELSE",
       goal: 4,
       picture:'/Assets/images/4.jpg'
       },
       {
       title: "LIGESTILLING MELLEM KØNNENE",
       goal: 5,
       picture:'/Assets/images/5.jpg'
       },
       {
       title: "RENT VAND OG SANITET",
       goal: 6,
       picture:'/Assets/images/6.jpg'
       },
       {
       title: "BÆREDYGTIG ENERGI",
       goal: 7,
       picture:'/Assets/images/7.jpg'
       },
       {
       title: "ANSTÆNDIGE JOBS OG ØKONOMISK VÆKST",
       goal: 8,
       picture:'/Assets/images/8.jpg'
       },
       {
       title: "Afskaf fattigdom",
       goal: 1,
       picture:'/Assets/images/1.jpg'
       },
       {
       title: "stop slut",
       goal: 2,
       picture:'/Assets/images/2.jpg'
       },
       {
       title: "sundhed og trivsel",
       goal: 3,
       picture:'/Assets/images/3.jpg'
       },
       {
       title: " KVALITETSUDDANNELSE",
       goal: 4,
       picture:'/Assets/images/4.jpg'
       },
       {
       title: "LIGESTILLING MELLEM KØNNENE",
       goal: 5,
       picture:'/Assets/images/5.jpg'
       },
       {
       title: "RENT VAND OG SANITET",
       goal: 6,
       picture:'/Assets/images/6.jpg'
       },
       {
       title: "BÆREDYGTIG ENERGI",
       goal: 7,
       picture:'/Assets/images/7.jpg'
       },
       {
       title: "ANSTÆNDIGE JOBS OG ØKONOMISK VÆKST",
       goal: 8,
       picture:'/Assets/images/8.jpg'
       },
];

// Randomize
const Randomize = () => {
       const cardData = getData();
       cardData.sort(() => Math.random() -0.5);
       return cardData;
       
};

// Card Generator Function
const cardGenerator = () => {
       const cardData = Randomize();
//  Generate the HTML
const card = document.querySelectorAll(".card");
cardData.forEach(item =>{
   const card = document.createElement('div');
   const face = document.createElement('img');
   const back = document.createElement('div');
   card.classList = "card";
   face.classList = "face";
   back.classList = "back";
//    Attach the info to the cards
face.src = item.picture;
card.setAttribute("name",item.title);
//    Attach the cards to the section
section.appendChild(card);
card.appendChild(face);
card.appendChild(back);

card.addEventListener("click", (e) =>{
       card.classList.toggle("toggleCard");
       checkCards(e);
});

});

};

// Check cards
const checkCards= (e) => {
       console.log(e);
       const clickedCard = e.target;
       clickedCard.classList.add("flipped");
       const flippedCards = document.querySelectorAll('.flipped');
      
// Logic statment
      if (flippedCards.length === 2){
      if (flippedCards[0].getAttribute('name')=== 
          flippedCards[1].getAttribute('name')
       ) {
         console.log('match');
         flippedCards.forEach(card => {
         card.classList.remove("flipped");
         card.style.pointerEvents = "none";
         });
       }else{
              console.log("wrong");
              flippedCards.forEach((card) => {
              card.classList.remove("flipped");
              setTimeout(() => card.classList.remove("toggleCard"), 1000); 
              });
// This will help:-When the click is wrong to update the UI
              playerLives--;
              playerLivesCount.textContent = playerLives;
              if (playerLives === 0) {
              restart();
              }
              }
       }
};
// Restart function
const restart = () => {
       let cardData = Randomize();
       let faces = document.querySelectorAll(".face");
       let cards = document.querySelectorAll("cards");
       cardData.forEach((item,index) => {
         cards[index].classList.remove('toggleCard');
       });
       // playerLives = 4;
       // playerLivesCount.textContent = playerLives;

}

cardGenerator();





// [{imgSrc:'./Assets/images/1.jpg'}]

// images.src = imgSrc












// import { GoalModel } from "./model.js";
// const  gameboard = document.getElementById('gameboard') 
// const numCards = 6;
// let cardList = GoalModel()

// // This helps (match.random)to set the card randomly not by numbers.
// cardList.sort(() => Math.random()-0.15);
// cardList = cardList.slice(0,numCards);
// cardList = cardList.concat(cardList);
// cardList.sort(() => Math.random()-0.12);


// for(let card of cardList){
//      let div = document.createElement('div')
//        div.innerText = card.goal
//        // gameboard.append(div)
//        let img =document.createElement('img')
//        img.src= card.picture
//        gameboard.append(img)
// };


//  const card = document.getElementById("gameboard")
//  card.addEventListener("click",flipCard);
//        function flipCard(){
//                card.cardList.toggle("flipCard");
//  }




// const gameContainer = document.querySelector("game-container");
// let cards;
// let firstCard = false;
// let secondCard = false;

// //card array
// const items = [
       
//        {
//         title: "Afskaf fattigdom",
//         goal: 1,
//         picture:'/Assets/images/1.jpg'
//         },
//         {
//         title: "stop slut",
//         goal: 2,
//         picture:'/Assets/images/2.jpg'
//         },
//         {
//         title: "sundhed og trivsel",
//         goal: 3,
//         picture:'/Assets/images/3.jpg'
//         },
//         {
//         title: " KVALITETSUDDANNELSE",
//         goal: 4,
//         picture:'/Assets/images/4.jpg'
//         },
//         {
//         title: "LIGESTILLING MELLEM KØNNENE",
//         goal: 5,
//         picture:'/Assets/images/5.jpg'
//         },
//         {
//         title: "RENT VAND OG SANITET",
//         goal: 6,
//         picture:'/Assets/images/6.jpg'
//         },
//         {
//         title: "BÆREDYGTIG ENERGI",
//         goal: 7,
//         picture:'/Assets/images/7.jpg'
//         },
//         {
//         title: "ANSTÆNDIGE JOBS OG ØKONOMISK VÆKST",
//         goal: 8,
//         picture:'/Assets/images/8.jpg'
//         },
//         {
//         title: " INDUSTRI, INNOVATION OG INFRASTRUKTUR",
//         goal: 9,
//         picture:'/Assets/images/9.jpg'
//         },
//         {
//         title: "MINDRE ULIGHED",
//         goal: 10,
//         picture:'/Assets/images/10.jpg'
//         },
//         {
//         title: "BÆREDYGTIGE BYER OG LOKALSAMFUND",
//         goal: 11,
//         picture:'/Assets/images/11.jpg'
//         },
//         {
//         title: "ANSVARLIGT FORBRUG OG PRODUKTION",
//         goal: 12,
//         picture:'/Assets/images/12.jpg'
//         },
//         {
//         title: "KLIMAINDSATS",
//         goal: 13,
//         picture:'/Assets/images/13.jpg'
//         },
//         {
//         title: "LIVET I HAVET",
//         goal: 14,
//         picture:'/Assets/images/14.jpg'
//         },
//         {
//         title: "LIVET PÅ LAND",
//         goal: 15,
//         picture:'/Assets/images/15.jpg'
//         },
//         {
//         title: "FRED, RETFÆRDIGHED OG STÆRKE INSTITUTIONER",
//         goal: 16,
//         picture:'/Assets/images/16.jpg'
//         },
//         {
//         title: "PARTNERSKABER FOR HANDLING",
//         goal: 17,
//         picture:'/Assets/images/17.jpg'
//         }
 
// ];

// //pick random card from array of cards
// const generateRandom = (size = 4) => {
//        //temporary storage of our cards
//        let tempArray = [...items];
//        //initialize carValues array
//        let cardValues = [];
//        //size should be 5x4 matrix
//        size = (size * size) / 2;
//        //Random cards selection
//        for(let i = 0; i < size; i++){
//               const randomIndex = Math.floor(Math.random() * tempArray.length);
//               cardValues.push(tempArray[randomIndex]);
//               tempArray.splice(randomIndex, 1);
//        }
//        return cardValues;
// };

// const matrixGenerator = (cardValues, size = 4) =>{
//        gameContainer.inner = "";
//        cardValues = [...cardValues, ...cardValues];
//        //simple shuffle
//        cardValues.sort(() => Math.random() - 0.5);
//        for(let i = 0; i < size*size; i++){
//               gameContainer.innerHTML +=`
//               <div class ="card-container" data-card-value="${cardValues[i].title}">
//               <div class="card-before">?</div>
//               <div class="card-after">
//               <img src="${cardValues[i].picture}" class="image"/>
//               </div>
//               `
//        }
// };
