let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
const { response } = require("express");

//Assertion Style
chai.should();
chai.use(chaiHttp);

describe('Tasks Server', () => {
    /**
    * Test the POST route
    */
   

    /** 
     * Test the GET route
     */

    describe('GET /getusers', () => {
        it("It should get all the users", (done) => {
            chai.request(server)
            .get("/getusers")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a("array")
            done();
            })
        })
    });

    describe('GET /getusers', () => {
        it("It should NOT get all the users", (done) => {
            chai.request(server)
            .get("/getuser")
            .end((err, response) => {
                response.should.have.status(404);
            done();
            })
        })
    });

     /**
      * Test the GET (by id) route
      */

    describe('GET /getUser/:email', () => {
        it("It should get an user by email", (done) => {
            chai.request(server)
            .get("/getUsers/tom123@gmail.com")
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object')
                response.body.should.have.property('email')
                response.body.should.have.property('password')
                response.body.should.have.property('email').eq('tom123@gmail.com')
            done();
            })
        })
    });

    describe('GET /getUser/:userName', () => {
        it("It should NOT get all the users", (done) => {
            chai.request(server)
            .get("/getuser")
            .end((err, response) => {
                response.should.have.status(404);
            done();
            })
        })
    });

})