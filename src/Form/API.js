const accessKey = "fca_live_KhLJdp2rdSxfUYw6x06aaqwvRolGNCCLTSz3GYij";
const baseCurrency = "PLN";
const currencies = [
  "AUD",
  "CAD",
  "CHF",
  "EUR",
  "GBP",
  "HKD",
  "JPY",
  "NZD",
  "PLN",
  "USD"
];
const currenciesString = currencies.join("%2C");
const timestamp = new Date().getTime();

export const API = `
https://api.freecurrencyapi.com/v1/latest?
apikey=${accessKey}
&currencies=${currenciesString}
&base_currency=${baseCurrency}
&_=${timestamp}
`;