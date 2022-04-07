// get input balance
function getInputBalance(){
    const incomeField = document.getElementById('income-field')
    let inputBalance = parseFloat(incomeField.value);
    return inputBalance;
}

// get Expenses amout number
function getExpensesAmount(inputField){
    const field = document.getElementById(inputField);
    let fieldExpense = parseFloat(field.value);
    return fieldExpense;
}

// get Balance
function getBalance(){
    const previousBalace = document.getElementById('balance');
    let previousBalaceAmount = parseFloat(previousBalace.innerText)
    return previousBalaceAmount;
}

document.getElementById('calculate').addEventListener("click",function(){
   /*  const incomeField = document.getElementById('income-field')
    let inputBalance = parseFloat(incomeField.value); */
    const inputBalance = getInputBalance();

    //  expenses calculation
    /* const foodField = document.getElementById('food-field');
    let foodExpense = parseFloat(foodField.value); */
    const foodExpense =  getExpensesAmount('food-field')

   /*  const rentField = document.getElementById('rent-field');
    let rentExpense = parseFloat(rentField.value); */
    const rentExpense = getExpensesAmount('rent-field')

  /*   const clothField = document.getElementById('cloth-field');
    let clothExpense = parseFloat(clothField.value); */
    const clothExpense = getExpensesAmount('cloth-field')

    // total expense calculation
    const totalExpenseField = document.getElementById('total-expense');
    const totalExpense = foodExpense + rentExpense + clothExpense;
    totalExpenseField.innerText = totalExpense;
    // balance field
    const balanceField = document.getElementById('balance')
    const balance = inputBalance - totalExpense
    balanceField.innerText = balance;
})

// saving calculation
document.getElementById('saving-btn').addEventListener('click', function(){
/*     const incomeField = document.getElementById('income-field')
    let inputBalance = parseFloat(incomeField.value); */
    const inputBalance = getInputBalance()

    const saveAmountfield = document.getElementById('saving-field');
    const saveAmoutParcent = parseFloat(saveAmountfield.value)

    // percentage calculation
    const savingBalance = document.getElementById('save-amount');
    const saveAmount =( inputBalance / 100) * saveAmoutParcent;
    savingBalance.innerText = saveAmount;

    // previous balance
    /*  const previousBalace = document.getElementById('balance');
    let previousBalaceAmount = parseFloat(previousBalace.innerText) */
    const previousBalaceAmount = getBalance()

    // remaining balance
    const remainingBalanceArea = document.getElementById('remaining-balance');
    const remainingBalance = previousBalaceAmount - saveAmount;
    remainingBalanceArea.innerText = remainingBalance;
})