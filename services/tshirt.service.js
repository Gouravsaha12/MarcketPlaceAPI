const Tshirt = require("../models/tshirt");

const addTshirt = async (tshirtData, sellerID) => {
    const tshirt = new Tshirt({ ...tshirtData, seller: sellerID });
    return await tshirt.save();
}

const updateTshirt = async (tshirtId, updateData, sellerID) => {
    return await Tshirt.findByIdAndUpdate(tshirtId, {...updateData, seller: sellerID}, { new: true });
}

const deleteTshirt = async (tshirtId) => {
    return await Tshirt.findByIdAndDelete(tshirtId);
}

module.exports = {
    addTshirt,
    updateTshirt,
    deleteTshirt
};