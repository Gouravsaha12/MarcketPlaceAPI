const {addTshirt, updateTshirt, deleteTshirt }= require('../services/tshirt.service');
const Tshirt = require('../models/tshirt');

const createTshirt = async (req, res) => {
    try {
        const tshirtData = req.body;
        const newTshirt = await addTshirt(tshirtData, req.user.id);
        res.status(201).json(newTshirt);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } 
};

const modifyTshirt = async (req, res) => {
    try {
        const tshirtId = req.params.id;

        const ts = await Tshirt.findById(tshirtId);
        if (!ts) {
            return res.status(404).json({ message: "T-shirt not found" });
        }

        if(ts.seller.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized to modify this T-shirt" });
        }

        const updateData = req.body;
        const updatedTshirt = await updateTshirt(tshirtId, updateData, req.user.id);
        res.status(200).json(updatedTshirt);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeTshirt = async (req, res) => {
    try {
        const tshirtId = req.params.id;
        const ts = await Tshirt.findById(tshirtId);
        if (!ts) {
            return res.status(404).json({ message: "T-shirt not found" });
        }

        if(ts.seller.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized to delete this T-shirt" });
        }

        await deleteTshirt(tshirtId);
        res.status(200).json({ message: "T-shirt deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createTshirt,
    modifyTshirt,
    removeTshirt
};