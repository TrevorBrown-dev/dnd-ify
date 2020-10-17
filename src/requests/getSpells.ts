import dnd from '../api/dnd';
import Class from '../types/Class';
import EndpointResponse from '../types/EndpointResponse';
import Level from '../types/Level';
interface SpellParams {
    name?: string;
    level?: Level;
    class?: Class;
}


const getSpells = async (params?: SpellParams) => {
    const response = await dnd.get<EndpointResponse>('api/spells', { params });
    return response.data.results;
}

export default getSpells;