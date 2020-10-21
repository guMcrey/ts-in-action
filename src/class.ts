// 类的实现

// 类型注解, 类型推断
class Dog {
  constructor(name: string) {
    this.name = name
  } // Dog
  public name: string
  run() {} // void
  private pr1() {}
  protected pr2() {}
  readonly leg: number = 2
  static food: string = 'xx'
}
console.log(Dog.prototype) // run(), constructor()
const dog = new Dog('wangwang')
console.log(dog) // Dog {name: wangwang}

// 类的继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name)
    this.color = color
    this.pr2()
  }
  color: string
}

// 抽象类
abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void
}

// 无法创建实例化的类
// let animal = new Animal()
class Dog1 extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('dog sleep')
  }
}

let dog1 = new Dog1('wangwang')
dog1.eat()

// 多肽
class Cat extends Animal {
  sleep() {
    console.log('cat')
  }
}
let cat = new Cat()

let animals: Animal[] = [dog1, cat]
animals.forEach((i) => {
  i.sleep()
})

// 方法的链式调用
class workFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new workFlow().step1().step2()

class myFlow extends workFlow {
  next() {
    return this
  }
}

new myFlow().next().step1().next().step2()
