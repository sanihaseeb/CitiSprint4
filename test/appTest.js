const chai = require('chai');
const chaiHttp = require("chai-http");
const server = require("../server");
const { response } = require('express');

chai.should();

chai.use(chaiHttp);

describe("Get /getUsers",()=>{
    it('app should return something',(done)=>{
        chai.request(server)
        .get("/getUsers")
        .end((err,response)=>{
            response.should.have.status(200);
            done();
        })
    })
})