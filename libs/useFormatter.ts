export const useFormatter = () => ({
  formatPrice: (price: number) => {
    return price.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
    });
  },
  formatQuantity: (qt: number, minDigits: number) => {
    if (qt.toString().length >= minDigits) return qt.toString();

    const remain = minDigits - qt.toString().length;

    return `${"0".repeat(remain)}${qt}`;
  },

  formatDescriptionCameOnCase: (description: string) => {
    let listItems = description.split(" ");
    let finalItems = [];

    for (let index = 0; index < listItems.length; index++) {
      finalItems.push(
        listItems[index].replace(
          /(?:^\w|[A-Z]|\b\w|\s+)/g,
          function (match, index) {
            if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toUpperCase() : match.toLowerCase();
          }
        )
      );
    }

    console.log(finalItems)

    return finalItems.join(' ')
  },
});
