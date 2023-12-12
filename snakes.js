function diceroll(){
  // dice.classList.remove("shake");
  diceValue = (Math.floor(Math.random()*6)+1);
  var myel = document.getElementById("dice");

  if(diceValue == 1){
      myel.classList.remove("dice1");
      myel.classList.add("dice1");
  }
  else if(diceValue == 2){
      myel.classList.remove("dice1");
      myel.classList.add("dice2");
  }
  else if(diceValue == 3){
      myel.classList.remove("dice1");
      myel.classList.add("dice3");
  }
  else if(diceValue == 4){
      myel.classList.remove("dice1");
      myel.classList.add("dice4");
  }
  else if(diceValue == 5){
      myel.classList.remove("dice1");
      myel.classList.add("dice5");
  }
  else if(diceValue == 6){
      myel.classList.remove("dice1");
      myel.classList.add("dice6");
  }
  // document.querySelector(".dice1").setAttribute("src",`dice${diceValue}.png`);},1000);
}
