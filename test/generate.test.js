const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('GET /generate endpoint', () => {
  it('should generate an array of 5', () => {
    return supertest(app)
      .get('/generate') // invoke the endpoint
      .query({ n: 5 }) // send the query string ?n=5
      .expect(200)  // assert that you get a 200  OK status
      .expect('Content-Type', /json/)
      .then(res => {
        // make sure you get an array
        expect(res.body).to.be.an('array');
        // array must not be empty
        expect(res.body).to.have.lengthOf.at.least(1);

        expect(res.body).to.include(5);
        //or
        //expect(res.body).to.include.members([1,2,3,4,5]);

        //all in one line - above
        //expect(res.body).to.be.an('array').that.have.members([1,2,3,4,5]);

        //array of objects
        //expect([ { x: 5 } ]).to.deep.include({ x: 5 });

      });
  })
});