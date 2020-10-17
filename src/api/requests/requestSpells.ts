import dnd from '../dnd';
import EndpointResponse from '../../types/EndpointResponse';
import SpellParams from '../../types/SpellParams';



const requestSpells = async (params?: SpellParams) => {
    const response = await dnd.get<EndpointResponse>('api/spells', { params });
    return response.data.results;
}

export default requestSpells;