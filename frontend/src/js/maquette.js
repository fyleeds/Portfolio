import { images} from "./pics";

var toggleButton = document.querySelectorAll('div[name="projetAlsace"]');
var toggleButton2 = document.querySelectorAll('div[name="projetGroupie"]');


// you click one time
toggleButton.forEach(button=>{
    button.addEventListener("click", function() {

        

        //display style 1sec
        AlsaceDetailed.style.display === "flex"? (AlsaceDetailed.style.display = "none",Alsace.style.display = "flex"): (AlsaceDetailed.style.display = "flex",Alsace.style.display = "none");
        console.log(AlsaceDetailed.style.display=== "flex")

    });
});

// you click one time
toggleButton2.forEach(button=>{
    button.addEventListener("click", function() {

        

        //display style 1sec
        GroupieDetailed.style.display === "flex"? (GroupieDetailed.style.display = "none",Groupie.style.display = "flex"): (GroupieDetailed.style.display = "flex",Groupie.style.display = "none");
        console.log(GroupieDetailed.style.display=== "flex")

    });
});

// you click one time
toggleButton3.forEach(button=>{
    button.addEventListener("click", function() {

        

        //display style 1sec
        GameDetailed.style.display === "flex"? (GameDetailed.style.display = "none",Game.style.display = "flex"): (GameDetailed.style.display = "flex",Game.style.display = "none");
        console.log(GameDetailed.style.display=== "flex")

    });
});

// you click one time
toggleButton4.forEach(button=>{
    button.addEventListener("click", function() {

        

        //display style 1sec
        LoginDetailed.style.display === "flex"? (LoginDetailed.style.display = "none",Login.style.display = "flex"): (LoginDetailed.style.display = "flex",Login.style.display = "none");
        console.log(LoginDetailed.style.display=== "flex")

    });
});



