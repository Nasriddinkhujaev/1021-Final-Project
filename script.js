
function fetchBitcoinPrice() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .then(response => response.json())
      .then(data => {
        const price = data.bitcoin.usd;
        document.getElementById('btc-price').innerText = `Bitcoin Price: $${price}`;
      })
      .catch(error => {
        console.log('Error fetching price:', error);
      });
  }
  
  // Fetch price immediately
  fetchBitcoinPrice();
  
  // Update every 10 seconds
  setInterval(fetchBitcoinPrice, 10000);