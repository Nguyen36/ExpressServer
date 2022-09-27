const express = require('express')
const svController = require('../controllers/svController')
const route = express.Router()

route.get('/',svController.loadSv)
route.post('/19110408/:id',svController.addSv)
route.get('/19110408/:id',svController.loadSvId)
route.get('/message/:id',svController.aboutSv)
route.get('/message/',svController.aboutSv)
module.exports = route