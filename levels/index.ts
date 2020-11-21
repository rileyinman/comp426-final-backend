import { LevelData } from '../consts/index.js';
import Level0 from './Level0.js'
import Level1 from './Level1.js';

const Levels = [
  Level0, Level1
];

for (const level of Levels) {
  LevelData.set(level.id.toString(), level);
}

export default Levels;
