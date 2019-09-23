class AnggotaController{
    async getdata(req, res){
        return res.status(200).send({
            message : 'Data Anggota Belum ada'
        })
    }


}

const anggotaController = new AnggotaController()
module.exports =anggotaController