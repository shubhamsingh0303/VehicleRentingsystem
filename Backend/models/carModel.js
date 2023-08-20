const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: false,
    },
    VehicleName: {
        type: String,
        required: true,
    },
    fuelType: {
        type: String,
        required: true,
    },
    KMPL: {
        type: String,
        required: true,
    },
    TransMatin: {
        type: String
    },
    Units: {
        type: String
    },
    PricePerDay: {
        type: String,
        required: true,
    },
    photo: {
        public_id: {
            type: String,
            required: true,
        },
        secure_url: {
            type: String,
            required: true,
        },
    },
    category: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
},
 { timestamps: true });

module.exports = mongoose.model("Cars", carSchema);