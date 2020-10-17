import dnd from '../api/dnd';
import Spell from '../types/Spell';

const getSpell = async (url: string) => {
    const response = await dnd.get<Spell>(url);
    return response.data;
}

export default getSpell;




