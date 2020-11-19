import DataStore from 'data-store';

import { Cell } from '../consts/index.js';
import Level from '../Level.js';

let Level0 =
  new Level(0, 5, 5, 3, 5, [
    Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL,
    Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL,
    Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL,
    Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL,
    Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL
  ]);

export default Level0;
