const mongoose = require("mongoose")

const tshirtSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    neck_type: {
        type: String,
        enum: ["round", "v-neck", "polo"],
        required: true
    },
    sleeve_type: {
        type: String,
        enum: ["short", "long", "sleeveless"],
        required: true
    },
    shape: {
        type: String,
        enum: ["slim fit", "regular fit", "loose fit", "oversized"],
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "unisex"],
        required: true
    },
    size: {
        type: [String],
        enum: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        required: true
    },
    color: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    },
    remainingQuantity: {
        type: Number,
        required: true
    },
    reviews: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,   
            ref: "User",
            required: true
        },                  
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true
        },
        comment: {  
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
}, { timestamps: true })

const TShirt = mongoose.model("TShirt", tshirtSchema)

module.exports = TShirt;