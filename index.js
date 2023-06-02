const numberOfFloors = document.querySelector(".no-of-floors");
const numberOfLifts = document.querySelector(".no-of-lifts");
const liftFloorValueModal = document.querySelector(".lift-floor-value-modal");
const submitBtn = document.querySelector(".btn-submit");
const showToastDiv = document.querySelector(".showToastDiv");
const closeToastBtn = document.querySelector(".close-Toast");
const toastMessage = document.querySelector(".toast-message");
const backBtn = document.querySelector(".back-btn");

closeToastBtn.addEventListener("click", () => {
  showToastDiv.style.display = "none";
});

backBtn.addEventListener("click", displayInputModal);
function displayInputModal() {
  backBtn.style.display = "none";
  liftFloorValueModal.style.display = "flex";
}

submitBtn.addEventListener("click", displayLiftsAndFloors);
backBtn.style.display = "none";
showToastDiv.style.display = "none";
function displayLiftsAndFloors() {
  const floorsValue = numberOfFloors.value;
  const liftsValue = numberOfLifts.value;
  if (floorsValue === "" || liftsValue === "") {
    toastMessage.innerHTML = "Please add number of Floors and Lifts";
    showToastDiv.style.display = "block";
  } else {
    liftFloorValueModal.style.display = "none";
    backBtn.style.display = "block";
    console.log(floorsValue, liftsValue);
  }
}
