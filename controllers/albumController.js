const Album = require ('../Models/Album')

const getAllAlbums = async (req, res) => {
  const albums = await Album.find()
  try {
    if (albums.length === 0) return res.status(500).json(albums)
    return res.status(200).json(albums)
  } catch (error) {
    return res.status(500).json({message: "Could not retrieve albums"})
  }
}

const getAlbumById = async (req, res) => {
  const {id} = req.params;
  const album = await Album.findById(id)
  try {
    return res.status(200).json(album)
  } catch (error) {
    return res.status(500).json({message: "Could not retrieve album by ID"})
  }
}

const postAlbum = async (req, res) => {
  const album = await Album.create(req.body)
  try {
    return res.status(201).json(album)
  } catch (error) {
    return res.status(500).json({message: "Could not create album"})
  }
}

const putAlbum = async (req, res) => {
  const {id} = req.params;
  const album = await Album.findByIdAndUpdate(id, req.body, {new: true})
  try {
    return res.status(202).json(album)
  } catch (error) {
    return res.status(500).json({message: "Could not update album"})
  }
}

const deleteAlbum = async (req, res) => {
  const {id} = req.params;
  await Album.findByIdAndDelete(id)
  try {
    return res.json({messsage: "Album deleted sucessfully"})
  } catch (error) {
    return res.status(500).json({message: "Could not delete album"})
  }
}

module.exports = {
  getAllAlbums,
  getAlbumById,
  postAlbum,
  putAlbum,
  deleteAlbum
}