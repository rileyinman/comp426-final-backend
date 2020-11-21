import DataStore from 'data-store';

const LoginData = DataStore({ path: `${process.cwd()}/data/login.json` });

export default LoginData;
