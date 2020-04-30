import {default as marked} from "marked";
const characters = () => import(/* webpackChunkName: "characters" */ '@/characters')

export function name(char) {
    let name = ""
    if (char.firstname) {
        name += char.firstname + " ";
    }
    name += char.name;
    if (char.lastname) {
        name += " " + char.lastname;
    }
    return name;
}

export function desc(char) {
    return marked("" + char.role + "  \n" + char.desc);
}

export function id(char) {
    return char.name.toLowerCase();
}

export function exists(char) {
    return characters.some(character => char.toLowerCase() === character.name.toLowerCase())
}
