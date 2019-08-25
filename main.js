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
})

document.querySelector("#submit").addEventListener("click", () => {
  const age = document.querySelector("#age").value;
  const license = document.querySelector("#license").value;
  const hasLicense = document.querySelector("#hasLicense").value;
  const gender = document.querySelector("#gender").value;

  const person = {
    name: document.querySelector("#name").value || "Anonymous",
    lastName: document.querySelector("#lastname").value || "Anonymous",
    age,
    gender,
    hasLicense,
    license: age < 18 ? 0 : license,
    drive: age < 18 || age > 65 ? "No" : license >= 2 ? "Expert" : "Yes"
  };

  const textPlot = p => `
    <strong>Name:</strong>
    <br/> ${p.gender === "male" ? "Mr." : "Mme."} ${p.name} ${p.lastName}<br/>
    <strong>Age:</strong>
    <br/> ${p.age} year${p.age > 1 ? "s" : ""}<br/>
    <strong>License date:</strong>
    <br/> ${p.license} year${p.license > 1 ? "s" : ""}<br/>
    <strong>Is driver:</strong>
    <br/> ${
    p.drive === "No"
      ? `<span style="color: red">No</span>`
      : p.drive === "Yes"
        ? `<span style="color: green">Yes</span>`
        : `<span style="color: blue">Expert</span>`
    }<br/>
    `;
  document.querySelector(".result").innerHTML = textPlot(person);
});
