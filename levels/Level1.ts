import { Cell } from '../consts/index.js';
import Level from '../Level.js';

let Level1=
  new Level(1, 10, 10, [
    Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL,
    Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, 
    Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL,
    Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL,
    Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL
  ]);

export default Level1;