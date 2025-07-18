
let internetAmt = 65;
let celPhoneAmt = 56;
let netflixAmt = 10;
let audibleAmt = 15;
let amazonAmt = 16;
let carInsuranceAmt = 100;

function checkBills(){
const internetPaid = document.getElementById('internetPaid');
const celPhonePaid = document.getElementById('celPhonePaid');
const netflixPaid = document.getElementById('netflixPaid');
const audiblePaid = document.getElementById('audiblePaid');
const amazonPaid = document.getElementById('amazonPaid');
const carInsurancePaid = document.getElementById('carInsurancePaid');
const bank = document.getElementById('currentDollarAmt');

(internetPaid.checked) ? internetAmt = 0 : internetAmt = 65;
(celPhonePaid.checked) ? celPhoneAmt = 0 : celPhoneAmt = 56;
(netflixPaid.checked) ? netflixAmt = 0 : netflixAmt = 10;
(audiblePaid.checked) ? audibleAmt = 0 : audibleAmt = 15;
(amazonPaid.checked) ? amazonAmt = 0 : amazonAmt = 16;
(carInsurancePaid.checked) ? carInsuranceAmt = 0 : carInsuranceAmt = 100;
console.log(`You owe internet: $${internetAmt}.`)
console.log(`You owe Cel Phone: $${celPhoneAmt}.`)
console.log(`You owe Netflix: $${netflixAmt}.`)
console.log(`You owe audible.com: $${audibleAmt}.`)
console.log(`You owe Amazon: $${amazonAmt}.`)
console.log(`You owe Car Insurance: $${carInsuranceAmt}.`)

let totalPaid = internetAmt + celPhoneAmt + netflixAmt + audibleAmt + amazonAmt + carInsuranceAmt;
let leftoverCash = parseFloat(bank.value) - totalPaid;
console.log(`You have $${leftoverCash} left over.`);

const daysLeft = document.getElementById('daysLeft')
const dolPerDay = parseFloat(leftoverCash) / daysLeft.value;

const output = document.querySelector('.output');
output.textContent = `${dolPerDay.toFixed(2)}`;

}
