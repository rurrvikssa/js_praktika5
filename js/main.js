// 1
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(`Общая сумма зарплат: ${sum}`);

// 2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
alert(`Меню после удвоения числовых значений: ${JSON.stringify(menu)}`); 

// 3
let calculator = {
  a: 0,
  b: 0,
  
  read() {
    this.a = +prompt('Введите первое число:', 0);
    this.b = +prompt('Введите второе число:', 0);
  },
  
  sum() {
    return this.a + this.b;
  },
  
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert(`Сумма чисел: ${calculator.sum()}\nПроизведение чисел: ${calculator.mul()}`);

// 4
function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert(`Числовое значение из строки $120: ${extractCurrencyValue('$120')}`); 

// 5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);
alert(`Имена пользователей: ${names.join(', ')}`); 

// 6
function getAverageAge(users) {
  let sum = users.reduce((acc, user) => acc + user.age, 0);
  return sum / users.length;
}

alert(`Средний возраст пользователей: ${getAverageAge(users)} лет`); 
