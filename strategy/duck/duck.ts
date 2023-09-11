import { FlyBehavior } from "./interfaces/fly-behavior-interface";
import { QuackBehavior } from "./interfaces/quack-behavior-interface";

export class Duck {
   flyBehavior: FlyBehavior
   quackBehavior: QuackBehavior

  constructor (flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.flyBehavior = flyBehavior
    this.quackBehavior = quackBehavior
  }

  performFly() {
    this.flyBehavior.fly()
  }

  performQuack() {
    this.quackBehavior.quack()
  }

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior
  }

  setQuackBehavior(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior
  }
}