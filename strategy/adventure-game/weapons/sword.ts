import { WeaponBehavior } from "./interfaces/weapon-behavior";


export class SwordBehavior implements WeaponBehavior {
    useWeapon() {
        console.log('Swinging a sword')
    }
}