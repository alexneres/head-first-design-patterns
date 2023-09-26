import { BowAndArrow } from "../weapons/bow-and-arrow";
import { Character } from "./character";

export class Queen extends Character {
    constructor () {
       const weaponBehavior = new BowAndArrow()
       super(weaponBehavior)
    }
}