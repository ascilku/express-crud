const express = require('express')
const router = express.Router()
const {anggotaController} = require('../app/controllers')

router.get('/member',anggotaController.getdata)
router.get('/member/:id',anggotaController.getdata)
router.post('/member',anggotaController.insertData)
router.put('/member/:id',anggotaController.updateData)
router.delete('/member/:id',anggotaController.deleteData)

module.exports = router 