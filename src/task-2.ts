interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

const product: Product = {
  id: 1,
  title: "Laptop",
  description: "Powerful laptop for work and study",
};

console.log(product);
