import DataStore from 'data-store';

const LevelData = DataStore({ path: `${process.cwd()}/data/level.json` });

export default LevelData;
