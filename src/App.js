import './App.css';
import packageJson from './../package.json';
import preval from 'preval.macro';
import { CechyWyrobuOferowanego } from './cechyWyrobuOferowanego/CechyWyrobuOferowanego'
import { GuestFormBasic } from './uniformExample/AutoForm'

function App() {
  return (
    <div className="App" data_build_version={packageJson.version} data_build_time={preval`module.exports = new Date().toISOString();`}>
      {/* 
      <GuestFormBasic /> */}
      <CechyWyrobuOferowanego />
    </div>
  );
}

export default App;
