/*
Example
   PatternBuilder()
  .setName('Laptop')
  .setPrice(1200)
  .setCategory('Electronics')
  .setDescription('A powerful laptop for work and gaming.')
  .build();
*/
interface IProduct {
    name?: string;
    price?: number | string;
    category?: string;
    description?: string;
}

export function PatternBuilder() {
    let product:IProduct = {};

    function setName(this:typeof build,name:string):typeof build {
        product.name = name;
        return this; // Возвращаем this для цепочки вызовов
    }

    // Метод для установки цены продукта
    function setPrice(this:typeof build,price:string):typeof build {
        product.price = price;
        return this;
    }

    // Метод для установки категории продукта
    function setCategory(this:typeof build,category:string): typeof build {
        product.category = category;
        return this;
    }

    // Метод для добавления описания продукта
    function setDescription(this:typeof build,description:string):typeof build  {
        product.description = description;
        return this;
    }

    // Метод для завершения строительства и возврата готового продукта
    function build():IProduct {
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