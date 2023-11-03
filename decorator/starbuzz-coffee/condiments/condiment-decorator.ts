import { Berevage } from "../berevages/berevage"

export class CondimentDecorator extends Berevage {
    constructor (readonly berevage: Berevage) {
        super()
    }

    getDescrition(): string {
        return this.description
    }
}