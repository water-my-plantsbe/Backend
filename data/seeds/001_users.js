const bcrypt = require('bcryptjs');
const pass = bcrypt.hashSync('pass');
const faker = require('faker');

const seeds = [
  { id: 1,
    username: 'md',
    email: 'kki@gmail',
    password: pass,
    phone: '347412334'
  },
];
for (let i = 1; i < 50; i++) {
  seeds.push({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: pass,
    phone: faker.phone.phoneNumber('+1##########')
  });
}

exports.seed = function(knex, Promise) {
    return knex('plants')
    .then(function(){
      return knex('users').insert([...seeds]);
    })
};
