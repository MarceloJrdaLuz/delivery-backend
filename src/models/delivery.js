import mongoose  from "mongoose";

const schema = new mongoose.Schema({
    neighborhood: {
        type: String,
        required: true,
        unique: true 
    },
    valueDelivery: {
        type: Number,
        required: true,
    },
}, {
    timestamps:true,
})

export default mongoose.model("Delivery", schema)