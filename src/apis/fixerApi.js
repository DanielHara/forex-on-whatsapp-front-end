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

export async function getEurPrices() {
  console.log('FIXER_API_KEY:');
  console.log(FIXER_API_KEY);
  console.log(process.env);
  const response = await fetchCurrentPrices();
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
  console.log(responsePrices);
  return responsePrices;
}
