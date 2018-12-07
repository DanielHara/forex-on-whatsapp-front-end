const FIXER_API_ENDPOINT = 'http://data.fixer.io/api/latest';
const FIXER_API_KEY = process.env.REACT_APP_FIXER_API_KEY;
const fixerUrl = new URL(FIXER_API_ENDPOINT);
const params = {
  'access_key': FIXER_API_KEY
};
fixerUrl.search = new URLSearchParams(params);

const fetchCurrentPrices = () => fetch(fixerUrl)
                                 .then(function(response) {
                                   return response.json();
                                 });

const mockedResponse = {
  "success": true,
  "timestamp": 1519296206,
  "base": "EUR",
  "date": "2018-12-07",
  "rates": {
      "AUD": 1.566015,
      "CAD": 1.560132,
      "CHF": 1.154727,
      "CNY": 7.827874,
      "GBP": 0.882047,
      "JPY": 132.360679,
      "USD": 1.23396,
  }
};

export async function getEurPrices() {
  const response = await fetchCurrentPrices();
  // const response = mockedResponse;
  const responseRates = response.rates;
  const responsePrices = [];

  if (responseRates) {
    Object.keys(responseRates).forEach((key) => {
      responsePrices.push({
        rate_float: responseRates[key],
        code: key
      })
    });
  }

  return responsePrices;
}
