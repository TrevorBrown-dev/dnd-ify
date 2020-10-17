import React, { useEffect, useState } from 'react';
import getSpells from '../requests/getSpells';
import getSpell from '../requests/getSpell';
import '../scss/App.scss';
import Spell from '../types/Spell';
const App = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  
  useEffect(() => {
    getSpells({

    }).then((spellTypes) => {
      spellTypes.forEach(spellType => {
        getSpell(spellType.url).then(spell => {
          setSpells(oldSpells => [...oldSpells, spell]);
        });

      })
    });
  }, []);

  const renderSpells = () => {
    console.log(spells);
    return spells?.map(spell => {
      return (<li>
        <h1>{spell.name}</h1>
        <p>
          {spell.desc[0]}
        </p>
      </li>)
    })
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
