import Express from 'express';
import TSRest from 'typescript-rest';
import { UserData } from './consts/index.js';
import User from './User.js';

const { Errors, GET, Path, POST, PostProcessor, PreProcessor } = TSRest;

const setCookie = (req: Express.Request) => {
  const user = UserData.get(req.body.username);
  if (req.session) {
    req.session.user = user;
  }
  console.log(`User ${user.username} authenticated`);
}

const deleteCookie = (req: Express.Request) => {
  if (req.session) {
    delete req.session.user;
  }
}

class Session {
  @POST
  @Path('login')
  @PostProcessor(setCookie)
  login(user: User) {
    if (user.username === undefined || user.password === undefined) {
      throw new Errors.BadRequestError('Please provide a username and password');
    }

    const userInfo = UserData.get(user.username);

    if (userInfo == null || userInfo.password != user.password) {
      throw new Errors.UnauthorizedError('Incorrect username or password');
    }

    return true;
  }

  @GET
  @Path('logout')
  @PreProcessor(deleteCookie)
  logout() {
    return true;
  }
}

export default Session;
