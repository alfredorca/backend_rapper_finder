const Rapper = require('../Models/Rapper')

const getAllRappers = async (req, res) => {
  const rappers = await Rapper.find().populate('albums')
  try {
    if (rappers.length === 0) return res.status(500).json(rappers)
    return res.status(200).json(rappers)
  } catch (error) {
    return res.status(500).json({message: "Could not retrieve users"})
  }
}

const getRapperbyId = async (req, res) => {
  const {id} = req.params
  const rapper = await Rapper.findById(id).populate('albums')
  try {
    return res.status(200).json(rapper)
  } catch (error) {
    return res.status(500).json({message: "Could not retrieve user by ID"})
  }
}

const createRapper = async (req, res) => {
  const rapper = await Rapper.create(req.body);
  try {
    res.status(201).json(rapper)
  } catch (error) {
    
  }
}

const putRapper = async (req, res) => {
  const {id} = req.params;
  const rapper = await Rapper.findByIdAndUpdate(id, req.body, {new: true})
  try {
    return res.status(202).json(rapper)
  } catch (error) {
    return res.status(500).json({message:"Could not update rapper"})
  }
}

const deleteRapper = async (req, res) => {
  const {id} = req.params;
  await Rapper.findByIdAndDelete(id)
  try {
    return res.json({message: "Rapper succesfully deleted"})
  } catch (error) {
    return res.status(500).json({message:"Could not delete rapper"})
  }
}

module.exports= {
  getAllRappers,
  getRapperbyId,
  createRapper,
  putRapper,
  deleteRapper
}