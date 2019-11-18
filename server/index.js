const { app } = require('./app');
const PORT = 3000;
const { db, Person, Dish } = require('../db');

async function syncAndSeedDatabase() {
  try {
    await db.sync({ force: true });
    const people = [
      { name: 'Jon', isAttending:true },
      { name: 'Daenerys', isAttending: false  },
      { name: 'Arya', isAttending: true },
      { name: 'Tyrion', isAttending: true },
    ];
    const [ Jon, Daenerys, Arya, Tyrion ] = await Promise.all(people.map(person => Person.create(person)));
    
    const dishes = [
      { name: 'dragonOmlette', description: "dragon egg omelette" },
      { name: 'poisonedWine', description: "wine that has poison in it" },
      { name: 'iceIceBaby', description:"ice walker meat" },
      { name: 'poop', description: "cersai lannister's corpse" },
    
    ];

    const [dragonOmlette, poisonedWine, iceIceBaby, poop] = await Promise.all(dishes.map(dish => Dish.create(dish)));

  } catch (e) {
    console.log(e);
  }

  console.log('done seeding and associating!');
}

syncAndSeedDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
