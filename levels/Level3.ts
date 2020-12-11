import { Cell } from '../consts/index.js';
import Level from '../Level.js';

let Level3 =
  new Level(3, [Cell.KEY_BLUE], [Cell.KEY_PINK], "a blue key for a pink key", [
    [ Cell.EMPTY, Cell.EMPTY,     Cell.EMPTY, Cell.EMPTY,      Cell.EMPTY,      Cell.EMPTY,       Cell.EMPTY,     Cell.EMPTY,      Cell.EXIT,        Cell.EMPTY ],
    [ Cell.WALL,  Cell.WALL,      Cell.WALL,  Cell.WALL,       Cell.WALL,       Cell.WALL,        Cell.WALL,      Cell.WALL,       Cell.DOOR_YELLOW, Cell.WALL  ],
    [ Cell.WALL,  Cell.KEY_PINK,  Cell.FLOOR, Cell.FLOOR,      Cell.FLOOR,      Cell.FLOOR,       Cell.FLOOR,     Cell.WALL,       Cell.FLOOR,       Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,     Cell.WALL,  Cell.WALL,       Cell.WALL,       Cell.WALL,        Cell.FLOOR,     Cell.DOOR_GREEN, Cell.FLOOR,       Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,     Cell.WALL,  Cell.FLOOR,      Cell.NPC,        Cell.WALL,        Cell.FLOOR,     Cell.WALL,       Cell.FLOOR,       Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,     Cell.WALL,  Cell.DOOR_GREEN, Cell.WALL,       Cell.WALL,        Cell.FLOOR,     Cell.DOOR_PINK,  Cell.FLOOR,       Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,     Cell.WALL,  Cell.KEY_PURPLE, Cell.DOOR_GREEN, Cell.FLOOR,       Cell.KEY_GREEN, Cell.WALL,       Cell.FLOOR,       Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,     Cell.WALL,  Cell.DOOR_BLUE,  Cell.WALL,       Cell.WALL,        Cell.WALL,      Cell.WALL,       Cell.FLOOR,       Cell.WALL  ],
    [ Cell.WALL,  Cell.FLOOR,     Cell.WALL,  Cell.KEY_YELLOW, Cell.WALL,       Cell.WALL,        Cell.KEY_GREEN, Cell.WALL,       Cell.FLOOR,       Cell.WALL  ],
    [ Cell.WALL,  Cell.KEY_GREEN, Cell.WALL,  Cell.DOOR_BLUE,  Cell.FLOOR,      Cell.DOOR_PURPLE, Cell.FLOOR,     Cell.FLOOR,      Cell.FLOOR,       Cell.WALL  ],
    [ Cell.WALL,  Cell.PLAYER,    Cell.WALL,  Cell.WALL,       Cell.WALL,       Cell.WALL,        Cell.WALL,      Cell.WALL,       Cell.WALL,        Cell.WALL  ]
  ]);

export default Level3;
