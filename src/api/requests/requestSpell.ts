import dnd from '../dnd';
import Spell from '../../types/Spell';

const requestSpell = async (url: string) => {
    const response = await dnd.get<Spell>(url);
    return response.data;
}

export default requestSpell;




