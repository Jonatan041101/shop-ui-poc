import { ICategory } from "@/api/category/interfaces/category-interface";
import { IBase } from "@/api/domain/interfaces/base-interface";

export interface IProduct extends IBase {
  name: string;
  description: string;
  picture: string;
  isOffer: boolean;
  price: number;
  category?: ICategory;
}
