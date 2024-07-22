function GETSINGLECRYPTODATA(coin) {
  if (!coin) {
    return 'Error: Coin symbol is required';
  }

  var url = 'https://pro-api.coinmarketcap.com/v1/tools/price-conversion';
  var apiKey = 'APIKEY'; // Replace with your API key
  var headers = {
    "X-CMC_PRO_API_KEY": apiKey,
    "Accept": "application/json",
    "muteHttpExceptions": true
  };

  var parameters = {
    'amount': '1',
    'symbol': coin,
    'convert': 'USD'
  };

  var queryString = Object.keys(parameters).map(key => key + '=' + encodeURIComponent(parameters[key])).join('&');
  var fullUrl = url + '?' + queryString;

  var options = {
    'headers': headers
  };

  try {
    var response = UrlFetchApp.fetch(fullUrl, options);
    var json = JSON.parse(response.getContentText());

    // Check if the response contains the data
    if (json.status.error_code !== 0) {
      return 'Error: ' + json.status.error_message;
    }

    var price = json.data.quote.USD.price;

    return price;
  } catch (e) {
    return 'Error: ' + e.message;
  }
}
