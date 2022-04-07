// get input balance
function getIncomeBalance(){
    const incomeField = document.getElementById('income-field')
    let incomeBalance = parseFloat(incomeField.value);
     return incomeBalance;  
}

// get Expenses amount number
function getExpensesAmount(inputField){
    const incomeBalance = getIncomeBalance();
    const field = document.getElementById(inputField);
    let fieldExpense = parseFloat(field.value);
    // check negative or string type value
    if(isNaN(fieldExpense) || fieldExpense < 0){
       alert(`Pls give positive number in ${inputField} \nCause you can't give negative or string type value in input filed`);
       return 0;
    }else if(fieldExpense > incomeBalance){
        alert(`Opps..! ${inputField}  Amount is so high. \nPlease..! give less than ${incomeBalance} amount in ${inputField} \nOtherwise this filed aren't working`);
        return 0;
    }
    else{
        return fieldExpense;
    }   
}

// get Balance
function getBalance(){
    const previousBalace = document.getElementById('balance');
    let previousBalaceAmount = parseFloat(previousBalace.innerText)
    return previousBalaceAmount;
}

// handle calculation button
document.getElementById('calculate').addEventListener("click",function(){
    const incomeBalance = getIncomeBalance();
    if(isNaN(incomeBalance) || incomeBalance < 0){
        alert(`Negative or string type Balance aren't acceptable`);
       
     }else{
        const foodExpense =  getExpensesAmount('food-field')
        const rentExpense = getExpensesAmount('rent-field')
        const clothExpense = getExpensesAmount('cloth-field')
    
        // total expense calculation
        const totalExpenseField = document.getElementById('total-expense');
        const totalExpense = foodExpense + rentExpense + clothExpense;
        totalExpenseField.innerText = totalExpense;
        if(totalExpense > incomeBalance){
            alert(`Tomar total expenses income balance er theke besi hoey jacce.`)
        }
        // balance field
        const balanceField = document.getElementById('balance')
        const balance = incomeBalance - totalExpense
        balanceField.innerText = balance; 
     }  
});

// saving calculation
document.getElementById('saving-btn').addEventListener('click', function(){
    const incomeBalance = getIncomeBalance()
    const previousBalaceAmount = getBalance()

    const saveAmountfield = document.getElementById('saving-field');
    const saveAmoutParcent = parseFloat(saveAmountfield.value)

    // percentage calculation
    const savingBalance = document.getElementById('save-amount');
    const saveAmount =( incomeBalance / 100) * saveAmoutParcent;

    // handle error case if save amount greather than balance
    if(saveAmount > previousBalaceAmount){
       alert(`your saving amount is greater than your balance \nTomar balance er theke besi amount save korte parba na `);
        savingBalance.innerText = 00;
    }else{
        savingBalance.innerText = saveAmount;
        const remainingBalanceArea = document.getElementById('remaining-balance');
        const remainingBalance = previousBalaceAmount - saveAmount;
        remainingBalanceArea.innerText = remainingBalance;
    }
})