/*
* // Использование фабрики
const book = PatternFactoryCreateProduct('book', 'JavaScript: The Good Parts', 29.99);
const electronics = PatternFactoryCreateProduct('electronics', 'Smartphone', 499.99);

console.log(book.getDescription()); // Book: JavaScript: The Good Parts, Price: $29.99
console.log(electronics.getDescription()); // Electronics: Smartphone, Price: $499.99
*
*
*/

// Фабричная функция для создания объектов
export function PatternFactoryCreateProduct(type, name, price) {
    // В зависимости от типа создаем соответствующий объект
    switch (type) {
        case 'book':
            return createBook(name, price);
        case 'electronics':
            return createElectronics(name, price);
        default:
            throw new Error('Unknown product type');
    }
}

// Функция для создания объекта книги
function createBook(name, price) {
    return {
        type: 'book',
        name: name,
        price: price,
        getDescription: function() {
            return `Book: ${this.name}, Price: $${this.price}`;
        }
    };
}

// Функция для создания объекта электроники
function createElectronics(name, price) {
    return {
        type: 'electronics',
        name: name,
        price: price,
        getDescription: function() {
            return `Electronics: ${this.name}, Price: $${this.price}`;
        }
    };
}

