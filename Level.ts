import TSRest from 'typescript-rest';
import Levels from './levels/index.js';
import { Cell, LevelData } from './consts/index.js';

const { Errors, GET, Path, PathParam } = TSRest;

@Path('/level')
class Level {
  constructor(
    readonly id: number,
    readonly npcText: string,
    readonly cells: Cell[][]
  ) {}

  @GET
  getAll() {
    return Object.keys(LevelData.data).map(id => parseInt(id));
  }

  @GET
  @Path(':id')
  get(@PathParam('id') id: string) {
    const level = LevelData.get(id);
    if (level == null) {
      throw new Errors.NotFoundError(`Level ${id} not found`);
    }
    return level;
  }
}

export default Level;
