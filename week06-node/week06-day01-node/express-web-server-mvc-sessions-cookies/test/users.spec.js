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
  console.log('REGEX: ', regEx);
  //Regular expression so the forward slashes is to cancel the back slashes
  //Allow users then the next should part of the id could be anything between 0-9a-f
  //but why the +. I think it's to add the forward slash
  var result = regEx.exec(html)[0];
  console.log('RESULT: ', result);
  ///users/58d056b25e24b02e8b3e32cb -1st attempt - array position for first user [0]
  // /users/58d059f59a2e072f020c135a -2nd attempt - array position for first user [1]
  // undefined -3rd attempt - because there is no third user
  var pathElements = result.split('/');
  console.log('pathElements: ', pathElements);
  // pathElements:  [ '', 'users', '58d05b05494a282f60517dc0' ] splits it by the '/' which makes up the URL
  //If I change it to 2 it will split the code everytime it see's 2 e.g. pathElements:  [ '/users/58d05ba7e7ad0d', 'f8d7c', '0af' ]
  return pathElements[2];
  //path elements shows the user id e.g. 58d056b25e24b02e8b3e32cb
  //You can see the positioning above to understand pathElements[2]
  //[0] - ''
  //[1] - 'users'
  //[2] - 58d05b05494a282f60517dc0
}

function generateUniqueFirstName() {
  return 'firstName' + Math.random();
}
//function generates randomn a unique first name

describe('Users', function () {
  beforeEach(function () {
    request = chai.request(app);
  });
// Essentialy saying before you do any test execute this one so we can use chai which allows us to use syntax like res.should.have extract
// Requesting chai - Chai assertion library works by chaining together natural language assertions, making the tests fairly easy to read.
// beforeEach is run before each test in a describe,
// afterEach after each test.
// before is run once before all the tests in a describe and,
// after is run once after all the tests in a describe,

  describe('GET', function () {
    it('should return error for invalid URL GET', function (done) {
      request
        .get('/invalid_url')
      // console.log('INVALIDURL: ', request.get('/invalid_url'))
      // method: 'get',
      // url: 'http://127.0.0.1:56239/invalid_url'
        .end(function (err) {
          expect(err).not.to.be.null;
      //END
      //WHY EXPECT ERROR NOT TO BE NULL?
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
//You have to describe every test
//it is a test case.
    // 1st parameter should describe the test
    // 2nd parameter function with done parameter
    //(done) basic idea behind the `done()` call is that you call this after your async code has completed..
    //and your test has modified everything it needs to modify, so you can check the results correctly.
//1. Checking return error for invalid url
  //



  describe('PUT', function () {
    it('should return error for non-existent user id', function (done) {
      request
        .put('/users/non-existent-user-id')
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
            .put('/users/' + userId)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({ firstName: 'testFirstName', lastName: 'testLastName', email: 'testemail@example.com' })
            .end(function (err, res) {
              res.should.have.status(200);
              res.text.should.match(/testFirstName/);
              res.text.should.match(/testLastName/);
              done();
            });
        });
    });
  });

  describe('POST', function () {
    it('should return error when firstName is blank', function (done) {
      request
        .post('/users')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({ firstName: '', email: 'testpostlastname@example.com' })
        .end(function (err, res) {
          var jsonResponse = JSON.parse(res.text);

          res.should.have.status(400);
          expect(jsonResponse).to.be.an('array');
          expect(jsonResponse.length).to.equal(1);
          expect(jsonResponse[0].path).to.equal('firstName');
          done();
        });
    });
    it('should return error email is blank', function (done) {
      request
        .post('/users')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({ firstName: 'testPostFirstName', email: '' })
        .end(function (err, res) {
          var jsonResponse = JSON.parse(res.text);

          res.should.have.status(400);
          expect(jsonResponse).to.be.an('array');
          expect(jsonResponse.length).to.equal(1);
          expect(jsonResponse[0].path).to.equal('email');
          done();
        });
    });
    it('should create new user when input data is valid', function (done) {
      var testFirstName = generateUniqueFirstName();

      request
        .post('/users')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({ firstName: testFirstName, email: 'testpost@example.com' })
        .end(function (err, res) {
          var firstNameRegExp = new RegExp(testFirstName);

          res.should.have.status(200);
          res.text.should.match(firstNameRegExp);
          done();
        });
    });
  });

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
});



// Key notes:
// * However, as long as no error within a it(),
// * it() is considered PASSED */



// **Only 1 test case (in a nameless test suite)**
// it('birds should fly', function(){
//   /** here.should.be.tested
//     * However, as long as no error within a it(),
//     * it() is considered PASSED */
// })


// **Only 1 test case, but nested 3-level deep**

// describe() are:
// - commonly known as test suites, which contains test cases
// - merely groups, and you can have groups within groups
// describe('galaxy', function(){
//   describe('earth', function(){
//     describe('singapre', function(){
//       it('birds should fly', function(){ /** ... */ })
//     })
//   })
// })
//
//
//  **2 test cases in 1 test suite**
//
// A common scenario.
// describe('singapre', function(){
//   it('birds should fly', function(){ /** ... */ })
//   it('horse should gallop', function(){ /** ... */ })



//DONE parameter

// EXAMPLE CODE
// describe("a test", function(){
//   var foo = false;
//
//   beforeEach(function(){
//
//     // simulate async call w/ setTimeout
//     setTimeout(function(){
//       foo = true;
//     }, 50);
//
//   });
//
//   it("should pass", function(){
//     expect(foo).equals(true);
//   });
//
// });
// view raw1.js hosted with ❤ by GitHub
// Now you might think that this test should pass. When the “expect” is run inside of the specification,..it
// it should verify that the “foo” variable is set to true because the code in the setTimeout call sets it to true.
// But the test fails because the expectation is run before the callback in the setTimeout is called.
//
// To correct this, Mocha can provide a “done” callback method that you can call
//  This “done” parameter, when present in your callback function, tells Mocha that you are writing an asynchronous test.
//  This causes mocha to enter a timer when the function with the “done” parameter runs, waiting for the async function to finish –
//  which is facilitated by either calling the `done()` function, or by exceeding a 2 second timeout.
