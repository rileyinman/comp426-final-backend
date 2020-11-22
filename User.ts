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
  create(
    @HeaderParam('username') username: string,
    @HeaderParam('password') password: string,
    @HeaderParam('player') player: string
  ) {
    if (UserData.get(username) != null) {
      throw new Errors.ConflictError(`User ${username} already exists`);
    }

    const newPlayer: Player = Player[player as keyof typeof Player];

    if (newPlayer == null) {
      throw new Errors.BadRequestError('Invalid player type provided');
    }

    if (username == null) {
      throw new Errors.BadRequestError('Username not provided, cannot create user');
    }

    if (username.includes(' ')) {
      throw new Errors.BadRequestError('Username must not contain spaces');
    }

    const newUser: User = new User(username, password, newPlayer);
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
    @HeaderParam('score') score?: number,
    @HeaderParam('level') level?: number,
    @HeaderParam('player') player?: string
  ) {
    const user = UserData.get(username);
    let newScores = [...user.scores];
    let newPlayer = user.player;

    if (score != null && level != null) {
      if (newScores.length == level || newScores[level] < score) {
        newScores[level] = score;
      }
    }

    console.log(newScores);

    if (this.player != null) {
      newPlayer = Player[player as keyof typeof Player];
    }

    const newUser = new User(username, user.password, newPlayer, newScores);
    console.log(newUser);
    UserData.set(newUser.username.toString(), newUser);

    return newUser;
  }
}

export default User;
