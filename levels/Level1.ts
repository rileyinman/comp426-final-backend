import { Cell } from '../consts/index.js';
import Level from '../Level.js';

let Level1 =
  new Level(1, [], [], '', [
    [ Cell.EMPTY, Cell.EMPTY,      Cell.EMPTY,    Cell.EMPTY,     Cell.EMPTY,      Cell.EMPTY,       Cell.EMPTY,    Cell.EXIT,        Cell.EMPTY,      Cell.EMPTY ],
    [ Cell.WALL,  Cell.WALL,       Cell.WALL,     Cell.WALL,      Cell.WALL,       Cell.WALL,        Cell.WALL,     Cell.DOOR_YELLOW, Cell.WALL,       Cell.WALL  ],
    [ Cell.WALL,  Cell.KEY_PINK,   Cell.KEY_BLUE, Cell.FLOOR,     Cell.FLOOR,      Cell.FLOOR,       Cell.FLOOR,    Cell.FLOOR,       Cell.WALL,       Cell.WALL  ],
    [ Cell.WALL,  Cell.WALL,       Cell.WALL,     Cell.DOOR_BLUE, Cell.WALL,       Cell.WALL,        Cell.WALL,     Cell.WALL,        Cell.WALL,       Cell.WALL  ],
    [ Cell.WALL,  Cell.KEY_YELLOW, Cell.WALL,     Cell.FLOOR,     Cell.FLOOR,      Cell.KEY_BLUE,    Cell.FLOOR,    Cell.FLOOR,       Cell.FLOOR,      Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,      Cell.WALL,     Cell.FLOOR,     Cell.FLOOR,      Cell.FLOOR,       Cell.FLOOR,    Cell.FLOOR,       Cell.FLOOR,      Cell.WALL  ],
    [ Cell.WALL,  Cell.DOOR_PINK,  Cell.WALL,     Cell.WALL,      Cell.WALL,       Cell.WALL,        Cell.WALL,     Cell.WALL,        Cell.DOOR_GREEN, Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,      Cell.FLOOR,    Cell.DOOR_BLUE, Cell.FLOOR,      Cell.FLOOR,       Cell.KEY_BLUE, Cell.FLOOR,       Cell.FLOOR,      Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,      Cell.FLOOR,    Cell.WALL,      Cell.WALL,       Cell.DOOR_PURPLE, Cell.WALL,     Cell.WALL,        Cell.DOOR_BLUE,  Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,      Cell.FLOOR,    Cell.WALL,      Cell.KEY_PURPLE, Cell.FLOOR,       Cell.WALL,     Cell.WALL,        Cell.KEY_GREEN,  Cell.WALL  ],
    [ Cell.WALL,  Cell.WALL,       Cell.WALL,     Cell.WALL,      Cell.PLAYER,     Cell.WALL,        Cell.WALL,     Cell.WALL,        Cell.WALL,       Cell.WALL  ]
  ]);

export default Level1;
