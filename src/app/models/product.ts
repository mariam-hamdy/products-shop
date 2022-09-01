import { IOneProduct } from "./oneProduct";

export interface IProduct {
  products: IOneProduct[];
  total: number;
  skip: number;
  limit: number;
}
