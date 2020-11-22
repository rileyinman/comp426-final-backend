import Express from 'express';
import TSRest from 'typescript-rest';
import { UserData } from './consts/index.js';

const { Errors, GET, HeaderParam, Path, POST, PostProcessor, PreProcessor } = TSRest;

const setCookie = (req: Express.Request) => {
  const user = UserData.get(req.headers.username);
  if (req.session) {
    console.log('session exists')
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
  login(@HeaderParam('username') username: string, @HeaderParam('password') password: string) {
    const userInfo = UserData.get(username);

    if (userInfo == null || userInfo.password != password) {
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
