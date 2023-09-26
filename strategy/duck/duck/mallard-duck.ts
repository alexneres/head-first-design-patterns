import { FlyWithWings, Quack } from "../behaviors";
import { Duck } from "./duck";


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