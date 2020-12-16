const express = require('express');
const router = express.Router();
const addressModel = require('../models/address');

router.delete('/:hospitalID', (request, response)=>{
    addressModel.deleteOne({
        _id: request.params.hospitalId
    },(err) => {
        if (err) {
            console.log('ERROR ' + err);
            response.status(500).json({ message: 'Problem when updating the Hospital' });
        } else {
            console.log('The Hospital was updated.');
            response.status(200).json(hospital);
        }
    });
});

module.exports = router;