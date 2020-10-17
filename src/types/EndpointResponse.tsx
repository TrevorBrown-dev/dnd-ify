import EndpointType from "./EndpointType";


interface EndpointResponse {
    count: number;
    results: EndpointType[];
}

export default EndpointResponse;