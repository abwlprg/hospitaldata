const express = require('express');
const router = express.Router();
const addressModel = require('../models/address');

router.post('/', (request, response)=>{
    const input = request.body;

    const newDocument = new addressModel({
        facility_name: input.facility_name,
        facility_type: input.facility_type,
        borough: input.borough,
        phoneNumber: input.phoneNumber,
        address: input.address
    });

    //Saving the information inside the DB
    newDocument.save((err, doc)=>{
        if(err){
            console.log('ERROR' + err);
            response.status(500).json({message: 'Problem when saving the info'});
        } else{
            console.log('The Info was saved.');
            response.status(200).json({message: 'Success!, the info was saved'});
        }
    });
});

module.exports = router;