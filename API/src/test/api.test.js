'use strict'

const request = require('supertest')

const app = require('../index');

describe('Request weather data Current', function() {
    it('Request weather data 200', function(done) {
      request(app)
        .post('/api/weather/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .send({
          'city': 'Buenos aires',
          'country': 'ar'          
        })
        .expect(200, done)
    })
  }),
  describe('Request weather data facecast', function() {
    it('Request weather data 200', function(done) {
      request(app)
        .post('/api/weather/facecast')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .send({
          'city': 'Buenos aires',
          'country': 'ar'          
        })
        .expect(200, done)
    })
})
