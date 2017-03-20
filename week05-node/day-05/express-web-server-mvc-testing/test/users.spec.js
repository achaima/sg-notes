/* global describe, it, beforeEach */

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var expect = chai.expect;
var request;

chai.should();
chai.use(chaiHttp);

// We are looking for HTML that looks like this:
// <a href="/users/58cbb8e616f8b0228f71b315">
// We can the extract the user ID from the `href` attribute using a regex.
function getFirstUserIdFromUserListHTML(html) {
  var regEx = /\/users\/[0-9a-f]+/;
  var result = regEx.exec(html)[0];
  var pathElements = result.split('/');

  return pathElements[2];
}

function generateUniqueFirstName() {
  return 'firstName' + Math.random();
}
console.log('RANDOMN FIRST NAME: ', generateUniqueFirstName);

//----------------------------------------------------------------------------
describe('Users', function () {
  beforeEach(function () {
    request = chai.request(app);
  });
  //before I run any one of the tests I want to initialise something ot a known tests
  //before we run any one of these it functions we are going to run these anonymous function

  describe('GET', function () {
    it('should return error for invalid URL GET', function (done) {
      request
        .get('/invalid_url')
        .end(function (err) {
          expect(err).not.to.be.null;
          done();
        });
    });
    it('should list all users for GET /users', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          expect(err).to.be.null;
          res.should.have.status(200);
          res.should.be.html;
          res.text.should.match(/User list/);
          done();
        });
    });
  });

  //-----------------------UPDATE TESTING--------------------------------------

  describe('PUT', function () {
    it('should return error for non-existent user id', function (done) {
      request
        .put('/users/non-existent-user-id')
        .end(function (err, res) {
          res.should.have.status(404);
          // console.log('request put:',request.put);
          // console.log('requestEND:', request.end);
          done();
        });
    });

    //
    it('should return updated result for existing user', function (done) {
      request
        .get('/users/')
        .end(function (err, res) {
          var userId = getFirstUserIdFromUserListHTML(res.text);
          // console.log('COMPLICATED:', getFirstUserIdFromUserListHTML);

          request
          .put('/users/'+ userId)
          .set('content-type', 'application/x-www-form-urlencoded') // set the form encoding type
          .send({firstName: 'testFirstName', lastName: 'testLastName', email: 'testEmail'})
            // .put('/users/:id')

            .end(function (err, res) {
              res.should.have.status(200);
              res.text.should.match(/testFirstName/);
              res.text.should.match(/testLastName/);
              done();

            });
        });
    });
  });

  //----------------------DELETE TESTING---------------------------------------

  describe('DELETE', function () {
    it('should return error for non-existent user id', function (done) {
      request
        .delete('/users/non-existent-user-id')
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it('should return correct result for existing user', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          var userId = getFirstUserIdFromUserListHTML(res.text);

          request
            .delete('/users/' + userId)
            .end(function (err, res) {
              res.should.have.status(200);
              done();
            });
        });
    });
  });

//----------------------CREATE TESTING---------------------------------------

  console.log('CREATE TESTING');
  //KW:only - want to focus on this subset of tests
  describe('POST', function () {
    it('should return error when no firstName blank', function (done) {
      request
      .post('/users')
      .set('content-type', 'application/x-www-form-urlencoded') // set the form encoding type
      .send({firstName: '', email: 'testpostEmail'})
      .end(function(err, res) {
        var jsonResponse = JSON.parse(res.text);

        res.should.have.status(400);
        expect(jsonResponse).to.be.an('array');
        expect(jsonResponse.length).to.equal(1);
        console.log('JSONRESPONSE: ', jsonResponse[0]);
        expect(jsonResponse[0].path).to.equal('firstName');
        // console.log('RESPONSE: ', expect(jsonResponse[0].path).to.equal('firstName'));
        done();
      });
    });
    it('should return error when no email provided', function (done) {
      request
      .post('/users')
      .set('content-type', 'application/x-www-form-urlencoded') // set the form encoding type
      .send({firstName: 'testpostFirstName', email: ''})
      .end(function(err, res) {
        var jsonResponse = JSON.parse(res.text);

        res.should.have.status(400);
        expect(jsonResponse).to.be.an('array');
        expect(jsonResponse.length).to.equal(1);
        console.log('JSONRESPONSE: ', jsonResponse[1]);
        expect(jsonResponse[0].path).to.equal('email');

        //checking for 4 things:
        //1. status code
        //2. that JSON response is an array
        //3. Array should only have length of 1
        //4. should be equal to value defined to property to get error
        res.should.have.status(400);
        done();
      });
    });
    it.only('should create new user when input data is valid', function (done) {
      var testFirstName = generateUniqueFirstName();
      var firstNameRegExp = new RegExp(testFirstName);
      request
      .post('/users')
      .set('content-type', 'application/x-www-form-urlencoded') // set the form encoding type
      .send({firstName: testFirstName, email: 'testEmail'})
      .end(function(err, res) {
        res.should.have.status(200);
        res.text.should.match(firstNameRegExp);

        // console.log('Should match:',res.text.should.match(firstNameRegExp);
        // console.log('RESTEXT:', res.text);
        done();
      });
    });
  });






//-----------------------------------------------------

});
