
export type getTenantResponse = {
  name: string;
  mainColor: string;
  secundColor: string;
};

export const _useApi = () => ({
  getTenant: (tenantSlug: string): boolean | getTenantResponse => {
    switch (tenantSlug) {
      case "B7Burguer":
        return {
          name: "B7Burguer",
          mainColor: "#f00",
          secundColor: "#FFC7B8",
        };
      case "B7Restaurante":
        return {
          name: "B7Restaurante",
          mainColor: "#260FAF",
          secundColor: "#D3C4F1",
        };
      default:
        return false;
    }
  },
});
