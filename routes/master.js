const express = require('express')
const router = express.Router()
const {anggotaController} = require('../app/controllers')

router.get('/',anggotaController.getdata)

module.exports = router