'use strict';
module.exports = (sequelize, DataTypes) => {
  const anggota = sequelize.define('anggota', {
    nri: DataTypes.STRING,
    nama: DataTypes.STRING,
    angkatan: DataTypes.STRING,
    nohp: DataTypes.STRING,
    alamat: DataTypes.TEXT
  }, {});
  anggota.associate = function(models) {
    // associations can be defined here
  };
  return anggota;
};