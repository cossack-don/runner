/*
Example
   PatternBuilder()
  .setName('Laptop')
  .setPrice(1200)
  .setCategory('Electronics')
  .setDescription('A powerful laptop for work and gaming.')
  .build();
*/


export function PatternBuilder() {
    let product = {};

    function setName(name:string):string {
        product.name = name;
        return this; // Возвращаем this для цепочки вызовов
    }

    // Метод для установки цены продукта
    function setPrice(price) {
        product.price = price;
        return this;
    }

    // Метод для установки категории продукта
    function setCategory(category) {
        product.category = category;
        return this;
    }

    // Метод для добавления описания продукта
    function setDescription(description) {
        product.description = description;
        return this;
    }

    // Метод для завершения строительства и возврата готового продукта
    function build() {
        return product;
    }

    // Возвращаем методы строителя
    return {
        setName,
        setPrice,
        setCategory,
        setDescription,
        build,
    };
}