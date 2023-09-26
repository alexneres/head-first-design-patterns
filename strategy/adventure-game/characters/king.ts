import { KnifeBehavior } from "../weapons/knife"
import { Character } from "./character"


export class King extends Character {
    constructor() {
        const weaponBehavior = new KnifeBehavior()
        super(weaponBehavior)
    }
}