const Memorie = require("../models/Memorie");

const getAllMemories = async (req, res) => {
  try {
    const memorie = await Memorie.find();
    res.json(memorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMemorieById = async (req, res) => {
  try {
    const memorie = await Memorie.findById(req.params.id);
    if (!memorie) {
      return res.status(404).json({
        message: 'Memorie not found'
      });
    }
    res.json(memorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMemorie = async (req, res) => {
  const memorie = new Memorie({
    title: req.body.title,
    content: req.body.content,
    creationDate: req.body.creationDate,
    imgUrl: req.body.imgUrl
  });

  try {
    const newMemorie = await memorie.save();
    res.status(201).json(newMemorie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateMemorie = async (req, res) => {
  try {
    const memorie = await Memorie.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!memorie) {
      return res.status(404).json({ message: 'Memorie not found' });
    }
    res.json(memorie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMemorie = async (req, res) => {
  try {
    const memorie = await Memorie.findByIdAndDelete(req.params.id);
    if (!memorie) {
      return res.status(404).json({ message: 'Memorie not found' });
    }
    res.status(200).json({ message: 'Memorie deleted successfully' });  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMemories,
  getMemorieById,
  createMemorie,
  updateMemorie,
  deleteMemorie
};
