interface Purchase {(quantity: number): void}

interface Product {
  name: string;
  unitPrice?: number;
  purchase: Purchase;
}
let table: Product = { 
  name: "Table",
  purchase: (quantity) =>
    console.log(`Purchased ${quantity} tables`),
};
let chair: Product = { 
  name: "Chair", 
  unitPrice: 40,
  purchase: (quantity) =>
    console.log(`Purchased ${quantity} chairs`) 
};

interface DiscountedProduct extends Product {
  discount: number;
}

let chairOnSale: DiscountedProduct = {
  name: "Chair on Sale",
  unitPrice: 30,
  discount: 5,
  purchase: (quantity) =>
    console.log(`Purchased ${quantity} chairs on sale`) 
};
  
