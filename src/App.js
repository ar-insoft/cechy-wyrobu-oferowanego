import './App.css';
import packageJson from './../package.json';
import preval from 'preval.macro';
import { CechyWyrobuOferowanego } from './cechyWyrobuOferowanego/CechyWyrobuOferowanego'

function App() {
  return (
    <div className="App" data_build_version={packageJson.version} data_build_time={preval`module.exports = new Date().toISOString();`}>
      <CechyWyrobuOferowanego />
    </div>
  );
}

export default App;
