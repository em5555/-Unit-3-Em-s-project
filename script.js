/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening = document.querySelector(".story-opening")
let optionOne = document.querySelector(".option-one")
let optionOneScreen = document.querySelector(".option-one-screen")
let oneOne = document.querySelector(".one-one")



// single line comment 

/*multi line comments
can go to this line*/

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */
optionOne.onclick = function() {
  storyOpening.style.display = "none";
  
};

oneOne.onclick = function() {
  storyOpening.style.display = "none";
  optionOne.style.display = "none";
  optionOneScreen.style.display = "none";
/*
};

INSERT_VARIABLE.onclick = function() {

};
INSERT_VARIABLE.onclick = function() {

};
INSERT_VARIABLE.onclick = function() {

};
* /
//story opening on lin