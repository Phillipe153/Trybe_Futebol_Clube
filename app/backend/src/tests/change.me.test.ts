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
import Team from '../database/models/teams';

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
      id: 1,
      team_name: "Avaí/Kindermann"
    },
    {
      id: 2,
      team_name: "Bahia"
    },
    {
      id: 3,
      team_name: "Botafogo"
    },
    {
      id: 4,
      team_name: "São Paulo"
    },
    {
      id: 5,
      team_name: "Cruzeiro"
    }
  ]

  before(() => {
    sinon
    .stub(Team, 'findAll').resolves(allTeams as any)
  })
  after(() => (Team.findAll as sinon.SinonStub).restore())

  it('verica se retorna um status 200 e uma lista com 5 times', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams')
    expect(chaiHttpResponse.status).to.be.eq(200)
    expect(chaiHttpResponse.body).to.be.length(5);

});
});
describe('Verifica rota /teams/:id', () => {

  let chaiHttpResponse: Response;

  const team = {
      team_name: "Cruzeiro",
      id: 5,
    };
  

  before(() => {
    sinon
    .stub(Team, 'findOne').resolves(team as any)
  })
  after(() => (Team.findOne as sinon.SinonStub).restore())

 
it('verica se retorna um status 200 e um array com id igua e 5 e teamName igual a Cruzeiro', async () => {
  chaiHttpResponse = await chai.request(app).get('/teams/5')
  
  expect(chaiHttpResponse.status).to.be.eq(200);
  expect(chaiHttpResponse.body.id).to.be.eq(5);
  expect(chaiHttpResponse.body.teamName).to.be.eq('Cruzeiro');

});
});
describe('Verifica rota /matches', () => {

  let chaiHttpResponse: Response;

  const matches = [
    {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Grêmio"
      }
    },
    {
      "id": 41,
      "homeTeam": 16,
      "homeTeamGoals": 2,
      "awayTeam": 9,
      "awayTeamGoals": 0,
      "inProgress": true,
      "teamHome": {
        "teamName": "São Paulo"
      },
      "teamAway": {
        "teamName": "Internacional"
      }
    },
    {
      "id": 42,
      "homeTeam": 6,
      "homeTeamGoals": 1,
      "awayTeam": 1,
      "awayTeamGoals": 0,
      "inProgress": true,
      "teamHome": {
        "teamName": "Ferroviária"
      },
      "teamAway": {
        "teamName": "Avaí/Kindermann"
      }
    }
  ]
  before(() => {
    sinon
    .stub(Math, 'findAll').resolves(matches)
  })
  after(() => (Math.findAll as sinon.SinonStub).restore())

  it('verica se retorna um status 200 e uma lista com 3 partidas', async () => {
    chaiHttpResponse = await chai.request(app).get('/matches');
    expect(chaiHttpResponse.status).to.be.eq(200)
    expect(chaiHttpResponse.body).to.be.length(3);
    expect(chaiHttpResponse.body[0]).to.have.property('teamHome');
    expect(chaiHttpResponse.body[0]).to.have.property('teamAway')
});
});
