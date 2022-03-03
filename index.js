let change = 0;
let moneyEntered = 0;

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
        getOnes = getOnes * currencyOne
    }
    if (getFives > 0) {
        getFives = getFives * currencyFive
    }
    if (getNickels > 0) {
        getNickels = getNickels * currencyNickel
    }
    if (getDimes > 0) {
        getDimes = getDimes * currencyDime
    }
    if (getQuarters > 0) {
        getQuarters = getQuarters * currencyQuarter
    }
    
}

