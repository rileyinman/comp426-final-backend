import BodyParser from 'body-parser';
import DataStore from 'data-store';
import Express from 'express';
// import ExpressSession from 'express-session';
import TSRest from 'typescript-rest';

import Level from './Level.js';
import User from './User.js';

const { Errors, Server } = TSRest;

const app: Express.Application = Express();
Server.buildServices(app, Level, User);

app.use(BodyParser.json());

app.use((err: any, req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  if (err instanceof Errors.NotFoundError || err instanceof Errors.BadRequestError) {
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
