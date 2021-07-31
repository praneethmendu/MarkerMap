'use strict';

var utils = require('../utils/writer.js');
var Place = require('../service/PlaceService');

module.exports.addPlace = function addPlace (req, res, next) {
  var body = req.swagger.params['body'].value;
  Place.addPlace(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePlace = function deletePlace (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  Place.deletePlace(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllPlaces = function getAllPlaces (req, res, next) {
  Place.getAllPlaces()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPlaceById = function getPlaceById (req, res, next) {
  var uuid = req.swagger.params['uuid'].value;
  Place.getPlaceById(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePlace = function updatePlace (req, res, next) {
  var body = req.swagger.params['body'].value;
  Place.updatePlace(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
