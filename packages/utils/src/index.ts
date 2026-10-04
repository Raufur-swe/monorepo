export function formateCurrency(amount : number , currency = "USD"):String{
    return new Intl.NumberFormat("en-Us",{
        style : "currency",
        currency
    }).format(amount);
}