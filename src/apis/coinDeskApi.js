const COINDESK_ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const fetchCurrentPrice = () => fetch(COINDESK_ENDPOINT)
                                .then(function(response) {
                                  return response.json();
                                });

export async function getBitcoinPrices() {
  const response = await fetchCurrentPrice();
  const responsePrices = response.bpi;

  const prices = [];
  Object.keys(responsePrices).forEach((key) => {
    prices.push(responsePrices[key]);
  });

  return prices;
}
