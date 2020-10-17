import requestSpell from '../api/requests/requestSpell';
import requestSpells from '../api/requests/requestSpells';
import SpellParams from '../types/SpellParams';
import Spell from '../types/Spell';

const getSpells = (params: SpellParams, setSpells: React.Dispatch<React.SetStateAction<Spell[]>>) => {
    requestSpells(params).then((spellTypes) => {
      spellTypes.forEach(spellType => {
        //check if spell is already there
        requestSpell(spellType.url).then(spell => {
          setSpells(oldSpells => [...oldSpells, spell]);
        });
      })
    });
}

export default getSpells;