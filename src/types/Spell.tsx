import EndpointType from "../types/EndpointType";

interface DamageLevel {
    0?: string;
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
    7?: string;
    8?: string;
    9?: string;
}

interface DC {
    dc_type: EndpointType;
    dc_success: string;
}

interface Damage {
    damage_type: EndpointType;
    damage_at_slot_level: DamageLevel;
}

interface AOE {
    type: string;
    size: number;
}



interface Spell {
    index: string;
    name: string;
    desc: string[];
    higher_level: string[];
    range: string;
    components: "V" | "S" | "M" | "F" | "DF" | "XP";
    material?: string;
    ritual: boolean;
    duration: string;
    concentration: boolean;
    casting_time: string;
    level: number;
    attack_type?: string;
    damage?: Damage;
    dc?: DC;
    school: EndpointType;
    classes: EndpointType[];
    subclasses?: EndpointType[];
    url: string;
}


export default Spell;