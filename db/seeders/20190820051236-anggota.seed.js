'use strict';

  const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('anggota', [{
      nri : '123456789',
      nama : 'Asrarul Ikram',
      angkatan : 'Kedua',
      nohp : bcrypt.hashSync('082293321251',bcrypt.genSaltSync(14)),
      alamat : 'BTN Saumata Indah Blok I no.16 Romang Polong, Gowa',
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      nri : '34562347345',
      nama : 'Test',
      angkatan : 'Test',
      nohp : bcrypt.hashSync('082293321251',bcrypt.genSaltSync(14)),
      alamat : 'Test',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('members', [{
      nri :'123456789'
    }])
  }
};
