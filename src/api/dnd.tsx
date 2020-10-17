import axios from 'axios';


const dnd = axios.create({ baseURL: "https://www.dnd5eapi.co/", });

export default dnd;