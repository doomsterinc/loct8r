var express = require('express');
var router = express.Router();
var ctrlLocations = require('..controllers/locations');
var ctrReviews = require('..controllers/reviews');
/* Locations */
router.get('/locations', ctrlLocations.locationsListByDistance);
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
router.put('/locations/:locationsid', ctrlLocations.locationsUpdateOne);
router.delete('/locations/:locationsid', ctrlLocations.locationDeleteOne);
// Reviews
