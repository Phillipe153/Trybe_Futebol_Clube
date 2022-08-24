// @ts-ignore

import * as sinon from 'sinon';
import chai from 'chai';
import { before, after } from 'mocha';
import chaiHttp from 'chai-http';

import User from '../database/models/loginModel';
import  Mock, {mockFindOne} from './mock/mock';
import { app } from '../app';



import { Response } from 'superagent';
import { Model } from 'sequelize/types';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica rota Login', () => {
  const mockFindOne: unknown = {
    id: 1,
    username: "Admin",
    email: "admin@admin.com",
    password: "$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW",
    role: "admin"
  };

  let chaiHttpResponse: Response;

  before(() => {
    sinon
    .stub(User, 'findOne').resolves(mockFindOne as Model)
  })
  after(() => (User.findOne as sinon.SinonStub).restore())

  it('Verifica se retorna um token ao digitar dados validos', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'secret_admin',
      
    }); 
    
    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.have.property('token')

  });
  it('verica se retorna um status 400 e uma mensagm de erro em uma requisiçao sem email', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      password: 'sercret_admin',
    });
    
    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body.message).to.be.eq('All fields must be filled');

  });
  it('verica se retorna um status 400 e uma mensagm de erro em uma requisiçao sem password', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
    });
    expect(chaiHttpResponse.status).to.be.eq(400)
    expect(chaiHttpResponse.body.message).to.be.eq('All fields must be filled');

  });
 
  it('verica se retorna um status 401 e uma mensagm de erro em uma requisiçao com password incorreto', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'admin@admin.com',
      password: 'sec_admin',    });
    expect(chaiHttpResponse.status).to.be.eq(401)
    expect(chaiHttpResponse.body.message).to.be.eq('Incorrect email or password');

  });
  
});
describe('Verifica rota Login com email incorreto', () => {

  let chaiHttpResponse: Response;

  before(() => {
    sinon
    .stub(User, 'findOne').resolves(null)
  })
  after(() => (User.findOne as sinon.SinonStub).restore())

  it('verica se retorna um status 401 e uma mensagm de erro em uma requisiçao com email incorreto', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: 'Ad@admin.com',
      password: 'secret_admin',    });
    expect(chaiHttpResponse.status).to.be.eq(401)
    expect(chaiHttpResponse.body.message).to.be.eq('Incorrect email or password');

});
});
describe('Verifica rota /teams', () => {

  let chaiHttpResponse: Response;

  const allTeams = [
    {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    },
    {
      "id": 2,
      "teamName": "Bahia"
    },
    {
      "id": 3,
      "teamName": "Botafogo"
    },
    {
      "id": 4,
      "teamName": "São Paulo"
    },
    {
      "id": 5,
      "teamName": "Cruzeiro"
    }
  ]

  before(() => {
    sinon
    .stub(User, 'findAll').resolves(allTeams as any)
  })
  after(() => (User.findAll as sinon.SinonStub).restore())

  it('verica se retorna um status 200 e uma lista com 16 times', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams')
    expect(chaiHttpResponse.status).to.be.eq(200)
    expect(chaiHttpResponse.body).to.be.length(16);

});
it('verica se retorna um status 200 e um array com id igua e 5 e team_name igual a Cruzeiro', async () => {
  chaiHttpResponse = await chai.request(app).get('/teams/5')
  
  expect(chaiHttpResponse.status).to.be.eq(200);
  expect(chaiHttpResponse.body.id).to.be.eq(5);
  expect(chaiHttpResponse.body.teamName).to.be.eq('Cruzeiro');

});
});
