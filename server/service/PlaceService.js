'use strict';

//import { ReJSON } from 'redis-modules-sdk';
const { ReJSON } = require('redis-modules-sdk')
const { v4: uuid } = require('uuid');
const ResponsePayload = require('../utils/reponsePayload').default
//import { v4 as uuid } from 'uuid';

const client = new ReJSON({
  host: 'localhost',
  port: 6379
});

//Create object if it does not exist
client.connect().then(_ => {
  client.type('places').then(placesType => {
    if (!placesType) client.set('places', '.', '{}')
      .then(setEmptyPlaces => {
        if (setEmptyPlaces == 'OK') console.log('empty places DB object created');
      })
  })
})

/**
 * Add a new place
 * 
 *
 * body Place place object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addPlace = function (body) {
  return new Promise(function (resolve, reject) {
    let new_uuid = '_' + uuid().replaceAll('-', '_')
    client.set('places', new_uuid, JSON.stringify(body))
      .then(addPlaceResp => {
        console.log(addPlaceResp, new_uuid);
        if (addPlaceResp == "OK") {
          resolve(new_uuid.slice(1));
        } else {
          reject(new ResponsePayload(400, addPlaceResp))
        }
      }).catch(err => {
        console.log(new_uuid, err);
        reject(new ResponsePayload(400, err.message))
      })
  });
}


/**
 * Deletes a place
 * 
 *
 * uuid Long place id to delete
 * no response value expected for this operation
 **/
exports.deletePlace = function (uuid) {
  return new Promise(function (resolve, reject) {
    client.del('places', '_' + uuid)
      .then(delPlaceResp => {
        if (delPlaceResp == "1") {
          resolve();
        } else {
          reject(new ResponsePayload(404, "path not found"))
        }
      })
      .catch(err => reject(new ResponsePayload(400, err.message)))
  });
}


/**
 * get all places
 * Returns all places
 *
 * returns Places
 **/
exports.getAllPlaces = function () {
  return new Promise(function (resolve, reject) {
    client.get('places', '.')
      .then(allPlacesResp => {
        let rawObj = JSON.parse(allPlacesResp);
        resolve(Object.keys(rawObj).map(key => {
          let entry = rawObj[key]
          entry.UUID = key.slice(1)
          return entry
        }))
      })
      .catch(err => reject(new ResponsePayload(400, err.message)))
  });
}


/**
 * Find place by ID
 * Returns a single place
 *
 * uuid Long ID of place to return
 * returns Place
 **/
exports.getPlaceById = function (uuid) {
  return new Promise(function (resolve, reject) {
    client.get('places', '_' + uuid)
      .then(getPlaceResp => {
        let place = JSON.parse(getPlaceResp)
        place.UUID = uuid
        resolve(place);
      })
      .catch(err => reject(new ResponsePayload(400, err.message)))
  });
}


/**
 * Update an existing place
 *
 * body Place place object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updatePlace = function (body) {
  return new Promise(function (resolve, reject) {
    client.set('places', `._${body.UUID}.name`, `"${body.name}"`)
      .then(_ => {
        if (typeof (body.image) != "undefined") return client.set('places', `._${body.UUID}.image`, `"${body.image}"`)
        return null
      })
      .then(_ => resolve())
      .catch(err => reject(new ResponsePayload(400, err.message)))
  });
}



