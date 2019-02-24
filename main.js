document.querySelector("#submit").addEventListener("click", () => {
  const age = document.querySelector("#age").value;
  const licDate = document.querySelector("#lic").value;

  const person = {
    name: document.querySelector("#name").value || "Anonymous",
    age,
    lic: age < 18 ? 0 : licDate,
    drive: age < 18 || age > 65 ? "No" : licDate >= 2 ? "Expert" : "Yes"
  };

  const textPlot = ({name, age, lic, drive}) => `
    <strong>Name:</strong>
    <br/> ${name}<br/>
    <strong>Age:</strong>
    <br/> ${age} year${age > 1 ? "s" : ""}<br/>
    <strong>License date:</strong>
    <br/> ${lic} year${lic > 1 ? "s" : ""}<br/>
    <strong>Is driver:</strong>
    <br/> ${
        drive === "No"
        ? `<span style="color: red">No</span>`
        : drive === "Yes"
        ? `<span style="color: green">Yes</span>`
        : `<span style="color: blue">Expert</span>`
    }<br/>
    `;
  document.querySelector(".result").innerHTML = textPlot(person);
});
