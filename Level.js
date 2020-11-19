import { LevelData } from './consts/index.js';
class Level {
    constructor(id, height, width, startx, starty, cells) {
        this.id = id;
        this.height = height;
        this.width = width;
        this.startx = startx;
        this.starty = starty;
        this.cells = cells;
    }
    static getAllIDs() {
        return Object.keys(LevelData.data).map((id) => parseInt(id));
    }
    static findById(id) {
        return LevelData.get(id);
    }
}
export default Level;
