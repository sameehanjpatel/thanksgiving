// tests for /api/dishes

// supertest is a module that allows us to test our express server
const request = require('supertest');
const { app } = require('./../server/app.js');
const { db, Dish, Person } = require('./../db/index.js');

beforeEach(async done => {
  // wipe the db before each test block
  await db.sync({ force: true });
  done();
});

afterAll(async done => {
  // close the db connection upon completion of all tests
  await db.close();
  done();
});
xdescribe('/api/dishes routes', () => {
  // its up to you to create the test conditions for /api/dishes
  // add as many tests as you feel necessary to fully cover each routes functionality
  xdescribe('GET to /api/dishes', () => {
    it('does a test!', () => {
      return null;
    });
  });

  xdescribe('GET to /api/dishes/:id', () => {
    it('does a test!', () => {
      return null;
    });
  });

  xdescribe('POST to /api/dishes/', () => {
    it('does a test!', () => {
      return null;
    });
  });

  xdescribe('PUT to /api/dishes/:id', () => {

    //Put edits something
    //TODO: 
    it('does a test!', () => {
      return null;
    });
  });

  xdescribe('DELETE to /api/dishes/:id', () => {
    it('does a test!', () => {
      fail();
    });
  });
});