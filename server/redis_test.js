const { ReJSON } = require('redis-modules-sdk')

const client = new ReJSON({
    host: 'localhost',
    port: 6379
});

client.connect()
    .then(_ => client.set('places', '_werg3_46g35_g3tg3', JSON.stringify({
        "image": "http://example.com/aeiou",
        "latitude": 0.8008281904610115,
        "name": "name",
        "longitude": 6.027456183070403
    })))
    .then(addPlaceResp => {
        console.log(addPlaceResp);
        return client.get('places', '.')
            .catch(err => console.log(err.message))
    })
    .then(allPlacesResp => {
        console.log(allPlacesResp);
    })
    .catch(err => console.log(err.message))
