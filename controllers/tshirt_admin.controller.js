const {addTshirt, updateTshirt, deleteTshirt }= require('../services/tshirt.service');

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
        const updateData = req.body;
        const updatedTshirt = await updateTshirt(tshirtId, updateData);
        res.status(200).json(updatedTshirt);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeTshirt = async (req, res) => {
    try {
        const tshirtId = req.params.id;
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