import DataStore from 'data-store';
import DotEnv from 'dotenv';
import Express from 'express';
import ExpressSession from 'express-session';
import TSRest from 'typescript-rest';

import Level from './Level.js';
import Session from './Session.js';
import User from './User.js';

const { Errors, Server } = TSRest;

DotEnv.config();

const app: Express.Application = Express();
Server.buildServices(app, Level, Session, User);

if (process.env.SESSION_SECRET == null) {
  throw new Error('No SESSION_SECRET env variable present');
}

app.use(ExpressSession({
  name: 'comp426FinalCookie',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

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

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
