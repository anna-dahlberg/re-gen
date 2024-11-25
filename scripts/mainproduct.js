const productsImgs =[
    "assets/images/keyring.png",
    "assets/images/watchBlack.png",
    "assets/images/powerbank.png",
];

const arrowImgs = {
    "leftgrey": "/assets/images/leftArrowGrey.svg",
    "leftblack": "/assets/images/leftArrowBlack.svg",
    "rightgrey": "/assets/images/rightArrowGrey.svg",
    "rightblack": "/assets/images/rightArrowBlack.svg",
};

const buttonImgs = {
    "green": [
        "/assets/images/buttonGreenSmall.svg",
        "/assets/images/buttonGreenBig.svg"
    ],
    "orange": [
        "/assets/images/buttonOrangeSmall.svg",
        "/assets/images/buttonOrangeBig.svg"
    ],
    "Lilac": [
        "/assets/images/buttonLilacSmall.svg",
        "/assets/images/buttonLilacBig.svg"
    ]
}


let start_index = 0;

let mainProductImage = document.getElementById("mainProductImage");
let leftArrow = document.getElementById("leftArrowConfig");
let rightArrow = document.getElementById("rightArrowConfig");

let leftArrowImg = document.getElementById("leftArrowImg");
let rightArrowImg = document.getElementById("rightArrowImg");
mainProductImage.src = productsImgs[start_index];


let btnGreen = document.querySelector(".buttonGreen");
let btnOrange = document.querySelector(".buttonOrange");
let btnLilac = document.querySelector(".buttonLilac");


function updateImage(index) {
    mainProductImage.src = productsImgs[index];

    mainProductImage.style.opacity = 0;

    // After a short delay (to match the transition time), change the image source
    setTimeout(function() {
        mainProductImage.src = productsImgs[index];
        
        // Fade the image back in
        mainProductImage.style.opacity = 1;
    }, 300); // Match this time with the transition duration in CSS
}

function updateButtons(index) {
    if(index == 0) {
        btnGreen.src = "/assets/images/buttonGreenBig.svg";
        btnOrange.src = "/assets/images/buttonOrangeSmall.svg";
        btnLilac.src = "assets/images/buttonLilacSmall.svg";
    } else if(index == 1) {
        btnGreen.src = "/assets/images/buttonGreenSmall.svg";
        btnOrange.src = "/assets/images/buttonOrangeBig.svg";
        btnLilac.src = "assets/images/buttonLilacSmall.svg";
    } else if(index == 2) {
        btnGreen.src = "/assets/images/buttonGreenSmall.svg";
        btnOrange.src = "/assets/images/buttonOrangeSmall.svg";
        btnLilac.src = "assets/images/buttonLilacBig.svg";
    }
}

//updatera baserat på index ist?
leftArrow.addEventListener("click", function(event) {
    event.preventDefault();
    start_index--;
    if(start_index < 0) start_index = 0; //Hindrar gå från lägre än 0
    updateImage(start_index);
    updateButtons(start_index);
    if(start_index == 0) {
        leftArrowImg.src = arrowImgs.leftgrey;
    } else if(start_index > 0) {
        leftArrowImg.src = arrowImgs.leftblack;
        if(start_index < 2) {
            rightArrowImg.src = arrowImgs.rightblack;
        }
    }
});

rightArrow.addEventListener("click", function(event) {
    event.preventDefault();
    start_index++;
    if(start_index > 2) start_index = 2; // Hindrar gå från större än 2
    updateImage(start_index);
    updateButtons(start_index);
    if(start_index == 2) {
        rightArrowImg.src = arrowImgs.rightgrey;
    } else if(start_index < 2) {
        rightArrowImg.src = arrowImgs.rightblack;
        if(start_index > 0) {
            leftArrowImg.src = arrowImgs.leftblack;
        }
    }
});
