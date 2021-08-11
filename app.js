'use strict'
Donation.allDonation = []
function Donation(name, amount) {
    this.name = name;
    this.amount = amount
    this.max;
    this.min;
    this.age=[]
    Donation.allDonation.push(this)
}


// saved Items to local storage 

let savedItems = [];
let form = document.getElementById('form');
form.addEventListener('click', saveToLocalStorage)

function saveToLocalStorage(event) {
    event.preventDefault();
    let nameOfDonator = event.target.donator.value;
    let amountOfDonation = event.target.value;
    let newDonation = new Donation(nameOfDonator, amountOfDonation)
    Donation.allDonation.push(newDonation)
    console.log(Donation.allDonation)
    savedItems.push(newDonation)
    localStorage.setItem('donation', JSON.stringify(savedItems))
}


// get Items from localStorag and render them

let itemsFromStorage;


function loadtheSavedItems() {

    let ItemsArray = JSON.parse(localStorage.getItem('donation'));
    itemsFromStorage = ItemsArray
    if (savedItems !== null) {

        for (let i = 0; i < ItemsArray.lenght; i++) {

            new Donation(ItemsArray[i].name, ItemsArray[i].amount)
        }
    }


}




Donation.prototype.render = function () {
    let table = document.getElementById('tableForm')
    let tBody = document.createElement('tbody')
    table.appendChild(tBody)
    let rowTable = document.createElement('tr')
    tBody.appendChild.rowTable
    let dataElement = document.createElement('td')
    rowTable.appendChild(dataElement)
    dataElement.textContent = `${this.name}`
    let dataElement2=document.createElement('td')
    rowTable.appendChild(dataElement2)
    dataElement2.textContent=`${this.amount}`
    let dataElement3=document.createElement('td')
    rowTable.appendChild(dataElement3)
    dataElement3.textContent=`${this.age}`
}


for(let i=0;i<Donation.allDonation.length;i++){
    Donation.allDonation[i].render();
    Donation.allDonation[i].randomAge();
    console.log(randomAge)
    this.age.push(randomAge)
    console.log(this.age)
}


Donation.prototype.randomAge=function() {
    let randomAge = Math.floor((Math.random() * 60) + 20)
    console.log(randomAge)
    this.age.push(randomAge)
    console.log(this.age)
}


let clearButton=document.getElementById('clearButton')
clearButton.addEventListener('click', clearEveryThing)

function clearEveryThing(){
let table =document.getElementById('tableForm')
table.textContent=''
localStorage.clear();


}