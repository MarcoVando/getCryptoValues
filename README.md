# getCryptoValues
A series of js script to get the values of crypto from CoinMarketCap through APIs. These script can be directly imported into GAppsScript to have custom functions in Gsheet to be used

## Scripts descriptions

### Get single coin values
This script search just for the passed coin inside CoinMarketCap and return it's value in USD
Usage Example:
Replace "BTC" with the desired cryptocurrency symbol. Make sure to replace the API key with your actual CoinMarketCap API key.

To call this function from your Google Sheets, you can use:
 `` =GETSINGLECRYPTODATA("BTC")``

Explanation:
Parameter Check:
		Ensure the coin parameter is provided by the user. If not, return an error message.
	2.	URL Construction:
		Define the base URL for the /v1/tools/price-conversion endpoint.
	3.	Headers and Options:
		Define the headers including the API key and content type.
		Set muteHttpExceptions to true to handle errors gracefully.
	4.	Query Parameters:
		Construct the query string with the parameters object. This ensures the request URL is correctly formed.
	5.	Error Handling:
		Use a try-catch block to handle potential errors from the UrlFetchApp.fetch request.
		Check if the API response contains an error, and if so, return the error message.
	6.	Extracting Data:
		Extract the quote.USD.price from the JSON response if no errors are encountered.

### get coin performances

Usage Example:

To call this function from your Google Sheets, you can use:
 ``=GETPRICEPERFORMANCE("BTC", "Bitcoin") ``

Explanation:
	1.	Parameter Check:
		Ensure symbol and name parameters are provided by the user. If not, return an error message.
	2.	URL Construction:
		Define the base URL for the /v2/cryptocurrency/price-performance-stats/latest endpoint.
	3.	Headers and Options:
		Define the headers including the API key and content type.
		Set muteHttpExceptions to true to handle errors gracefully.
	4.	Query Parameters:
		Construct the query string with the symbol parameter.
	5.	Error Handling:
		Use a try-catch block to handle potential errors from the UrlFetchApp.fetch request.
		Check if the API response contains an error, and if so, return the error message.
	6.	Extracting Data:
		Iterate through json.data to find the entry with the matching name.
		If a matching element is found, extract the price_performance from the quote.USD object in the JSON response.
		If no matching element is found, return an error message.
	7.	Return the Price Performance:
		If everything is successful, return the price performance statistics.


### Get crypto data

Usage Example:

To call this function from your Google Sheets, you can use:

`` =GETCRYPTODATA("BTC", "Bitcoin", "2022-01-01", "2022-01-31") ``
Explanation:

	1.	Parameter Check:
	 Ensure symbol, name, startDate, and endDate parameters are provided by the user. If not, return an error message.
	2.	URL Construction:
	 Define the base URL for the /v2/cryptocurrency/quotes/historical endpoint.
	3.	Headers and Options:
		Define the headers including the API key and content type.
		Set muteHttpExceptions to true to handle errors gracefully.
	4.	Query Parameters:
		Construct the query string with the symbol, startDate, and endDate parameters.
	5.	Error Handling:
		Use a try-catch block to handle potential errors from the UrlFetchApp.fetch request.
		Check if the API response contains an error, and if so, return the error message.
	6.	Extracting Data:
		Iterate through json.data to find the entry with the matching name.
		If a matching element is found, extract the quote.USD.price from the historical quotes in the JSON response.
		If no matching element is found, return an error message.
	7.	Return the Prices:
		If everything is successful, return the array of historical prices.
