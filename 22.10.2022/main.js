/* const numberOne = +prompt("Введите число");
const numberTwo = Number.parseInt(prompt("Введите число"));
alert(`Результат сложения чисел ${numberOne} и ${numberTwo} равен ${numberOne + numberTwo}`);
/* alert("Результат сложения чисел " + numberOne + " и " + numberTwo + " равен " + (numberOne + numberTwo)); */

/* fn();
function fn() {
    alert('Привет');
}

Задача 3: Написать функцию, которая принимает имя пользователя при ее вызове и выводит сообщение с приветствием пользователя по имени. 
Проверить работоспособность функции. */

/* const name = prompt (message: "Введите имя");
sayName(name);

function sayName(name) {
    alert(`Hi ${name}`);
} */

/* /* Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
- При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
- При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с соо бщением “Ну вы держитесь там!”. */

/* const question = confirm("Вам хорошо живётся?");
if (question){
    alert("Тогда мы идем к вам!");
} else {
    alert("Ну вы держитесь там!");
} */
/* 
Задача 5: перепишите код, используя конструкцию switch-case, запрашивая возраст пользователя через диалоговое окно. */
 
/* const age = Number.parseInt(prompt("Сколько вам лет?"));

switch (age) {
    case 10:
        alert('Вам надо учить уроки!');
        break;
    case 18:
        alert('Вы совершеннолетний, все можно!');
        break;
    case 30:
        alert('Ложитесь спать, завтра на работу');
        break;
    default:
        alert('Мы не знаем что Вам делать');

} */

/* Необходимо реализовать функцию spacey, которая принимает массив строк, а
возвращать должна массив с тем же колчиеством строк, только слепленных их всех
предыдущих значений вместе с текущим (см. примеры).
к созданию ['i', 'ihave', 'ihaveno', 'ihavenospace']. */

/* function spacey(arr) {
    let array = [""];
    for (let i = 0; i < arr.length; i++) {
        array.push(array.at(-1) + arr[i]);
    }
    array.shift();
    return array;
}

// ["я", "яОчень", "яОченьЛюблю", "яОченьЛюблюПрограммирование"]
console.log(spacey(["я", "Очень", "Люблю", "Программирование"])); */

/*
Реализовать функцию leftPad, которая добавляет слева к строке пробелы.
Функция принимает два аргумента: число, обозначающее минимальную длину
результата, и строку, которую нужно дополнить, если её длина меньше.
*/
 
/* function leftPad(num, str) {
    const size = str.length;
    if (temp <= size){
        return str;
    }
        return " ".repeat(num-size)+str;
}
console.log(leftPad(6, 'test')); // Вернет "  test"
console.log(leftPad(3, 'test')); // Вернет "test" */

/* function leftPad(num, str){
    const size = str.length;
    if (num <= size){
        return str;
    }
        return " ".repeat(num -size) + str
}
 */
