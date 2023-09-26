import { AxeBehavior } from "../weapons/axe";
import { Character } from "./character";

export class Troll extends Character {
    constructor () {
        const weaponBehavior = new AxeBehavior()
        super(weaponBehavior)
    }
}