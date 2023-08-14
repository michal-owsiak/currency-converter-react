const baseCurrency = "PLN"
const currencies = [
  "AUD",
  "CAD",
  "CHF",
  "CNH",
  "EUR",
  "GBP",
  "HKD",
  "JPY",
  "NZD",
  "PLN",
  "USD"
];

const timestamp = new Date().getTime();

export const API = `
  https://api.exchangerate.host/latest?symbols=
  ${currencies}&base=${baseCurrency}&_=${timestamp}
`;