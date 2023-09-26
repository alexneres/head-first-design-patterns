import { WeaponBehavior } from "./interfaces/weapon-behavior";

export class KnifeBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log('Using Knife')
    }
}