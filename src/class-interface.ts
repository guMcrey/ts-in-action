interface Human {
  name: string
  eat(): void
}

// 类实现接口时, 必须实现接口中类声明的所有的属性
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() {}
  sleep() {}
}

interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  eat() {},
  cry() {},
  run() {},
}

// 接口继承类
class Auto {
  state = 1
}

interface AutoInterface extends Auto {}

class C implements AutoInterface {
  state = 1
}
