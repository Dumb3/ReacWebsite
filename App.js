import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import './Default/default.css';
import AreaTotal from './Main/main.js';
import Explanation from './Citation/txtexplain';
import './Main/main.css';
import './Citation/explain.css';
import WhoAm from './Iam/whoami.js';
import './Iam/whoami.css';







function App() {
    
  return (
    
    <div className="App">
      
       <Header/>
       <Explanation/>
       <AreaTotal/>
       <WhoAm/>
      
       
      
      
    </div>
  );
}


export default App;
