let money, time;

function start(){
    money = +prompt("Your budget in a monce?", '');
    time = prompt("Enter DATE at format YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null ) {
        money = +prompt("Your budget in a monce?", '');
    }
}
start();


let appData = {
    budget: money,
    expenses: {},
    optimalExpenses: {},
    income: [],
    timeData: time,
    saving: false
}

function chooseExpences() {
    for (let i = 0; i < 2; i++) {

        let a = prompt("Введите обязательную статью росходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?",'');
        
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
            console.log("done!");
            appData.expenses[a] = b;
            } else {
                console.log ("bad result");
                i = i - 1;
            }
    }
}
chooseExpences();

appData.moneyPerDay = (appData.budget / 30).toFixed();


alert("Every Day Budget: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Minimum month MONEY")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("So so month MONEY")
} else if (appData.moneyPerDay > 2000) {
    console.log("good month MONEY")
} else {
    console.log("Error")
}