export interface Product {
  id: number;
  name: string;
  price: number;
}

export const products: Product[] = [
  { id: 1, name: "Stethoscope", price: 49 },
  { id: 2, name: "Blood pressure monitor", price: 79 },
  { id: 3, name: "Pulse oximeter", price: 29 }
];
