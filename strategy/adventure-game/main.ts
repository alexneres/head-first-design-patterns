import { King } from "./characters/king"
import { Knight } from "./characters/knight"
import { Queen } from "./characters/queen"
import { Troll } from "./characters/troll"
import { SwordBehavior } from "./weapons/sword"


class AdventureGame {
    main() {
        const queen = new Queen()
        const king = new King()
        const troll = new Troll()
        const knight = new Knight()

        queen.fight()
        queen.changeWeapon(new SwordBehavior())
        queen.fight()

    }
}

const app = new AdventureGame()
app.main()