import TSRest from 'typescript-rest';
import { Cell, LevelData } from './consts/index.js';

const { Errors, GET, Path, PathParam } = TSRest;

@Path('/level')
class Level {
  constructor(
    readonly id: number,
    readonly height: number,
    readonly width: number,
    readonly startx: number,
    readonly starty: number,
    readonly cells: Cell[]
  ) {}

  @GET
  getAllIDs() {
    return Object.keys(LevelData.data).map(id => parseInt(id));
  }

  @GET
  @Path(':id')
  getLevel(@PathParam('id') id: string) {
    const level = LevelData.get(id);
    if (level == null) {
      throw new Errors.NotFoundError(`Level ${id} not found`);
    }
    return level;
  }
}

export default Level;
