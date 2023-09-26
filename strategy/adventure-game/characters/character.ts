import { WeaponBehavior } from "../weapons/interfaces/weapon-behavior";

export class Character {
    constructor(private weaponBehavior: WeaponBehavior) {
    }

    fight() {
        this.weaponBehavior.useWeapon()
    }

    changeWeapon(weaponBehavior: WeaponBehavior) {
        this.weaponBehavior = weaponBehavior
    }
}