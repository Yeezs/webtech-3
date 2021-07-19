function updateTitle() {
    let dashboardTitle = "Budget";
    let dashboardFullTitle = dashboardTitle + " Dashboard";
    
    document.querySelector("title").innerText = dashboardFullTitle;
    document.querySelector("h1").innerText = dashboardTitle;
}

updateTitle();

let TRANSACTION_NAME_INPUT = document.querySelector("#new-transaction-name");
let TRANSACTION_AMOUNT_INPUT = document.querySelector("#new-transaction-amount");

function submitTransaction() {
    let name = TRANSACTION_NAME_INPUT.value;
    let amount = TRANSACTION_AMOUNT_INPUT.value;

    if (name === "" && amount === "") {
        console.error("Name and amount can not be empty!");
    } else if (name === "") {
        console.error("Name can not be empty!");
    } else if (amount === "") {
        console.error("Amount can not be empty!");
    } else {
        console.log("Everything is fine!");
    }

    createTransaction(name, amount);
}



let allTransactionNames = ["Groceries", "Subscriptions", "Rent"];
// How to add new values to an array later
allTransactionNames.push("Transport");
// New value of the array = ["Groceries", "Subscriptions", "Rent", "Transport"]
allTransactionNames.unshift("Entertainment");
// New value of the array = ["Entertainment", "Groceries", "Subscriptions", "Rent", "Transport"]
// Get the 5th element in the array - "Transport"
console.log("The 5th element is = " + allTransactionNames[4]);
let allTransactionAmounts = [20.10, 10.24, 4.99, 400, 69];



function getAllTransactions() {
    for (let i = 0; i < 5; i++) {
        console.log(allTransactionNames[i] + ": " + allTransactionAmounts[i]);
    }
}

getAllTransactions();

function createTransaction(nameInput, amountInput) {
    let mainEle = document.createElement("div"); // Create a new element
    document.querySelector(".list-of-transactions").append(mainEle); // Find an element and insert the new one inside of it.

    // create <h1> element and place it inside the new <div> - mainEle
    let nameEle = document.createElement("h1");
    mainEle.append(nameEle);
    nameEle.innerText = nameInput;

    // create <span> element and place it inside the new <div> - mainEle
    let amountEle = document.createElement("span");
    mainEle.append(amountEle);
    amountEle.innerText = amountInput;

    // give the mainEle (<div>) the class "transaction"
    mainEle.classList.add("transaction");
}

