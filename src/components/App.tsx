import React from 'react';
import '../css/App.css';
import CircleButton from './CircleButton';

const App = () => {
  


  return (
    <div className="ui-container">
      <h1>DND-ify</h1>
      <div className="sheetcontainer">
      <CircleButton symbol="+" label="New Sheet" style={{fontSize: "3rem"}}/>

      </div>
    </div>
  );
}

export default App;
