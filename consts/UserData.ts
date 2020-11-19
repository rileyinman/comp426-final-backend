import DataStore from 'data-store';

const UserData = DataStore({ path: `${process.cwd()}/data/user.json` });

export default UserData;
