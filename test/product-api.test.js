process.env.NODE_ENV = 'test';

// Element necessaire pour les tests
const server = require('../server');
const db = require('../database');

// dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');

// Permet d'utiliser l'API Should de "Chai"
const should = chai.should();

// Permet de lancer des requetes vers le server
chai.use(chaiHttp);

// Code a lancer avant ou après les tests
before(() => {
    console.log('Bloc de code executer avant les tests');
});

after(() => {
    console.log('Bloc de code executer aprés les tests');
    db.disconnect();
});

describe('Route Product', () => {
    it('Get all', (done) => {
        chai.request(server)
            .get('/product')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
    });
});