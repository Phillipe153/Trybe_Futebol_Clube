
// import { Request, Response, NextFunction }, express  from 'express';

import * as express from 'express';
import router from './routes/indexRoutes';



class App {
  public app: express.Express;
  
  constructor() {
    this.app = express();

    this.app.use(express.json());

    this.app.use('/', router);

    this.config();

    // Não remover essa rota
    this.app.get('/', (_req, res) => res.json({ ok: true }));

    type Error = {
      status: number,
      message: string
    };

    this.app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
      if (err.status) return res.status(err.status).json({ message: err.message });
      return res.status(500).json({ message: err.message });
    });
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
