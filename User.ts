import { Player, UserData } from './consts/index.js';

class User {
  constructor(
    readonly id: number,
    public name: string,
    public player: Player
  ) {}

  static getAllIDs() {
    return Object.keys(UserData.data).map(id => parseInt(id));
  }

  static findById(id: string) {
    return UserData.get(id);
  }

  update(name: string, player: Player) {
    this.name = name;
    this.player = player;
    UserData.set(this.id.toString(), this);
  }
}

export default User;
