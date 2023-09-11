import { FlyBehavior } from "./interfaces/fly-behavior-interface";
import { QuackBehavior } from "./interfaces/quack-behavior-interface";

export class FlyWithWings implements FlyBehavior {
  fly() {
    console.log("I'm flying")
  }
}

export class FlyRocketPowered implements FlyBehavior {
  fly() {
    console.log("I'm flying with a rocket!")
  }
}

export class Quack implements QuackBehavior {
  quack() {
    console.log('Quack')
  }
}

export class MuteQuack implements QuackBehavior {
  quack() {
    console.log('<< Silence >>')
  }
}