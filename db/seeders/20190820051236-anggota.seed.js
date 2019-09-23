'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('anggota', [{
      nri : '123456789',
      nama : 'Asrarul Ikram',
      angkatan : 'Kedua',
      nohp : '082293321251',
      alamat : 'BTN Saumata Indah Blok I no.16 Romang Polong, Gowa',
      createdAt : new Date(),
      updatedAt : new Date(),
    },{
      nri : '34562347345',
      nama : 'Test',
      angkatan : 'Test',
      nohp : '234567',
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
