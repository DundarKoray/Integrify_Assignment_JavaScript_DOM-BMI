//Create a function that calculates BMI

function calculationBMI(mass, height) {
  let BMI = mass / height ** 2;
  return BMI;
}

console.log(calculationBMI(83, 1.83));
