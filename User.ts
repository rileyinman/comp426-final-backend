import { Player } from './consts/index.js';

class User {
  constructor(
    readonly id: number,
    public name: string,
    public player: Player
  ) {}
}

export default User;
