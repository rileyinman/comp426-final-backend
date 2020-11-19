import Express from 'express';
import Level from './Level.js';
import { LevelData } from './consts/index.js';
import Levels from './levels/index.js';
const app = Express();
for (const level of Levels) {
    LevelData.set(level.id.toString(), level);
}
app.get('/level', (req, res) => {
    res.json(Level.getAllIDs());
});
app.get('/level/:id', (req, res) => {
    const id = req.params.id;
    const level = Level.findById(id);
    if (level == null) {
        res.status(404).send(`Level ${id} not found`);
        return;
    }
    res.json(level);
});
const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Application listening on port ${port}`);
});
