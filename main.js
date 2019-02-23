document.querySelector('#submit').addEventListener("click", () => {
    const age  = document.querySelector('#age').value;
    const licDate  = document.querySelector('#lic').value;
    const person = {
        name: document.querySelector('#name').value || "Anonymous",
        age,
        lic: age < 18 ? 0 : licDate,
        drive: age < 18 || age > 65 ? "No" : licDate >= 2 ? "Expert" : "Yes",
    };
    document.querySelector('.result').innerHTML = `
    <strong>Name:</strong>
    <br/> ${person.name}<br/>
    <strong>Age:</strong>
    <br/> ${person.age} year${person.age < 1 || 's'}<br/>
    <strong>License date:</strong>
    <br/> ${person.lic} year${person.lic < 1 || 's'}<br/>
    <strong>Is driver:</strong>
    <br/> ${
        person.drive === "No"
         ? `<span style="color: red">No</span>` 
         : person.drive === "Yes"
            ? `<span style="color: green">Yes</span>`
            : `<span style="color: blue">Expert</span>`
     }<br/>
    `;
});