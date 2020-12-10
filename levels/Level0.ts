import { Cell } from '../consts/index.js';
import Level from '../Level.js';

let Level0 =
  new Level(0, "", [
    [ Cell.EMPTY, Cell.EMPTY,  Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.EXIT,  Cell.EMPTY, Cell.EMPTY, Cell.EMPTY, Cell.EMPTY ],
    [ Cell.WALL,  Cell.WALL,   Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.DOOR5, Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL  ],
    [ Cell.WALL,  Cell.KEY2,   Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.WALL,  Cell.KEY5,  Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.FLOOR, Cell.WALL  ],
    [ Cell.WALL,  Cell.DOOR3,  Cell.WALL,  Cell.FLOOR, Cell.FLOOR, Cell.KEY3,  Cell.FLOOR, Cell.WALL,  Cell.DOOR3, Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,  Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,  Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,  Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.WALL  ],
    [ Cell.WALL,  Cell.WALL,   Cell.WALL,  Cell.WALL,  Cell.DOOR1, Cell.WALL,  Cell.WALL,  Cell.DOOR2, Cell.WALL,  Cell.WALL  ],
    [ Cell.WALL,  Cell.KEY1,   Cell.FLOOR, Cell.FLOOR, Cell.FLOOR, Cell.WALL,  Cell.KEY3,  Cell.FLOOR, Cell.FLOOR, Cell.WALL  ],
    [ Cell.WALL,  Cell.PLAYER, Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL,  Cell.WALL  ]
  ]);

export default Level0;
