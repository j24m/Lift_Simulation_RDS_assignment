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

submitBtn.addEventListener("click", displayLiftsAndFloors);

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
      floorDiv.setAttribute("id", `floor-${i}`);
      const floorBtns = document.createElement("div");
      floorBtns.classList.add("lift-controls");
      const btnUp = document.createElement("button");
      btnUp.classList.add("btn-up", "btn", "btn-primary", "btn-floating");
      btnUp.setAttribute("id", `btn-up-${i}`);
      btnUp.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="currentColor" d="M6 17.59L7.41 19L12 14.42L16.59 19L18 17.59l-6-6z"/><path fill="currentColor" d="m6 11l1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"/>
      </svg>`;
      const floorTitle = document.createElement("h1");
      floorTitle.innerHTML = `Floor ${i}`;
      const btnDown = document.createElement("button");
      btnDown.classList.add("btn-down", "btn", "btn-primary", "btn-floating");
      btnDown.setAttribute("id", `btn-down-${i}`);
      btnDown.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="currentColor" d="M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41l6 6z"/><path fill="currentColor" d="m18 13l-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"/>
      </svg>`;
      btnUp.addEventListener("click", () => {
        const floorNumber = i; // Get the current floor number
        console.log(`Button Up clicked for Floor ${floorNumber}`);
        moveLiftToFloor(floorNumber);
      });

      btnDown.addEventListener("click", () => {
        const floorNumber = i; // Get the current floor number
        console.log(`Button Down clicked for Floor ${floorNumber}`);
        moveLiftToFloor(floorNumber);
      });
      floorBtns.appendChild(btnUp);
      floorBtns.appendChild(floorTitle);
      floorBtns.appendChild(btnDown);
      floorDiv.appendChild(floorBtns);

      if (floorsArray[floorsArray.length - 1]) {
        document.querySelector(`#btn-down-${floorsValue}`).style.display =
          "none";
      }
      floorsArray.push(floorDiv);
      floorsContainer.appendChild(floorDiv);
    }

    if (document.querySelector("#floor-1")) {
      document.querySelector("#btn-up-1").style.display = "none";
      for (let j = 1; j <= liftsValue; j++) {
        const liftDiv = document.createElement("div");
        liftDiv.classList.add("single-lift");
        liftDiv.setAttribute("data-currentfloor", "1");
        liftDiv.innerHTML = `
          <div class="door left-door"></div>
          <div class="door right-door"></div>
          `;

        liftsArray.push(liftDiv);
        liftsContainer.appendChild(liftDiv);
        floorDiv.appendChild(liftsContainer);
      }
    }
    function moveLiftToFloor(floorNumber) {
      console.log(`Moving lift to Floor ${floorNumber}`);
      const lift = liftsArray[0];
      const distanceToMove = -((floorNumber - 1) * 150 + (floorNumber - 1) * 5);
      lift.style.transform = `translateY(${distanceToMove}px)`;
      const prevFloor = lift.getAttribute("data-currentfloor");
      console.log("prev flr", prevFloor);
      console.log("flr nmb", floorNumber);
      lift.style.transitionDuration = `${
        Math.abs(floorNumber - prevFloor) * 2
      }s`;
      console.log(lift.style.transitionDuration);
      console.log(Math.abs(floorNumber - prevFloor));
      console.log(`${Math.abs(floorNumber - prevFloor) * 2}s`);
      lift.setAttribute("data-currentfloor", floorNumber);

      const leftDoor = lift.childNodes[1];
      const rightDoor = lift.childNodes[3];

      function openDoor() {
        leftDoor.style.transform = `translateX(-50px)`;
        leftDoor.style.transitionDuration = `${1}s`;
        rightDoor.style.transform = `translateX(50px)`;
        rightDoor.style.transitionDuration = `${1}s`;
      }

      function closeDoor() {
        leftDoor.style.transform = `translateX(0px)`;
        leftDoor.style.transitionDuration = `${1}s`;
        rightDoor.style.transform = `translateX(0px)`;
        rightDoor.style.transitionDuration = `${1}s`;
      }

      setTimeout(() => {
        openDoor();
        setTimeout(() => {
          closeDoor();
        }, 2000);
      }, Math.abs(floorNumber - prevFloor) * 2000);
    }
  }
}
