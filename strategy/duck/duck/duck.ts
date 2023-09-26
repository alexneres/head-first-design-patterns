import { QuackBehavior, FlyBehavior } from "../behaviors/interfaces"

export class Duck {
   flyBehavior: FlyBehavior
   quackBehavior: QuackBehavior

  constructor (flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.flyBehavior = flyBehavior
    this.quackBehavior = quackBehavior
  }

  display():void {}

  swim():void {
    console.log('All ducks float, even decoys!')
  }

  performFly():void  {
    this.flyBehavior.fly()
  }

  performQuack():void  {
    this.quackBehavior.quack()
  }

  setFlyBehavior(flyBehavior: FlyBehavior):void  {
    this.flyBehavior = flyBehavior
  }

  setQuackBehavior(quackBehavior: QuackBehavior):void  {
    this.quackBehavior = quackBehavior
  }
}