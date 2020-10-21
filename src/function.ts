// 函数定义
function add1(x: number, y: number) {
  return x + y
}

let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

interface add4 {
  (x: number, y: number): number
}

// 可选参数
function add5(x: number, y?: number) {
  return y ? x + y : x
}

// 默认参数
function add6(x: number, y = 0, z: number, m = 9) {
  return x + y + z + m
}
console.log(add6(1, undefined, 1))

// 剩余参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
console.log(add7(9, 32, 2, 3))

// 函数重载: 先定义相同的函数声明, 在类型最宽泛的函数中实现函数
function add8(...rest: number[]): number
function add8(...rest: string[]): string

function add8(...rest: any): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  } else {
    return rest.reduce((pre: number, cur: number) => pre + cur)
  }
}

add8(1, 2, 3)
add8('a', 'b', 'c')
