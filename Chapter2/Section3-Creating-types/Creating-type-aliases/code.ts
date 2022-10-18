type Purchase = (quantity: number) => void; 
type Product = { name: string; unitPrice?: number; purchase: Purchase };

let table: Product = {
  name: "Table",
  purchase: (quantity) =>
    console.log(`Purchased ${quantity} tables`),
};
table.purchase(4);
  
let chair: Product = { 
  name: "Chair", 
  unitPrice: 40,
  purchase: (quantity) =>
    console.log(`Purchased ${quantity} chairs`),
};

type DiscountedProduct = Product & { discount: number };
let chairOnSale: DiscountedProduct = {
  name: "Chair on Sale",
  unitPrice: 30,
  discount: 5,
  purchase: (quantity) =>
    console.log(`Purchased ${quantity} chairs on sale`),
};
  

