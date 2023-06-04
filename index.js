const numberOfFloors = document.querySelector(".no-of-floors");
const numberOfLifts = document.querySelector(".no-of-lifts");
const liftFloorValueModal = document.querySelector(".userInputContainer");
const submitBtn = document.querySelector(".btn-submit");
const showToastDiv = document.querySelector(".showToastDiv");
const closeToastBtn = document.querySelector(".close-Toast");
const toastMessage = document.querySelector(".toast-message");
let mainContainer = document.querySelector(".main-container");
const backBtn = document.querySelector(".back-btn");
const floorsAndLiftsContainer = document.querySelector(
  ".floors-lifts-container"
);
const floorsContainer = document.querySelector(".floors-container");
const liftsContainer = document.querySelector(".lifts-container");
let floorDiv;
let floorsArray = [];
let liftsArray = [];

mainContainer.style.backgroundColor = "var(--primary-color)";
floorsAndLiftsContainer.style.display = "none";
backBtn.style.display = "none";
showToastDiv.style.display = "none";

submitBtn.addEventListener("click", displayLiftsAndFloors);

closeToastBtn.addEventListener("click", () => {
  showToastDiv.style.display = "none";
});

backBtn.addEventListener("click", displayInputModal);
function displayInputModal() {
  mainContainer.style.backgroundColor = "var(--primary-color)";
  backBtn.style.display = "none";
  floorsAndLiftsContainer.style.display = "none";
  liftFloorValueModal.style.display = "flex";
}

function displayLiftsAndFloors() {
  const floorsValue = numberOfFloors.value;
  const liftsValue = numberOfLifts.value;
  if (floorsValue <= 0 || liftsValue <= 0) {
    toastMessage.innerHTML = "Please add a valid number";
    showToastDiv.style.display = "block";
  } else {
    mainContainer.style.backgroundColor = "white";
    liftFloorValueModal.style.display = "none";
    backBtn.style.display = "block";
    console.log(floorsValue, liftsValue);
    floorsAndLiftsContainer.style.display = "block";
    floorsContainer.innerHTML = "";
    liftsContainer.innerHTML = "";
    floorsArray = [];
    liftsArray = [];

    for (let i = floorsValue; i > 0; i--) {
      floorDiv = document.createElement("div");
      floorDiv.classList.add("single-floor");
      floorDiv.innerHTML = `
      <div class="lift-controls" id="floor-${i}">

      <button class="btn btn-primary btn-floating btn-up">
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="currentColor" d="M6 17.59L7.41 19L12 14.42L16.59 19L18 17.59l-6-6z"/><path fill="currentColor" d="m6 11l1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"/>
      </svg>
      </button>
      <h1>Floor ${i}</h1>
      <button class="btn btn-primary btn-floating btn-down">
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="currentColor" d="M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41l6 6z"/><path fill="currentColor" d="m18 13l-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"/>
      </svg>
      </button>
      </div>
      `;
      floorsArray.push(floorDiv);
      console.log(floorsArray);
      floorsContainer.appendChild(floorDiv);
    }

    if (document.querySelector("#floor-1")) {
      for (let j = 1; j <= liftsValue; j++) {
        const liftDiv = document.createElement("div");
        liftDiv.classList.add("single-lift");
        liftDiv.innerHTML = `
          <div class="door left-door"></div>
          <div class="door right-door"></div>
          `;
        liftsArray.push(liftDiv);
        console.log(liftsArray);
        liftsContainer.appendChild(liftDiv);
        floorDiv.appendChild(liftsContainer);
      }
    }
  }
}
