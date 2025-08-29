function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  const htmlstring = `
            <span class="img" style="background-image:url(${thumbnail})" alt="image">
                <span class="duration">
                    ${duration}
                </span>
            </span>
            <span class="detail">
                <h1 class="title">${title}  </h1>
                <span class="channelname">${cName} </span>
                <span>&bull;</span> 
                <span class="views">${getNumber(views)}</span>
                <span>&bull;</span> 
                <span class="old">${monthsOld}</span>
            </span>
        `;
  const newcard = document.createElement("div");
  newcard.classList.add("card");
  newcard.innerHTML = htmlstring.trim();
  let container= document.querySelector(".container");
  console.log(container)
  container.insertAdjacentElement("afterbegin", newcard);
}

function getNumber(num) {
  let strnum = String(num);
  let idx = 0;
  let nummap = {
    0: "",
    1: "K",
    2: "M",
    3: "B",
    4: "T",
    5: "Q",
    6: "Qa",
    7: "Qi",
    8: "Sx",
  };
  while (strnum.length > 3) {
    strnum = strnum.substring(0, strnum.length - 3);
    idx++;
  }
  return `${strnum}${nummap[idx]}`;
}




// createCard(
//   "Introduction to Backend | Sigma Web Dev video #2",
//   "CodeWithHarry",
//   560000,
//   7,
//   "31:22",
//   "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
// );


function getInputs(){
  console.log("button clicked");
  let title= prompt("Enter Your Video Title");
  let channelname= prompt("Enter Your channel name Title");
  let views= prompt("Enter Your Video views only in numbers");
  let days= prompt("enter days of videos");
  let duration= prompt("Enter Your Video Duration");
  let thumbnail= prompt("Enter Your thumbnail link");
  createCard(title,channelname,views,days,duration,thumbnail);
}
let button = document.querySelector("#add-btn");
console.log(button);
button.addEventListener("click", getInputs); // Correct


