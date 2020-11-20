import { LevelData } from '../consts/index.js';
import Level0 from './Level0.js';

const Levels = [
  Level0
];

for (const level of Levels) {
  LevelData.set(level.id.toString(), level);
}

export default Levels;
