import { Product } from "../../@types/Product";
import { User } from "../../@types/User";

const TEMPORARYoneProduct: Product = {
  id: 1,
  name: "TEXAS BURGUER",
  categoryName: "Tradicional",
  image: "/tmp/burguer-01.png",
  price: 29.9,
  like: true,
  description: `2 Blends de carne de 150g, Queijo Cheddar,
  Bacon Caramelizado, Salada, Molho da casa,
  Pão brioche artesanal, `,
};

const TEMPORARYoneProduct1: Product = {
  id: 2,
  name: "BAURU",
  categoryName: "Tradicional",
  image: "/tmp/burguer-01.png",
  price: 100.9,
  like: false,
  description: `Pão e ovo`,
};

export const _useApi = (tenantSlug: string) => ({
  getTenant: async () => {
    switch (tenantSlug) {
      case "B7Burguer":
        return {
          slug: "B7Burguer",
          name: "B7 • Burger",
          mainColor: "#FB9400",
          secundColor: "#FFF9F2",
        };
      case "B7Pizza":
        return {
          slug: "B7Pizza",
          name: "B7 • Pizza",
          mainColor: "#6AB70A",
          secundColor: "#E0E0E0"
        };
      default:
        return false;
    }
  },

  getAllProducts: async () => {
    let Product = [];
      Product.push(TEMPORARYoneProduct);
      Product.push(TEMPORARYoneProduct1);

    return Product;
  },

  getProduct: async (id: string) => {
    return TEMPORARYoneProduct;
  },

  authorizeToken: async (token: string): Promise<User | false> => {
    if (!token) return false;

    return {
      user: "Vinícius Garcia Leão",
      email: "viniciusgarcia49@gmail.com",
    };
  },
});
