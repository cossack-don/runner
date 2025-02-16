// Базовая функция кофе
function coffee() {
    return 5; // Базовая стоимость кофе
}

// Декоратор для добавления молока
export function PatternDecoratorWithMilk(coffeeFn) {
    return function () {
        return coffeeFn() + 2; // Стоимость кофе + молоко
    };
}

// Декоратор для добавления сахара
export function PatternDecoratorWithSugar(coffeeFn) {
    return function () {
        return coffeeFn() + 1; // Стоимость кофе + сахар
    };
}

// Использование декораторов
const simpleCoffee = coffee;
console.log(simpleCoffee()); // 5

const coffeeWithMilk = withMilk(coffee);
console.log(coffeeWithMilk()); // 7 (5 + 2)

const coffeeWithMilkAndSugar = withSugar(withMilk(coffee));
console.log(coffeeWithMilkAndSugar()); // 8 (5 + 2 + 1)