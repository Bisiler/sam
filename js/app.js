console.log("salam");
let name = "German Ritt";
let age = 16;
let city = "tallinn";
let commentary = "";
let drivingLicence = "";
console.log(`character: ${name}. age:${age}. city: ${city}.`);

if(age<18){
    drivingLicence = `${name} is to young too drive a car.`;
} else {
    drivingLicence = `${name} is old enough too drive a car.`;
}

console.log(drivingLicence);
const html = `
<ul>
<li>name: ${name}</li>
<li>age: ${age}</li>
<li>city: ${city} </li>
<li>he ${commentary} </li>
<li> ${drivingLicence}</li>
</ul>

`;

document.body.innerHTML = html;