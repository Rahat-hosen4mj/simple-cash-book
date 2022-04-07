document.getElementById('calculate').addEventListener("click",function(){
    const incomeField = document.getElementById('income-field')
    let inputBalance = parseFloat(incomeField.value);

    //  expenses calculation
    const foodField = document.getElementById('food-field');
    let foodExpense = parseFloat(foodField.value);

    const rentField = document.getElementById('rent-field');
    let rentExpense = parseFloat(rentField.value);

    const clothField = document.getElementById('cloth-field');
    let clothExpense = parseFloat(clothField.value);

    // total expense calculation
    const totalExpenseField = document.getElementById('total-expense');
    const totalExpense = foodExpense + rentExpense + clothExpense;
    totalExpenseField.innerText = totalExpense;
    const balanceField = document.getElementById('balance')
    const balance = inputBalance - totalExpense
    balanceField.innerText = balance;
})

// saving calculation
document.getElementById('saving-btn').addEventListener('click', function(){
    const incomeField = document.getElementById('income-field')
    let inputBalance = parseFloat(incomeField.value);

    const saveAmountfield = document.getElementById('saving-field');
    const saveAmoutParcent = parseFloat(saveAmountfield.value)

    const savingBalance = document.getElementById('save-amount');
    const saveAmount =( inputBalance / 100) * saveAmoutParcent;
    savingBalance.innerText = saveAmount;

    // previous balance
    const previousBalace = document.getElementById('balance');
    let previousBalaceAmount = parseFloat(previousBalace.innerText)

    // remaining balance
    const remainingBalanceArea = document.getElementById('remaining-balance');
    const remainingBalance = previousBalaceAmount - saveAmount;
    remainingBalanceArea.innerText = remainingBalance;
    

    // const remainingAmount = previousBalace - saveAmount;
    // remainingBalance.innerText = remainingAmount


    console.log(previousBalaceAmount)
})