import { Product } from "../../@types/Product";

const TEMPORARYoneProduct: Product = {
  id: 1,
  name: "Texas Burger",
  categoryName: "Tradicional",
  image: "/tmp/burguer-01.png",
  price: 29.9,
  like: true,
  description: `2 Blends de carne de 150g, Queijo Cheddar,
  Bacon Caramelizado, Salada, Molho da casa,
  Pão brioche artesanal, `,
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
      case "B7Restaurante":
        return {
          slug: "B7Restaurante",
          name: "B7 • Restaurante",
          mainColor: "#260FAF",
          secundColor: "#D3C4F1",
        };
      default:
        return false;
    }
  },

  getAllProducts: async () => {
    let Product = [];
    for (let q = 0; q < 100; q++) {
      Product.push(TEMPORARYoneProduct);
    }

    return Product;
  },

  getProduct: async (id: string) => {
    return TEMPORARYoneProduct;
  },
});
