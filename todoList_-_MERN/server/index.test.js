const assert = require('assert');
const request = require('supertest');
const app = require('./index');
const baseURL = 'http://localhost:8000/task';

/*
(node:91307) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
Connected to cluster Cluster0
Listening on 8000...
Retrieved from db!
  ✓ GET Existing Data - should return OK status (500ms)
Saved to db!
  ✓ POST New data - should return OK status
Removed from db!
  ✓ POST Deleted Data - should return OK status

  3 passing (542ms)

 */

it('GET Existing Data - should return OK status', function() {
    return request(app)
        .get(baseURL)
        .then(function(response){
            assert.equal(response.status, 200);
        })
});
it('POST New data - should return OK status', function(done) {
    request(app)
        .post('/task')
        .send({
            "task": "Clean room",
            "status": "COMPLETED"
        })
        .set('Content-Type', 'application/json')
        .then(function(response){
            assert.equal(response.status, 200);
            done();
        })
});
it('POST Deleted Data - should return OK status', function(done) {
    request(app)
        .post('/task/5f4c8ea10cc37371c192c6e9')
        .set('Content-Type', 'application/json')
        .then(function(response){
            assert.equal(response.status, 200);
        });
    done();
});
