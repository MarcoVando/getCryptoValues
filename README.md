# getCryptoValues
A series of js script to get the values of crypto from CoinMarketCap through APIs. These script can be directly imported into GAppsScript to have custom functions in Gsheet to be used

## Scripts descriptions

### Get single coin values
This script search just for the passed coin inside CoinMarketCap and return it's value in USD
Usage Example:
Replace "BTC" with the desired cryptocurrency symbol. Make sure to replace the API key with your actual CoinMarketCap API key.

To call this function from your Google Sheets, you can use:
=GETSINGLECRYPTODATA("BTC")

Parameter Check:
	•	Ensure the coin parameter is provided by the user. If not, return an error message.
	2.	URL Construction:
	•	Define the base URL for the /v1/tools/price-conversion endpoint.
	3.	Headers and Options:
	•	Define the headers including the API key and content type.
	•	Set muteHttpExceptions to true to handle errors gracefully.
	4.	Query Parameters:
	•	Construct the query string with the parameters object. This ensures the request URL is correctly formed.
	5.	Error Handling:
	•	Use a try-catch block to handle potential errors from the UrlFetchApp.fetch request.
	•	Check if the API response contains an error, and if so, return the error message.
	6.	Extracting Data:
	•	Extract the quote.USD.price from the JSON response if no errors are encountered.

