const express = require('express');
const router = express.Router();
const addressModel = require('../models/address');

router.put('/:hospitalId', (request, response)=>{
    addressModel.updateOne({
        _id: request.params.hospitalId
    },(err) => {
        if (err) {
            console.log('ERROR ' + err);
            response.status(500).json({ message: 'Problem when deleting the Hospital' });
        } else {
            console.log('The Hospital was removed.');
            response.status(200).json(hospital);
        }
    });
});

module.exports = router;