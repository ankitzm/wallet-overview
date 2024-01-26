async function getAllCrypto() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const allCrypto = await fetch("https://api.coingecko.com/api/v3/coins/list?include_platform=true", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    return allCrypto
}

export default getAllCrypto