import { Berevage } from "../berevages/berevage"
import { CondimentDecorator } from "./condiment-decorator"

export class Mocha extends CondimentDecorator {
    constructor (readonly berevage: Berevage) {
        super(berevage)
    }

    getDescrition() {
        return this.berevage.getDescrition() + ', Mocha'
    }

    cost() {
        return this.berevage.cost() + .20
    }
}