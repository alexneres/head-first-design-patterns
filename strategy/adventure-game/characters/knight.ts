import { SwordBehavior } from "../weapons/sword";
import { Character } from "./character";


export class Knight extends Character {
    constructor (){
        const weaponBehavior = new SwordBehavior()
        super(weaponBehavior)
    }
}

