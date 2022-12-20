import { Tenant } from "../../@types/Tenant";
export const _useApi = () => ({
  getTenant: (tenantSlug: string): boolean | Tenant => {
    switch (tenantSlug) {
      case "B7Burguer":
        return {
          slug: "B7Burguer",
          name: "B7Burguer",
          mainColor: "#f00",
          secundColor: "#FFC7B8",
        };
      case "B7Restaurante":
        return {
          slug: "B7Restaurante",
          name: "B7Restaurante",
          mainColor: "#260FAF",
          secundColor: "#D3C4F1",
        };
      default:
        return false;
    }
  },
});
