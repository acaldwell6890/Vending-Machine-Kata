let change = 0;
let moneyEntered = 0;
let totalPaid = 0;
let msg = " "
let messageEl = document.getElementById("msg");
let items = ["Soda", "Snickers", "Skittles", "Chips"];

function fillVendingMachine() {
    let vendingMachineItems = {
        'Soda': 10,
        'Snickers': 5,
        'Skittles': 5,
        'Chips': 10
    }
    return vendingMachineItems
}



let store = fillVendingMachine()

const itemPrice = 1.25;
const currencyOne = 1;
const currencyFive = 5;
const currencyNickel = 0.05;
const currencyDime = 0.1;
const currencyQuarter = 0.25;

function getTotal() {
    let getOnes = Number(document.getElementById("ones").value);
    let getFives = Number(document.getElementById("fives").value);
    let getNickels = Number(document.getElementById("nickels").value);
    let getDimes = Number(document.getElementById("dimes").value);
    let getQuarters = Number(document.getElementById("quarters").value);

    if (getOnes > 0) {
        getOnes = getOnes * currencyOne;
    }
    if (getFives > 0) {
        getFives = getFives * currencyFive;
    }
    if (getNickels > 0) {
        getNickels = getNickels * currencyNickel;
    }
    if (getDimes > 0) {
        getDimes = getDimes * currencyDime;
    }
    if (getQuarters > 0) {
        getQuarters = getQuarters * currencyQuarter;
    }
    totalPaid = getOnes + getFives + getNickels + getDimes + getQuarters
    return totalPaid.toFixed(2)
}

function tally() {
    moneyInserted = getTotal();
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearTally() {
    moneyInserted = 0;
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearForm() {
    document.getElementById("ones").value = 0;
    document.getElementById("fives").value = 0;
    document.getElementById("nickels").value = 0;
    document.getElementById("dimes").value = 0;
    document.getElementById("quarters").value = 0;
}

function cancel(){
    getTotal();
    if (totalPaid > 0) {
        msg = "Transaction cancelled. $" + totalPaid.toFixed(2) + " has been returned.";
       
        clearForm();
        clearTally();
        messageEl.innerHTML = msg;
    } else if (totalPaid == 0) {
        msg = "Insert money first. Select item."

        messageEl.innerHTML = msg;
    }
}

function calculateChange() {
    let tempChange = 0;

    if (getTotal() != 0) {
        return (tempChange = (getTotal() - itemPrice).toFixed(2));
    }
    return tempChange.toFixed(2);
}

function updateStore(item) {
    if(store[item] <= 0){
        msg = "This item is out of stock"
        messageEl.innerHTML = msg;
    }
    
    store[item] -= 1
    
}

function dispenseItem(num) {
    messageEl.innerHTML = " ";
    change = 0;

    let selectedItem = items[num];

    change = calculateChange();

    if (change < 0) {
        msg = "You did not pay enough. $" + totalPaid.toFixed(2) + " has been returned."
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
    }
    else if (change > 0) {
        msg = selectedItem + " has been dispensed. $" + change + " has been returned";
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;   
    }
    else if (totalPaid == 0) {
        msg = "Please pay to purchase an item.";
        messageEl.innerHTML = msg;
    }
    else if (change == 0) {
        msg = selectedItem + " has been dispensed."
        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
        
    }
    updateStore(items[num]) 
    console.log(store);
}

function refill(store) {
    return store
}