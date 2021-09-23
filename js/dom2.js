// Select the section with an id of container without using querySelector
let section1 = document.getElementById("container");
console.log(section1);

// Select the section with an id of container using querySelector
let section2 = document.querySelector("#container");
console.log(section2);

// Select all of the list items with a class of "second".
let second = document.querySelectorAll(".second");
console.log(second);

// Select a list item with a class of third, but only the list item inside of the ol tag.
let third = document.getElementsByTagName("ol");
// console.log(third[i]);

//Give the section with an id of container the text "Hello!"
// document.getElementById("container").innerHTML = "hello";
// // or
// container.innerHTML = "hello";

// Add the class main to the div with a class of footer
let foot = document.querySelector(".footer")
foot.classList.add("main");
console.log(foot);

// Remove the class main on the div with a class of footer
let footRemove = document.querySelector(".footer")
footRemove.classList.remove("main");
// console.log(footRemove);

// .Create a new li element. Give the li the text "four". Append the li to the ul element
// let ul = document.getElementsByTagName("ul");
// var li = document.createElement("li");
// li.textContent = "four";
// ul.appendChild(li);

// console.log(li);

// Loop over all of the lis inside the ol tag and give them a background color of
"green"
const bgColor = document.getElementsByTagName("ol")
for (let a = 0; a < bgColor.length; a++) {
    console.log(bgColor[a])
    bgColor[a].style.backgroundColor = "green";
}

// Remove the div with a class of 'footer'
let ft = document.querySelector(".footer");
foot.classList.remove("footer");
console.log(ft);