import { images} from "./pics.js";

var toggleButton = document.querySelector('button[name="buttonLeft"]');
// console.log(toggleButton)
var toggleButton2 = document.querySelector('button[name="buttonRight"]');

let imageCurrent = document.getElementById('template');


function getNext(images,currentSource){

    for (let i = 0; i < images.length; i++) {

        if (currentSource == images[i].imageUrl) {
            
            if (i + 1 == images.length) {
                return images[0].imageUrl;           
            }else{
                return images[i+1].imageUrl; 
            }
        }
    }

    // Default value to return if no match is found
    return null;
}

function getLast(images,currentSource){

    // console.log(images)

    for (let i = 0; i < images.length; i++) {

        if (currentSource == images[i].imageUrl) {
            if (i == 0 ) {
                // console.log("here1")
                return images[5].imageUrl; 
            }else{
                // console.log("here2")

                return images[i-1].imageUrl;
            }
        }
    }

    // Default value to return if no match is found
    return null;
}

toggleButton2.addEventListener("click", function() {

    let currentSource ="/" + imageCurrent.src.split('/').slice(3).join('/');
    imageCurrent.src = getNext(images,currentSource);


    

});

toggleButton.addEventListener("click", function() {

    let currentSource ="/" + imageCurrent.src.split('/').slice(3).join('/');
    imageCurrent.src = getLast(images,currentSource);


    

});



