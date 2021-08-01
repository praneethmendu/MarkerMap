# Fa\*\* assignment

Hi Fa\*\*, thank you for this opportunity. Hope you like my code.

## database

I am using Redis as a document style database to store my JSON data. This is very fast and can easily scaled to have indexing, querying etc.

As I am saving JSON data I cannot use a vanilla redis instance and need a seperate module. If you use docker settting up is trivial.

    docker run -p 6379:6379 --name redis-redisjson redislabs/rejson:latest

If this is not a possibility, you can find instructions [here](https://github.com/RedisJSON/RedisJSON)

## backend

My preferd way to create any service is to start with a api spec and generate lots of the backend boiler-plate code. I am using swagger for this purpose. To run the node server:

    cd server
    npm i
    node index.js

server : http://localhost:4343
docs : http://localhost:4343/docs

## frontend

The frontend is made using react with typescript, I used leaflet for the maps. To serve :

    cd front
    yarn
    yarn run start

To run the cyress test run

    yarn run cypress run

the test assumes an empty DB so please make sure there are no markers before running
