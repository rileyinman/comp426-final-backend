import { Cell, LevelData } from './consts/index.js';

class Level {
  constructor(
    readonly id: number,
    readonly height: number,
    readonly width: number,
    readonly startx: number,
    readonly starty: number,
    readonly cells: Cell[]
  ) {}

  static getAllIDs() {
    return Object.keys(LevelData.data).map((id) => parseInt(id));
  }

  static findById(id: string) {
    return LevelData.get(id);
  }
}

export default Level;
