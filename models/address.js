const mongoose = require('mongoose');

// Mongoose Schema

const customSchema = new mongoose.Schema({
    facility_name: {
        type: String,
        required: true
    },
    facility_type: {
        type: String,
        required: true
    },

    borough: {
        type: String,
        required: true
    },
    address: {
		street_1: {
			type: String,
			default: '',
		},
		street_2: {
			type: String,
			default: '',
		},
		city: {
			type: String,
			default: '',
		},
		state: {
			type: String,
			default: '',
		},
		zip: {
			type: String,
			default: '',
		}
	},
    phoneNumber : {
        type: Number,
	},
	zipCode: {
		type: Number
	}
});

module.exports = mongoose.model('address', customSchema);