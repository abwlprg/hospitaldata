const express = require('express');
const router = express.Router();
const addressModel = require('../models/address');

router.get('/all', (request, response) => {
    addressModel.find((err, docs) => {
        if (err) {
            console.log('ERROR' + err);
            response.status(500).json({ message: 'Problem when reading the info' });
        } else {
            console.log('The Info was found.');
            response.status(200).json({ message: 'Success!, the info was found' });
        }
    });
    router.get('/:hospitalId', (request, response) => {
        addressModel.findOne({
            _id: request.params.hospitalId
        }, (err, hospital) => {
            if (err) {
                console.log('ERROR ' + err);
                response.status(500).json({ message: 'Problem when reading the Hospital' });
            } else {
                console.log('The Hospital was found.');
                response.status(200).json(hospital);
            }
        });
    });
});

module.exports = router;