async function getStats(chain: string) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const statsData = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${chain}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=4`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    console.log(statsData);
}

export default getStats