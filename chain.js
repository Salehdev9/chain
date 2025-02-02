let card1 = document.getElementById("first-card"); 
let card1Icon = document.getElementById("maintenance-icon");
let card1h5 = document.getElementById("card1h5");
let card1p = document.getElementById("card1p");
let card1a = document.getElementById("card1a");


let card2 = document.getElementById("second-card"); 
let card2Icon = document.getElementById("rocket-icon");
let card2h5 = document.getElementById("card2h5");
let card2p = document.getElementById("card2p");
let card2a = document.getElementById("card2a");


let card3 = document.getElementById("third-card"); 
let card3Icon = document.getElementById("workflow-icon");
let card3h5 = document.getElementById("card3h5");
let card3p = document.getElementById("card3p");
let card3a = document.getElementById("card3a");


let card4 = document.getElementById("fourth-card"); 
let card4Icon = document.getElementById("help-icon");
let card4h5 = document.getElementById("card4h5");
let card4p = document.getElementById("card4p");
let card4a = document.getElementById("card4a");



function cardsBg(){
  card1.style.backgroundImage = 'url("./chain-imgs/service-bg.jpg")';
  card1.style.backgroundRepeat = "no-repeat";
  card1.style.backgroundSize = "330px 350px";
  card1Icon.src = "./chain-imgs/service-icon-hover-01.png";
  card1h5.style.color = "white";
  card1p.style.color = "white";
  card1a.style.color = "white";
}

function cardsBg2(){
  card1.style.backgroundImage = "none";
  card1Icon.src = "./chain-imgs/service-icon-01.png";
  card1h5.style.color = "black";
  card1p.style.color = "gray";
  card1a.style.color = "#0A58CA";
}

function cardsBg3(){
  card2.style.backgroundImage = 'url("./chain-imgs/service-bg.jpg")';
  card2.style.backgroundRepeat = "no-repeat";
  // card1.style.backgroundPosition = "-30px 100px";
  card2.style.backgroundSize = "330px 350px";
  card2Icon.src = "./chain-imgs/service-icon-hover-02.png";
  card2h5.style.color = "white";
  card2p.style.color = "white";
  card2a.style.color = "white";
}

function cardsBg4(){
  card2.style.backgroundImage = "none";
  card2Icon.src = "./chain-imgs/service-icon-02.png";
  card2h5.style.color = "black";
  card2p.style.color = "gray";
  card2a.style.color = "#0A58CA";
}

function cardsBg5(){
  card3.style.backgroundImage = 'url("./chain-imgs/service-bg.jpg")';
  card3.style.backgroundRepeat = "no-repeat";
  // card1.style.backgroundPosition = "-30px 100px";
  card3.style.backgroundSize = "330px 350px";
  card3Icon.src = "./chain-imgs/service-icon-hover-03.png";
  card3h5.style.color = "white";
  card3p.style.color = "white";
  card3a.style.color = "white";
}

function cardsBg6(){
  card3.style.backgroundImage = "none";
  card3Icon.src = "./chain-imgs/service-icon-03.png";
  card3h5.style.color = "black";
  card3p.style.color = "gray";
  card3a.style.color = "#0A58CA";
}

function cardsBg7(){
  card4.style.backgroundImage = 'url("./chain-imgs/service-bg.jpg")';
  card4.style.backgroundRepeat = "no-repeat";
  // card1.style.backgroundPosition = "-30px 100px";
  card4.style.backgroundSize = "330px 350px";
  card4Icon.src = "./chain-imgs/service-icon-hover-04.png";
  card4h5.style.color = "white";
  card4p.style.color = "white";
  card4a.style.color = "white";
}

function cardsBg8(){
  card4.style.backgroundImage = "none";
  card4Icon.src = "./chain-imgs/service-icon-04.png";
  card4h5.style.color = "black";
  card4p.style.color = "gray";
  card4a.style.color = "#0A58CA";
}


// -----------------------------------------------------------

// Profile JavaScript Code
let profileContainer1 = document.getElementById("profile-container1");
let profileContainer2 = document.getElementById("profile-container2");
let profileContainer3 = document.getElementById("profile-container3");
let profileContainer4 = document.getElementById("profile-container4");
let profileContainer5 = document.getElementById("profile-container5");



let profileName1 = document.getElementById("profile-name1");
let profileName2 = document.getElementById("profile-name2");
let profileName3 = document.getElementById("profile-name3");
let profileName4 = document.getElementById("profile-name4");
let profileName5 = document.getElementById("profile-name5");


let profileDate1 = document.getElementById("profile-date1");
let profileDate2 = document.getElementById("profile-date2");
let profileDate3 = document.getElementById("profile-date3");
let profileDate4 = document.getElementById("profile-date4");
let profileDate5 = document.getElementById("profile-date5");


let rightBox = document.getElementById("right-container-p");
let customerName = document.getElementById("customer-name");
let customerPost = document.getElementById("customer-post");


let profileRating1 = document.getElementById("profile-rating1");
let profileRating2 = document.getElementById("profile-rating2");
let profileRating3 = document.getElementById("profile-rating3");
let profileRating4 = document.getElementById("profile-rating4");
let profileRating5 = document.getElementById("profile-rating5");



// document.getElementById("profile-container1").style.color = ""

function profileHover0(){
  profileName1.style.color = "rgb(75, 142, 241)";
  profileDate1.style.color = "rgb(75, 142, 241)";
  profileRating1.style.color = "rgb(75, 142, 241)";

  profileName2.style.color = "black";
  profileDate2.style.color = "gray";
  profileRating2.style.color = "black";


  profileName3.style.color = "black";
  profileDate3.style.color = "gray";
  profileRating3.style.color = "black";

  profileName4.style.color = "black";
  profileDate4.style.color = "gray";
  profileRating4.style.color = "black";

  profileName5.style.color = "black";
  profileDate5.style.color = "gray";
  profileRating5.style.color = "black";

  rightBox.innerText = "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”";

  customerName.innerText = "David Martino";
  customerPost.innerText = "CEO of David Company";
}



function profileHover1(){
  profileName2.style.color = "rgb(75, 142, 241)";
  profileDate2.style.color = "rgb(75, 142, 241)";
  profileRating2.style.color = "rgb(75, 142, 241)";

  profileName1.style.color = "black";
  profileDate1.style.color = "gray";
  profileRating1.style.color = "black";


  profileName3.style.color = "black";
  profileDate3.style.color = "gray";
  profileRating3.style.color = "black";

  profileName4.style.color = "black";
  profileDate4.style.color = "gray";
  profileRating4.style.color = "black";

  profileName5.style.color = "black";
  profileDate5.style.color = "gray";
  profileRating5.style.color = "black";

  rightBox.innerText = "“CTO, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”";
  customerName.innerText = "Jake H. Nyo";
  customerPost.innerText = "CTO of Digital Company";
}



function profileHover3(){
  profileName3.style.color = "rgb(75, 142, 241)";
  profileDate3.style.color = "rgb(75, 142, 241)";
  profileRating3.style.color = "rgb(75, 142, 241)";

  profileName1.style.color = "black";
  profileDate1.style.color = "gray";
  profileRating1.style.color = "black";

  profileName2.style.color = "black";
  profileDate2.style.color = "gray";
  profileRating2.style.color = "black";

  profileName4.style.color = "black";
  profileDate4.style.color = "gray";
  profileRating4.style.color = "black";

  profileName5.style.color = "black";
  profileDate5.style.color = "gray";
  profileRating5.style.color = "black";

  rightBox.innerText = "“May, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”";
  customerName.innerText = "May C.";
  customerPost.innerText = "Founder of Catherina Co.";
}



function profileHover5(){
  profileName4.style.color = "rgb(75, 142, 241)";
  profileDate4.style.color = "rgb(75, 142, 241)";
  profileRating4.style.color = "rgb(75, 142, 241)";

  profileName1.style.color = "black";
  profileDate1.style.color = "gray";
  profileRating1.style.color = "black";

  profileName2.style.color = "black";
  profileDate2.style.color = "gray";
  profileRating2.style.color = "black";
  
  profileName3.style.color = "black";
  profileDate3.style.color = "gray";
  profileRating3.style.color = "black";

  profileName5.style.color = "black";
  profileDate5.style.color = "gray";
  profileRating5.style.color = "black";

  rightBox.innerText = "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”";
  customerName.innerText = "Random Staff";
  customerPost.innerText = "Manager, Digital Company";
}



function profileHover7(){
  profileName5.style.color = "rgb(75, 142, 241)";
  profileDate5.style.color = "rgb(75, 142, 241)";
  profileRating5.style.color = "rgb(75, 142, 241)";

  profileName1.style.color = "black";
  profileDate1.style.color = "gray";
  profileRating1.style.color = "black";
  
  profileName2.style.color = "black";
  profileDate2.style.color = "gray";
  profileRating2.style.color = "black";

  profileName3.style.color = "black";
  profileDate3.style.color = "gray";
  profileRating3.style.color = "black";

  profileName4.style.color = "black";
  profileDate4.style.color = "gray";
  profileRating4.style.color = "black";

  rightBox.innerText = "“Mark, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”";
  customerName.innerText = "Mark Am";
  customerPost.innerText = "CTO, Amber Do Company"; 
}


// --------------------------------------------------
// Hamurger Menu Section
let hamburgerMenu = document.getElementById("hamburger-menu-list");

let menuImg = document.getElementById("menu-img");
let closeImg = document.getElementById("close-img");

function hamburgerMenuOn(){
  hamburgerMenu.style.display = "block";
  menuImg.style.display = "none";
  closeImg.style.display = "block";
}

function hamburgerMenuOff(){
  hamburgerMenu.style.display = "none";
  menuImg.style.display = "block";
  closeImg.style.display = "none";
}