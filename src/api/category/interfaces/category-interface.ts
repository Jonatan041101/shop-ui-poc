import { IBase } from "@/api/domain/interfaces/base-interface";
import { IProduct } from "@/api/product/interfaces/product-interface";

export interface ICategory extends IBase {
  name: string;
  products: IProduct[];
}
