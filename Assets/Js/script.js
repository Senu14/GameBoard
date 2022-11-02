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
      

}

cardGenerator();
















