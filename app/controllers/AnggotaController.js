const { anggota } = require('../models')
class AnggotaController{
    async insertData(req, res){
        //set diagnostic
        req.start = Date.now();
        let status;
        let message;
        let dtAnggota
        let id


        // if(req.body.password == req.body.confirmPassword)
        const item = {
            nri: req.body.nri,
            nama: req.body.nama,
            angkatan: req.body.angkatan,
            nohp: req.body.nohp,
            alamat: req.body.alamat
        }
        dtAnggota= await anggota.create(item)
        status = '200'
        //get diagnostic
        let time = Date.now() - req.start;
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        const data = {
            diagnostic:{
               
                memoryUsage : `${Math.round(used * 100) / 100} MB`,
                elapsedTime : time,
                timestamp : Date(Date.now()).toString(),
            }
        }
        return res.status(status).json(data)
    }
    async getdata(req, res){
        //set diagnostic
        req.start = Date.now();
        let status;
        let message;
        let dtAnggota

        
        //get data
        if(req.params.id == null){
             dtAnggota = await anggota.findAll({order: [['id','ASC']]})
        }else{
            dtAnggota = await anggota.findOne({where: {id:req.params.id},order: [['id','ASC']]})
        }
        if (!dtAnggota){
            status = '404'
            message = 'Data Member Tidak Ditemukan'
        }else{
            status = '200'
            message = 'Sukses'
        }
        // .then(angg=>{
        //     res.json(angg)
        // })
        // return res.status(200).send({
        //     message : 'Data Anggota Belum ada'
        // })

        //get diagnostic
        let time = Date.now() - req.start;
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        const data = {
            diagnostic:{
                status : status,
                message : message,
                memoryUsage : `${Math.round(used * 100) / 100} MB`,
                elapsedTime : time,
                timestamp : Date(Date.now()).toString(),
            },
            result: dtAnggota
        }
        return res.status(status).json(data)
    }

    // async getOnedata(req, res){
    //     //set diagnostic
    //     req.start = Date.now();
    //     let status;
    //     let message;

    //     //get data
    //     const dtAnggota = await anggota.findAll({
    //         where: ['id'],        
    //         order: [['id','ASC']]
    //     })
    //     if (!dtAnggota){
    //         status = '404;'
    //         message = 'Data Member Tidak Ditemukan'
    //     }else{
    //         status = '200'
    //         message = 'Sukses'
    //     }
    //     // .then(angg=>{
    //     //     res.json(angg)
    //     // })
    //     // return res.status(200).send({
    //     //     message : 'Data Anggota Belum ada'
    //     // })

    //     //get diagnostic
    //     let time = Date.now() - req.start;
    //     const used = process.memoryUsage().heapUsed / 1024 / 1024;
    //     const data = {
    //         diagnostic:{
    //             status : status,
    //             message : message,
    //             memoryUsage : `${Math.round(used * 100) / 100} MB`,
    //             elapsedTime : time,
    //             timestamp : Date(Date.now()).toString(),
    //         },
    //         result: dtAnggota
    //     }
    //     return res.status(status).json(data)
    // }

    async updateData(req, res){
        req.start = Date.now();
        let status;
        let message;
        let id
        let dtAnggota
        const update = {
            nri : req.body.nri,
            nama : req.body.nama,
            angkatan : req.body.angkatan,
            alamat : req.body.alamat,
            nohp : req.body.nohp,
        }

        if(req.params.id == null){
            status = '403'
           message = 'ID harus tercantumkan'
           id = null;
       }else{
           dtAnggota = await anggota.update(update,{where: {id:req.params.id}})
       }
       if (!dtAnggota){
           status = '404'
           message = 'Data Member Tidak Ditemukan'
           id = null
       }else{
           status = '200'
           message = 'Sukses'
           id = dtAnggota.id
       }

        //get diagnostic
        let time = Date.now() - req.start;
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        const data = {
            diagnostic:{
                status : status,
                message : message,
                memoryUsage : `${Math.round(used * 100) / 100} MB`,
                elapsedTime : time,
                timestamp : Date(Date.now()).toString(),
            },
            result: id
        }
        return res.status(status).json(data)

    }
    async deleteData(req, res){
        //set diagnostic
        req.start = Date.now();
        let status;
        let message;
        let dtAnggota  
        let id

        if(req.params.id == null){
            status = '403'
           message = 'ID harus tercantumkan'
           id = null;
       }else{
           dtAnggota = await anggota.destroy({where: {id:req.params.id}})
       }
       if (!dtAnggota){
           status = '404'
           message = 'Data Member Tidak Ditemukan'
           id = null
       }else{
           status = '200'
           message = 'Sukses'
           id = dtAnggota.id
       }


        //get diagnostic
        let time = Date.now() - req.start;
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        const data = {
            diagnostic:{
                status : status,
                message : message,
                memoryUsage : `${Math.round(used * 100) / 100} MB`,
                elapsedTime : time,
                timestamp : Date(Date.now()).toString(),
            },
            result: id
        }
        return res.status(status).json(data)
    }


}

const anggotaController = new AnggotaController()
module.exports =anggotaController