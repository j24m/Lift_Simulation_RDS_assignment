const numberOfFloors = document.querySelector(".no-of-floors");
const numberOfLifts = document.querySelector(".no-of-lifts");
const liftFloorValueModal = document.querySelector(".lift-floor-value-modal");
const submitBtn = document.querySelector(".btn-submit");
let showToastDiv = document.querySelector(".showToastDiv");
let closeToastBtn = document.querySelector(".close-Toast");
let toastMessage = document.querySelector(".toast-message");

closeToastBtn.addEventListener("click", () => {
  showToastDiv.style.display = "none";
});

submitBtn.addEventListener("click", displayLiftsAndFloors);

showToastDiv.style.display = "none";
function displayLiftsAndFloors() {
  const floorsValue = numberOfFloors.value;
  const liftsValue = numberOfLifts.value;
  if (floorsValue === "" || liftsValue === "") {
    toastMessage.innerHTML = "Please add number of Floors and Lifts";
    showToastDiv.style.display = "block";
  } else {
    liftFloorValueModal.style.display = "none";
    console.log(floorsValue, liftsValue);
  }
}
