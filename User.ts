import TSRest from 'typescript-rest';
import { Player, UserData } from './consts/index.js';

const { Errors, GET, HeaderParam, Path, PathParam, POST, PUT } = TSRest;

@Path('/user')
class User {
  constructor(
    readonly username: string,
    public password: string,
    public player: Player,
    public scores: number[] = []
  ) {}

  @GET
  getAll(): string[] {
    return Object.keys(UserData.data);
  }

  @POST
  create(user: { username: string, password: string, player: string }) {
    if (UserData.get(user.username) != null) {
      throw new Errors.ConflictError(`User ${user.username} already exists`);
    }

    const newPlayer: Player = Player[user.player.toUpperCase() as keyof typeof Player];

    if (newPlayer == null) {
      throw new Errors.BadRequestError('Invalid player type provided');
    }

    if (user.username == null) {
      throw new Errors.BadRequestError('Username not provided, cannot create user');
    }

    if (user.username.includes(' ')) {
      throw new Errors.BadRequestError('Username must not contain spaces');
    }

    const newUser: User = new User(user.username, user.password, newPlayer);
    UserData.set(newUser.username.toString(), newUser);
    const { password: omitted, ...noPassword } = newUser;
    return noPassword;
  }

  @GET
  @Path(':username')
  get(@PathParam('username') username: string) {
    const user: User = UserData.get(username);
    if (user == null) {
      throw new Errors.NotFoundError(`User ${username} not found`);
    }
    const { password: omitted, ...noPassword } = user;
    return noPassword;
  }

  @PUT
  @Path(':username')
  update(
    @PathParam('username') username: string,
    userInfo: {
      password?: string,
      level?: number,
      score?: number,
      player?: string
    }
  ) {
    const user = UserData.get(username);
    let newScores = [...user.scores];
    let newPlayer = user.player;
    if (userInfo.level != null && userInfo.score != null) {
      if (userInfo.level == newScores.length ||
          (userInfo.level < newScores.length &&
           userInfo.score < newScores[userInfo.level])) {
        newScores[userInfo.level] = userInfo.score;
      }
    }

    if (userInfo.player != null) {
      newPlayer = userInfo.player as keyof typeof Player;
    }

    let newPassword = user.password;
    if (userInfo.password != null) {
      newPassword = userInfo.password;
    }

    const newUser = new User(username, newPassword, newPlayer, newScores);
    UserData.set(newUser.username.toString(), newUser);

    const { password: omitted, ...noPassword } = newUser;
    return noPassword;
  }
}

export default User;
