import { Cell } from '../consts/index.js';
import Level from '../Level.js';

let Level2 =
  new Level(2, "Key 1 for Key 3.", [
    [ Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.EXIT,   Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.EMPTY ],
    [ Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.DOOR5,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL  ],
    [ Cell.WALL,  Cell.KEY2,  Cell.WALL,  Cell.KEY2,  Cell.WALL,  Cell.FLOOR,  Cell.FLOOR, Cell.FLOOR, Cell.NPC,   Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR, Cell.DOOR3, Cell.FLOOR, Cell.WALL,  Cell.FLOOR,  Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR, Cell.WALL,  Cell.FLOOR, Cell.WALL,  Cell.FLOOR,  Cell.FLOOR, Cell.WALL,  Cell.WALL,  Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR, Cell.WALL,  Cell.KEY4,  Cell.WALL,  Cell.FLOOR,  Cell.FLOOR, Cell.DOOR1, Cell.KEY5,  Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR, Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.DOOR4,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR,  Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.WALL  ],
    [ Cell.WALL,  Cell.DOOR2, Cell.WALL,  Cell.DOOR2, Cell.WALL,  Cell.DOOR1,  Cell.WALL,  Cell.WALL,  Cell.DOOR4, Cell.WALL  ],
    [ Cell.WALL,  Cell.KEY4,  Cell.WALL,  Cell.KEY3,  Cell.WALL,  Cell.FLOOR,  Cell.KEY1,  Cell.WALL,  Cell.KEY3,  Cell.WALL  ],
    [ Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.PLAYER, Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL  ]
  ]);

export default Level2;
