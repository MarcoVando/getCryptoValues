function GETPRICEPERFORMANCE(symbol, name) {
  // Ensure the symbol and name parameters are provided
  if (!symbol || !name) {
    return 'Error: Coin symbol and name are required';
  }
  
  var url = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/price-performance-stats/latest";
  var apiKey = 'APIKEY'; // Replace with your API key
  
  var headers = {
    "X-CMC_PRO_API_KEY": apiKey,
    "Accept": "application/json",
    "muteHttpExceptions": true
  };

  // Construct query parameters
  var params = {
    symbol: symbol
  };

  var queryString = Object.keys(params).map(key => key + '=' + encodeURIComponent(params[key])).join('&');
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

    // Find the specific coin data by name
    var matchingElement = null;
    for (var key in json.data) {
      if (json.data[key].name === name) {
        matchingElement = json.data[key];
        break;
      }
    }

    if (!matchingElement) {
      return 'Error: No coin data found matching the provided name';
    }

    var pricePerformance = matchingElement.quote.USD.price_performance;

    return pricePerformance;
  } catch (e) {
    return 'Error: ' + e.message;
  }
}
