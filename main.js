document.querySelector("#submit").addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const lastName = document.querySelector("#lastname").value;
  const age = document.querySelector("#age").value;
  const license = document.querySelector("#license").value;
  const hasLicense = document.querySelector("#hasLicense").value;
  const gender = document.querySelector("#gender").value;
  const person = {
    name,
    lastName,
    age: age || 0,
    gender,
    hasLicense,
    license: age < 18 ? 0 : license,
  };
  console.log(person)
  document.querySelector(".result").innerHTML =
    `<strong>Name:</strong>
      <br/> ${person.gender === "male" ? "Mr." : "Mme."} ${person.name} ${person.lastName}<br/>
      <strong>Age:</strong>
      <br/> ${person.age} year${person.age > 1 ? "s" : ""}<br/>
      <strong>License date:</strong>
      <br/> ${person.license} year${person.license > 1 ? "s" : ""}<br/>
      <strong>Is driver:</strong>
      <br/> ${
    age < 18 || age > 65
      ? `<span style="color: red">Not a driver</span>`
      : license < 2
        ? `<span style="color: green">Beginner</span>`
        : `<span style="color: blue">Expert</span>`
    }<br/>
    `
});

/**
 * Form control and hide/show input conditionally.
 */
document.querySelector("#age").addEventListener("change", () => {
  const age = document.querySelector("#age").value;
  if (parseInt(age) < 18) {
    document.querySelector("label[for='hasLicense']").style.display = "none";
    document.querySelector("#hasLicense").style.display = "none";
    document.querySelector("label[for='license']").style.display = "none";
    document.querySelector("#license").style.display = "none";
  } else {
    document.querySelector("label[for='hasLicense']").style.display = "block";
    document.querySelector("#hasLicense").style.display = "block";
    document.querySelector("label[for='license']").style.display = "block";
    document.querySelector("#license").style.display = "block";
  }
});
document.querySelector("#hasLicense").addEventListener("change", () => {
  const hasLicense = document.querySelector("#hasLicense").value;
  console.log(hasLicense)
  if (hasLicense === "no") {
    document.querySelector("label[for='license']").style.display = "none";
    document.querySelector("#license").style.display = "none";
  } else {
    document.querySelector("label[for='license']").style.display = "block";
    document.querySelector("#license").style.display = "block";
  }
});