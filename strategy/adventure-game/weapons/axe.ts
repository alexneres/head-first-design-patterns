import { WeaponBehavior } from "./interfaces/weapon-behavior"

export class AxeBehavior implements WeaponBehavior {
    useWeapon() {
        console.log('Chopping with an axe')
    }
}