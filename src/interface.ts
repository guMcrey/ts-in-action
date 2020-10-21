// ---------对象类型-----------

interface List {
  readonly id: number
  name: string
  // 字符串索引签名: 用任意的值去索引签名可以得到任意的结果
  //   [x: string]: any
  // 可选属性
  age?: number
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
  })
}
let result = {
  data: [
    {id: 1, name: 'A'},
    {id: 2, name: 'B'},
  ],
}

// 1. 变量
render(result)
// 2. 类型断言 as xxx
render({
  data: [
    {id: 1, name: 'A', title: 'S'},
    {id: 2, name: 'B'},
  ],
} as Result)

// 传入的对象满足接口的必要条件, 即是被允许的

// 可索引类型接口
interface StringArray {
  // 用任意数字索引, 都会得到一个字符串
  [index: number]: string
}

interface Names {
  [x: string]: string
  // 保证类型的兼容
  [y: number]: string
}

// ---------函数类型-----------
let addFn: (x: number, y: number) => number

interface Add {
  (x: number, y: number): number
}

// 类型别名
type AddFn = (x: number, y: number) => number

let addFn1: AddFn = (a, b) => a + b

// 定义混合接口
interface Lib {
  (): void
  version: string
  doSomething(): void
}

// 实现混合接口
function getLib() {
  let lib: Lib = (() => {}) as Lib
  lib.version = 'xxx'
  lib.doSomething = () => {}
  return lib
}
let lib1 = getLib()
lib1()
lib1.doSomething()
let lib2 = getLib()
