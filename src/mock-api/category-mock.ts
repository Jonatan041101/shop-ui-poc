import { ICategory } from "@/api/category/interfaces/category-interface";

export const categoryApi: ICategory[] = [
  {
    id: 1,
    name: "Toys",
    products: [
      {
        id: 1,
        name: "Bob Esponja",
        description: "",
        picture: "",
        isOffer: true,
        price: 800,
      },
      {
        id: 2,
        name: "Patricio Estrella",
        description: "",
        picture: "",
        isOffer: false,
        price: 800,
      },
    ],
  },
];
