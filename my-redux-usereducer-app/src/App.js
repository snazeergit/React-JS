import logo from './logo.svg';
import './App.css';
import { StateMgmtAtComp1 } from './Components/StateMgmtAtComp1';
import { StateMgmtAtComp } from './Components/StateMgmtAtComp';
import { StateMgmtAtApp } from './Components/StateMgmtAtApp';
import { useReducer } from 'react';
import { appReducer } from './reducers/appReducer';
import { init } from './utils/init';
import { ctx } from './context'

function App() {
  const [state, dispatch] = useReducer(appReducer, init)
  return (
    <div className="App">
      {/* <StateMgmtAtComp1/>*/}
      {/* <StateMgmtAtComp/> */}

      {/* Provides data to the context */}
      <ctx.Provider value={{ state, dispatch }}>
        {/* Data is available to all the direct and indeirect comp of <StateMgmtAtApp> */}
        <StateMgmtAtApp />
      </ctx.Provider>
    </div>
  );
}

export default App;
