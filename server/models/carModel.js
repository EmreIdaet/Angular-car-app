const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const carSchema = new mongoose.Schema({
    carName: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        require: true
    },
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Car', carSchema);
