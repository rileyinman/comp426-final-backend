import { Cell } from '../consts/index.js';
import Level from '../Level.js';


let Level4 =
  new Level(4, 10, 10, [
    Cell.WALL, Cell.DOOR5, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL,
    Cell.WALL, Cell.FLOOR, Cell.WALL, Cell.FLOOR, Cell.DOOR4, Cell.FLOOR, Cell.DOOR3, Cell.FLOOR, Cell.KEY3, Cell.WALL,
    Cell.WALL, Cell.DOOR1, Cell.WALL, Cell.NPC, Cell.WALL, Cell.FLOOR, Cell.WALL, Cell.FLOOR, Cell.KEY5, Cell.WALL,
    Cell.WALL, Cell.KEY2, Cell.WALL, Cell.WALL, Cell.WALL, Cell.DOOR2, Cell.WALL, Cell.DOOR2, Cell.WALL, Cell.WALL,
    Cell.WALL, Cell.FLOOR, Cell.WALL, Cell.KEY3, Cell.FLOOR, Cell.FLOOR, Cell.WALL, Cell.FLOOR, Cell.KEY3, Cell.WALL,
    Cell.WALL, Cell.FLOOR, Cell.WALL, Cell.WALL, Cell.FLOOR, Cell.FLOOR, Cell.WALL, Cell.FLOOR, Cell.FLOOR, Cell.WALL,
    Cell.WALL, Cell.FLOOR, Cell.KEY4, Cell.DOOR4, Cell.FLOOR, Cell.FLOOR, Cell.WALL, Cell.DOOR1, Cell.WALL, Cell.WALL,
    Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.FLOOR, Cell.FLOOR, Cell.DOOR1, Cell.FLOOR, Cell.KEY2, Cell.WALL,
    Cell.WALL, Cell.KEY2, Cell.KEY4, Cell.DOOR3, Cell.FLOOR, Cell.FLOOR, Cell.WALL, Cell.KEY1, Cell.FLOOR, Cell.WALL,
    Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.WALL, Cell.PLAYER, Cell.WALL
  ]);

export default Level4;