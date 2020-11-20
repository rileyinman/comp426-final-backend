import TSRest from 'typescript-rest';
import { Player, UserData } from './consts/index.js';

const { Errors, GET, HeaderParam, Path, PathParam, POST, PUT } = TSRest;

@Path('/user')
class User {
  public scores: number[] = [];

  constructor(
    readonly id: number,
    public name: string,
    public player: Player
  ) {}

  @GET
  getAllIds() {
    return Object.keys(UserData.data).map(id => parseInt(id));
  }

  @POST
  create(@HeaderParam('name') name: string, @HeaderParam('player') player: string) {
    const newId: number = this.getAllIds().reduce((a, b) => Math.max(a, b)) + 1;
    const newPlayer: Player = Player[player as keyof typeof Player];

    if (newPlayer == null) {
      throw new Errors.BadRequestError('Invalid player type provided');
    }
    if (name == null) {
      throw new Errors.BadRequestError('Name not provided, cannot create user');
    }

    const newUser: User = new User(newId, name, newPlayer);
    UserData.set(newUser.id.toString(), newUser);
    return newUser;
  }

  @GET
  @Path(':id')
  getById(@PathParam('id') id: string) {
    const user = UserData.get(id);
    if (user == null) {
      throw new Errors.NotFoundError(`User ${id} not found`);
    }
    return user;
  }

  @PUT
  @Path(':id')
  update(
    @HeaderParam('score') score?: number,
    @HeaderParam('level') level?: number,
    @HeaderParam('name') name?: string,
    @HeaderParam('player') player?: string
  ) {
    if (score != null && level != null) {
      if (this.scores[level] < score) {
        this.scores[level] = score;
      }
    }

    if (name != null) {
      this.name = name;
    }

    if (this.player != null) {
      this.player = Player[player as keyof typeof Player];
    }

    UserData.set(this.id.toString(), this);

    return this;
  }
}

export default User;
