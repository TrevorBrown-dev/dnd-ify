import React, { useEffect, useState } from 'react';
import getSpells from '../getters/getSpells';
import '../scss/App.scss';
import Spell from '../types/Spell';
const App = () => {
  const [spells, setSpells] = useState<Spell[]>([]);



  useEffect(() => {
    console.log("running");
    getSpells({ level: 0}, setSpells);  
  }, []);

  const renderSpells = () => {
    return spells?.map(spell => {
      return (<li key={spell.index}>
        <h1>{spell.name}</h1>
        <p>
          {spell.desc[0]}
        </p>
      </li>
      );
    });
  }


  return (
    <div className="ui-container">
      <ul>
        {renderSpells()}
      </ul>
    </div>
  );
}

export default App;
