//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element
//and append it as a child of the element that has the 'id = a-1'
//(the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the
//className 'square'!.
//Each time the user clicks on the new element it has to respond changing the displayed
// text 'x' to 'o'

//resolve // QUESTION 1 here
const square = document.createElement("div");
const k = document.getElementById("a-1");
k.appendChild(square);
square.className = "square";
square.innerText = "x";
//to listen to the click
square.addEventListener("click", (e) => {
  console.log(e);

  //to click and get x or o I use a conditional
  if (square.innerText === "x") {
    square.innerText = "o";
  } else {
    square.innerText = "x";
  }
});

//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow,
//those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = ["red", "white", "black", "green", "orange"];

// // //resolve // QUESTION 2 here

// //create the select element for the drop down list that holds the elements in the array
const select = document.createElement("select");
const a2div = document.getElementById("a-2");

//since I have a array I use a loop and use option to call the element in the array
for (let i = 0; i < colors.length; i++) {
  let option = document.createElement("option");
  option.value = colors[i];
  option.innerText = colors[i];
  select.appendChild(option);
}
a2div.appendChild(select);

//create the remove or delete button
const deleteButton = document.createElement("button");
deleteButton.innerText = "Remove";
deleteButton.addEventListener("click", (e) => {
  select.options[select.selectedIndex].remove();
});

//append the element
a2div.appendChild(deleteButton);

//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere)
//write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html
//ile
//And display the results in the elements with the 'id = volume' and 'id = area'
//respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area
//is (4 × π × r^2)

const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");
const areaInput = document.getElementById("area");

const calculate_sphere = (event) => {
  //console.log('radius';value);
  //console.log(e);
  let radius = radiusInput.value;

  //math formula to calculate the volume and area
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  let area = 4 * Math.PI * Math.pow(radius, 2);
  document.getElementById("volume").value = volume;
  document.getElementById("area").value = area;
  // console.log(volume);
  // console.log(area);
  volumeInput.value = volume;
  areaInput.value = area;

  //to avoid the browser to refresh right after the calculation
  // event.preventDefault();
  return false;
};

window.onload = document.getElementById("MyForm").onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked

//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action
// that will hide the respective question's answer above. So if you click the "Hide Question 1"
// button it will hide from the DOM the answer to your first exercise. If you click it again it
// will show the answer.

//resolve // QUESTION 4 here

const a4div = document.getElementById("a-4");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");

button1.innerText = "Hide question 1";
button2.innerText = "Hide question 2";
button3.innerText = "Hide question 3";

a4div.appendChild(button1);
a4div.appendChild(button2);
a4div.appendChild(button3);

button1.addEventListener("click", (event) => {
  let q1 = document.querySelector(".question-item:nth-child(1)");
  let hideText = "Hide Question 1";
  let showText = "Show Question 1";

  console.log(q1);
  if (q1.style.display === "block" || !q1.style.display) {
    q1.style.display = "none";
    button1.innerText = showText;
  } else {
    q1.style.display = "block";
    button1.innerText = hideText;
  }
});

button2.addEventListener("click", (event) => {
  let q2 = document.querySelector(".question-item:nth-child(2)");
  let hideText = "Hide Question 2";
  let showText = "Show Question 2";

  console.log(q2);
  if (q2.style.display === "block" || !q2.style.display) {
    q2.style.display = "none";
    button2.innerText = showText;
  } else {
    q2.style.display = "block";
    button2.innerText = hideText;
  }
});

button3.addEventListener("click", (event) => {
  let q3 = document.querySelector(".question-item:nth-child(3)");
  let hideText = "Hide Question 3";
  let showText = "Show Question 3";

  console.log(q3);
  if (q3.style.display === "block" || !q3.style.display) {
    q3.style.display = "none";
    button3.innerText = showText;
  } else {
    q3.style.display = "block";
    button3.innerText = hideText;
  }
});

//trying to answer question 4  with loops
// const hideQuestion = ["diva1", "diva2", "div3"];
// const diva4 = document.getElementById("a-4");

// //create the buttons
// for (i = 0; i < hideQuestion.length; i++) {
//   let button = document.createElement("button");
//   button.innerText = `hideQuestion ${i + 1}`;
//   button.value = hideQuestion[i];
//   diva4.appendChild(button);

//   button.addEventListener("click", (event) => {
//     const q1 = hideQuestion[event.target.value];

//     console.log(q1);

//     if (diva4.style.display === "block" || !diva4.style.display) {
//       diva4.style.display = "none";
//       button.innerText = showText;
//     } else {
//       diva4.style.display = "block";
//       button.innerText = hideText;
//     }

//   });
// }
