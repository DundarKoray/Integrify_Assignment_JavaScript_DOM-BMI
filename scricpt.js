const calculateButton = document
  .querySelector("button")
  .addEventListener("click", calculationBMI);

//BMI FUNCTION
function calculationBMI() {
  const userMass = document.querySelector(".input__mass").value;
  const userHeight = document.querySelector(".input__height").value;

  const BMI = Math.floor(userMass / (userHeight * userHeight));

  const result = document.querySelector(".bmi-result__p");
  result.textContent = `Your BMI result is ${BMI}`;
  console.log(BMI);

  let bmiResult = document.querySelector(".bmi-result");
  let bmiResultImage = document.querySelector(".bmiResultImage img");
  if (BMI >= 30) {
    bmiResult.style.background = "red";
    bmiResultImage.src = "./img/obese.jpg";
  } else if (BMI < 30 && BMI > 24.9) {
    bmiResult.style.background = "orange";
    bmiResultImage.src = "./img/overweight.jpg";
  } else if (BMI < 24.9 && BMI > 18.5) {
    bmiResult.style.background = "green";
    bmiResultImage.src = "./img/normal.jpg";
  } else {
    bmiResult.style.background = "blue";
    bmiResultImage.src = "./img/underweight.jpg";
  }
}
