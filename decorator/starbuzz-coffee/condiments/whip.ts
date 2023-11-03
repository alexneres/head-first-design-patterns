import { Berevage, Size } from "../berevages/berevage"
import { CondimentDecorator } from "./condiment-decorator"

export class Whip extends CondimentDecorator {
    constructor (readonly berevage: Berevage) {
        super(berevage)
    }

    getDescrition() {
        return this.berevage.getDescrition() + ', Whip'
    }

    cost() {
        const size = this.berevage.getSize()

        switch (size) {
            case Size.GRANDE:
                return this.berevage.cost() + .10
            case Size.TALL:
                return this.berevage.cost() + .15
            case Size.VENTI:
                return this.berevage.cost() + .20
            default:
                return this.berevage.cost()
        }
    }
}