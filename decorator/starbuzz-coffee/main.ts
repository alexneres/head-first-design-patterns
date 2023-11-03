import { Size } from "./berevages/berevage"
import { Espresso } from "./berevages/espresso"
import { Mocha } from "./condiments/mocha"
import { Whip } from "./condiments/whip"

class StarBuzzCoffee {
    main() {
        let berevage1 = new Espresso()
        berevage1 = new Mocha(berevage1)
        berevage1 = new Mocha(berevage1)
        berevage1 = new Whip(berevage1)
        console.log(berevage1.getDescrition())
        console.log(berevage1.cost())
    }
}

const app = new StarBuzzCoffee()
app.main()