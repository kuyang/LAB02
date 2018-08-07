
// let myDMV = confirm("Do you live in the DMV?");
// console.log("Do you live in the DMV? " + myDMV);

// let myCity = prompt("What city do you live in?");
// console.log("What city do you live in? " + myCity);

// let myYears = prompt("How many years have you lived there?")
// console.log("How many years have you lived there? " + myYears);

// let myMovieFav = prompt("What is your all time favorite movie?");
// console.log("What is your all time favorite movie? " + myMovieFav);

// alert("Would you recommend watching " + myMovieFav + " to your friends?")


// if(myDMV === true) {
    //     alert('Hello ' + myName + '!  DMV is the best region. Especially when you lived in ' + myCity + " " + myYears + " years.")
    // } else {
        //     alert("Hello " + myName + "! I've heard of " + myCity + ". How do like living in " +myCity + " after " +myYears+ " years?")
        
        // }
        //section 2 */
       
// Creating a function to initiate the program       

//testing

function movieGame(){
            
    let myName = prompt('What\'s your name?');
    console.log('What\'s your name?  ' + myName);

    let myMovie = confirm("Have you watched a movie lately?");
    console.log("Have you watched a movie lately? " + myMovie);

    if (myMovie === true) {
        let myMovieLike = confirm("Did you like the movie?");
        console.log("Did you like the movie? " + myMovieLike);
        
        let myMovieType = prompt("What type of movie was it?");
        console.log("What type of movie was it? " + myMovieType);
        let myWhatMovie = prompt("Which movie did you see?");
        console.log("What type of movie was it? " + myWhatMovie);
        let myMovieRecommend = confirm("Would you recommend this movie?");
        console.log("Would you recommend this movie? " + myMovieRecommend);
        if (myMovieRecommend === true){
            alert("Great! I heard " + myWhatMovie + " is a great " + myMovieType + " movie.")
        } else {
            alert("Awwww that sucks that you didn't like the movie " + myWhatMovie + " .")
        }
        
    } else {
        alert("I guess " + myName + "you should check out some new movies.")
        
    }




    let elName = document.getElementById('name');
    elName.innerHTML = myName

    // let elDMV = document.getElementById('DMV');
    // elDMV.innerHTML = myDMV

    let elCity = document.getElementById('city')
    elCity.innerHTML = myCity

    let elYears = document.getElementById('years')
    elYears.innerHTML = myYears



    console.log(elName);
    console.log(elCity);
    console.log(elYears);


}
