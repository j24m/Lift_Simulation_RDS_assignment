const numberOfFloors = document.querySelector(".no-of-floors");
const numberOfLifts = document.querySelector(".no-of-lifts");
const liftFloorValueModal = document.querySelector(".userInputContainer");
const submitBtn = document.querySelector(".btn-submit");
const showToastDiv = document.querySelector(".showToastDiv");
const closeToastBtn = document.querySelector(".close-Toast");
const toastMessage = document.querySelector(".toast-message");
const backBtn = document.querySelector(".back-btn");
const floorsContainer = document.querySelector(".floors-container");
const floorsAndLiftsContainer = document.querySelector(
  ".floors-lifts-container"
);

closeToastBtn.addEventListener("click", () => {
  showToastDiv.style.display = "none";
});

backBtn.addEventListener("click", displayInputModal);
function displayInputModal() {
  backBtn.style.display = "none";
  floorsAndLiftsContainer.style.display = "none";
  liftFloorValueModal.style.display = "flex";
}

floorsAndLiftsContainer.style.display = "none";
backBtn.style.display = "none";
showToastDiv.style.display = "none";

submitBtn.addEventListener("click", displayLiftsAndFloors);

function displayLiftsAndFloors() {
  const floorsValue = numberOfFloors.value;
  const liftsValue = numberOfLifts.value;
  if (floorsValue <= 0 && liftsValue <= 0) {
    toastMessage.innerHTML = "Please add valid number of Floors and Lifts";
    showToastDiv.style.display = "block";
  } else {
    liftFloorValueModal.style.display = "none";
    backBtn.style.display = "block";
    console.log(floorsValue, liftsValue);
    floorsAndLiftsContainer.style.display = "block";
    floorsContainer.innerHTML = "";

    for (let i = floorsValue; i > 0; i--) {
      floorsContainer.innerHTML;
      const floorDiv = document.createElement("div");
      floorDiv.classList.add("single-floor");
      floorDiv.innerHTML = `<h1>Floor ${i}</h1>`;
      floorsContainer.appendChild(floorDiv);
    }
  }
}
