import { FlyWithWings, Quack } from "./duck/behaviors";
import { Duck } from "./duck/duck";

export class MallardDuck extends Duck {
  constructor() {
    const flyBehavior = new FlyWithWings();
    const quackBehavior = new Quack();
    super(flyBehavior, quackBehavior);
  }

  display() {
    console.log('I am a Mallard duck.');
  }
}