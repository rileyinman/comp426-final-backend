import { Cell } from '../consts/index.js';
import Level from '../Level.js';

let Level4 =
  new Level(4, [Cell.KEY_PURPLE], [Cell.KEY_BLUE, Cell.KEY_BLUE], "a purple key for two blue keys", [
    [ Cell.EMPTY, Cell.EXIT,        Cell.EMPTY,    Cell.EMPTY,      Cell.EMPTY,     Cell.EMPTY,     Cell.EMPTY,       Cell.EMPTY,       Cell.EMPTY,      Cell.EMPTY ],
    [ Cell.WALL,  Cell.DOOR_YELLOW, Cell.WALL,     Cell.WALL,       Cell.WALL,      Cell.WALL,      Cell.WALL,        Cell.WALL,        Cell.WALL,       Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,       Cell.WALL,     Cell.FLOOR,      Cell.DOOR_PINK, Cell.FLOOR,     Cell.DOOR_GREEN,  Cell.FLOOR,       Cell.KEY_GREEN,  Cell.WALL  ],
    [ Cell.WALL,  Cell.DOOR_PURPLE, Cell.WALL,     Cell.NPC,        Cell.WALL,      Cell.FLOOR,     Cell.WALL,        Cell.FLOOR,       Cell.KEY_YELLOW, Cell.WALL  ],
    [ Cell.WALL,  Cell.KEY_BLUE,    Cell.WALL,     Cell.WALL,       Cell.WALL,      Cell.DOOR_BLUE, Cell.WALL,        Cell.DOOR_BLUE,   Cell.WALL,       Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,       Cell.WALL,     Cell.KEY_GREEN,  Cell.FLOOR,     Cell.FLOOR,     Cell.WALL,        Cell.FLOOR,       Cell.KEY_GREEN,  Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,       Cell.WALL,     Cell.WALL,       Cell.FLOOR,     Cell.FLOOR,     Cell.WALL,        Cell.FLOOR,       Cell.FLOOR,      Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,       Cell.KEY_PINK, Cell.DOOR_PINK,  Cell.FLOOR,     Cell.FLOOR,     Cell.WALL,        Cell.DOOR_PURPLE, Cell.WALL,       Cell.WALL  ],
    [ Cell.WALL,  Cell.WALL,        Cell.WALL,     Cell.WALL,       Cell.FLOOR,     Cell.FLOOR,     Cell.DOOR_PURPLE, Cell.FLOOR,       Cell.KEY_BLUE,   Cell.WALL  ],
    [ Cell.WALL,  Cell.KEY_BLUE,    Cell.KEY_PINK, Cell.DOOR_GREEN, Cell.FLOOR,     Cell.FLOOR,     Cell.WALL,        Cell.KEY_PURPLE,  Cell.FLOOR,      Cell.WALL  ],
    [ Cell.WALL,  Cell.WALL,        Cell.WALL,     Cell.WALL,       Cell.WALL,      Cell.WALL,      Cell.WALL,        Cell.WALL,        Cell.PLAYER,     Cell.WALL  ]
  ]);

export default Level4;
