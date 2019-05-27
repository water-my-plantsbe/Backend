
const faker = require('faker');
const plants = [
      'Amaryllis',
      'Aster',
      'Anemone',
      'Azalea',
      'Begonia',
      'Bluebell',
      'Babys Breath',
      'Chrysanthemum',
      'Clover',
      'Crocus',
      'Freesia',
      'Gladiola',
      'Lily',
      'Daisy',
      'Bee Balm',
      'Bergamot',
      'Bell Flower',
      'Bird of Paradise',
      'Bottlebrush',
      'Calla Lily',
      'Columbine',
      'Orchid',
      'Daffodil',
      'Primrose',
      'Forget-Me-Not',
      'Foxglove',
      'Iris',
      'Lilac',
      'Marjoram',
      'Orange Blossom',
      'Peach Blossom',
      'Petunia',
      'Rosemary',
      'Sage',
      'Thyme',
      'Thistle',
      'Hyacinth',
      "Lady's Slipper",
      'Amaranthus',
      'Marigold',
      'Mimosa',
      'Peony',
      'Rose',
      'Holly',
      'Lavender',
      'Snapdragon',
      'Carnation',
      'Sunflower',
      'Tansy',
      'Tulip',
      'Buttercup',
      'Zinnia'
];
    
const getRandomPlantName = () => {
  return plants[Math.floor(Math.random() * plants.length)];
};
    

const seeds = [];
for (let i = 1; i < 50; i++) {
  seeds.push({
    user_id: Math.floor(Math.random() * 50 + 1),
    name: getRandomPlantName(),
  });
}

exports.seed = function(knex, Promise) {
      return knex('plants')
      //.truncate()
      .then(function(){
      return knex('plants').insert([...seeds]);
      })
};

    