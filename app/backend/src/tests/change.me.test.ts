
import * as sinon from 'sinon';
import chai from 'chai';
import { before, after } from 'mocha';
// @ts-ignore
import chaiHttp = require('chai-http');

import User from '../database/models/loginModel';
import  Mock  from './mock/mock';
import { app } from '../app';



import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica rota Login', () => {

  let chaiHttpResponse: Response;

  before(() => {
    sinon.stub(User, 'findOne').callsFake( Mock.findOne )
  })

  after(() => {
    (User.findOne as sinon.SinonStub).restore();
  })

  it('teste', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
     
      email: 'admin@admin.com',
      password: 'secret_adimin',
      
    }); 
    console.log(chaiHttpResponse.body);
    
    try {  
      expect(chaiHttpResponse.status).to.be.eq(201)
      } catch(err) {
        expect(chaiHttpResponse.status).to.be.eq(401)
      }  
  })
  /**
   * Exemplo do uso de stubs com tipos
   */

  // let chaiHttpResponse: Response;

  // before(async () => {
  //   sinon
  //     .stub(Example, "findOne")
  //     .resolves({
  //       ...<Seu mock>
  //     } as Example);
  // });

  // after(()=>{
  //   (Example.findOne as sinon.SinonStub).restore();
  // })

  // it('...', async () => {
  //   chaiHttpResponse = await chai
  //      .request(app)
  //      ...

  //   expect(...)
  // });

  // it('Seu sub-teste', () => {
  //   expect(false).to.be.eq(true);
  // });
});
