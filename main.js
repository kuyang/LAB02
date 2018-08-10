let myName = prompt("What\'s your name?");
console.log("What\'s your name?  " + myName);
let elName = document.getElementById('name');
elName.innerHTML = myName;

let myDMV = confirm("Do you live in the DMV?");
console.log("Do you live in the DMV?  " + myDMV);
let elDMV = document.getElementById('DMV');
elDMV.innerHTML = myDMV;

let myCity = prompt("What city do you live in?");
console.log("What city do you live in?  " + myCity);
let elCity = document.getElementById('city');
elCity.innerHTML = myCity;

let myYears = prompt("How many years have you lived there?")
console.log("How many years have you lived there?  " + myYears);
let elYears = document.getElementById('years');
elYears.innerHTML = myYears;





if(myDMV === true) {
    let hello = ('Hello ' + myName + '!  DMV is the best region to live in. Especially when you have lived in ' + myCity + " for " + myYears + " years.");
    alert(hello);
    console.log(hello);
} else {
    alert("Hello " + myName + "! I've heard of " + myCity + ". Hmmmmmm you really should consider moving to DMV area. After " + myYears + " living in " + myCity + "it is TIME for a change!");
    
}

//**section 2**/

let myMovie = confirm("Have you watched a movie lately?");
console.log("Have you watched a movie lately?  " + myMovie);
let elMovie = document.getElementById('movie');
elMovie.innerHTML = myMovie;

if (myMovie === true) {
    let myLike = confirm("Did you like the movie?");
    console.log("Did you like the movie?  " + myLike);
    let elLike = document.getElementById('like');
    elLike.innerHTML = myLike;
    
    let myType = prompt("What type of genre was it? (Horror, Comedy, Drama, ect.)  ");
    console.log("What type of genre was it? (Horror, Comedy, Drama, ect.)  " + myType);
    let elType = document.getElementById('type');
    elType.innerHTML = myType;
    
    let myWhat = prompt("Which movie did you see?");
    console.log("Which movie did you see?  " + myWhat);
    let elwhat = document.getElementById('whatMovie');
    elwhat.innerHTML = myWhat;
    
    let myRecommend = confirm("Would you recommend this movie to friends and family?");
    console.log("Would you recommend this movie to friends and family?  " + myRecommend);
    let elRecommend = document.getElementById('recommend');
    elRecommend.innerHTML = myRecommend;

    if (myRecommend === true){
        alert("Great! I heard " + myWhat + " is an amazing movie.  I love " + myType + " movies! I will definitly have to checkout " + myWhat + ".");
    } else {
        alert("Awwww that sucks that you didn't like the movie " + myWhat + " .");
    }       
  
    console.log(elMovie);
    console.log(elLike);
    console.log(elType);
    console.log(elwhat);
    console.log(elRecommend);
    
} else {
    alert(myName + " you should check out some new movies. There are many good ones out reight now.");
    console.log(myName + " really needs to get out and watch some movies.")
} 



console.log(elName);
console.log(elCity);
console.log(elYears);
