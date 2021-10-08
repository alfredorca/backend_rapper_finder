const express = require('express');
const {getAllAlbums, getAlbumById, postAlbum, putAlbum, deleteAlbum} = require('../controllers/albumController')

const router = express.Router();

router.get('/', getAllAlbums)

router.get('/album/:id', getAlbumById);

router.post('/album', postAlbum)

router.put('/album/:id', putAlbum);

router.delete('/album/:id', deleteAlbum);

module.exports = router;