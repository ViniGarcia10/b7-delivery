export type Product = {
  id: number;
  name: string;
  image: string;
  categoryName: string;
  price: number;
  description?: string;
  like?:boolean;
};
