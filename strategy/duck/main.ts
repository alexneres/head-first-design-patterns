import { FlyRocketPowered } from "./behaviors"
import { MallardDuck } from "./duck/mallard-duck"

class MiniDuckSimulator {
  main() {
    const mallard = new MallardDuck()
    mallard.performFly()
    mallard.display()
    mallard.setFlyBehavior(new FlyRocketPowered())
    mallard.performFly()
  }
}

const app = new MiniDuckSimulator()
app.main()
