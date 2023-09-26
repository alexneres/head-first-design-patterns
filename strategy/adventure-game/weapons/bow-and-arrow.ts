import { WeaponBehavior } from "./interfaces/weapon-behavior";


export class BowAndArrow implements WeaponBehavior {
    useWeapon() {
        console.log('Shotting an arrow with a bow')
    }
}