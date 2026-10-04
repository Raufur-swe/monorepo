export function formateCurrency(amount, currency = "USD") {
    return new Intl.NumberFormat("en-Us", {
        style: "currency",
        currency
    }).format(amount);
}
//# sourceMappingURL=index.js.map