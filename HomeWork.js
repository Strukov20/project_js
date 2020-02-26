


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
    saving: true,
    chooseExpences: function(){
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
    },

    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert("Every Day Budget: " + appData.moneyPerDay);
    },

    detectLevel: function(){
        if(appData.moneyPerDay < 100) {
            console.log("Minimum month MONEY");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("So so month MONEY");
        } else if (appData.moneyPerDay > 2000) {
            console.log("good month MONEY");
              
        } else {
            console.log("Error");
        }
    },

    checkSavings: function(){
        if (appData.saving == true){
            let save = +prompt("Яка сума накопичення?"),
                percent = +prompt("Під який процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Дохід  в місяць з вашого депозиту: " + appData.monthIncome);
        }
    },

    chooseOptExpenses: function(){
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    
    chooseIncome: function () {

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }


};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}