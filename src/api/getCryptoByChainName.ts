async function getCrptoByChainName(protocol: string) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const CryptoByChain = fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=${protocol}-ecosystem&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=24h`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    console.log(CryptoByChain);
}

export default getCrptoByChainName;