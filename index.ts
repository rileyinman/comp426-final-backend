import Cors from 'cors';
import DataStore from 'data-store';
import DotEnv from 'dotenv';
import Express from 'express';
import ExpressSession from 'express-session';
import TSRest from 'typescript-rest';

import { LevelData } from './consts/index.js';
import Levels from './levels/index.js';
import Level from './Level.js';
import Session from './Session.js';
import User from './User.js';

const { Errors, Server } = TSRest;

DotEnv.config();

const app: Express.Application = Express();

if (process.env.SESSION_SECRET == null) {
  throw new Error('No SESSION_SECRET env variable present');
}

if (process.env.CORS_URL == null) {
  throw new Error('No CORS_URL env variable present');
}

app.use(Cors({
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token'
  ],
  credentials: true,
  methods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'PATCH', 'POST', 'DELETE'],
  origin: process.env.CORS_URL
}));

app.use(ExpressSession({
  name: 'comp426FinalCookie',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

Server.buildServices(app, Level, Session, User);

app.use((err: any, req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  if (err instanceof Errors.BadRequestError ||       // 400
      err instanceof Errors.UnauthorizedError ||     // 401
      err instanceof Errors.ForbiddenError ||        // 403
      err instanceof Errors.NotFoundError ||         // 404
      err instanceof Errors.MethodNotAllowedError || // 405
      err instanceof Errors.NotAcceptableError ||    // 406
      err instanceof Errors.ConflictError ||         // 409
      err instanceof Errors.InternalServerError ||   // 500
      err instanceof Errors.NotImplementedError      // 501
     ) {
    if (res.headersSent) {
      return next(err);
    }

    res.set('Content-Type', 'application/json');
    res.status(err.statusCode);
    res.json({ error: err.message, code: err.statusCode });
  } else {
    next(err);
  }
});

for (const level of Levels) {
  LevelData.set(level.id.toString(), level);
}

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
