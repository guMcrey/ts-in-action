// 原始类型
let bool: boolean = false
let num: number = 123
let str: string = 'abc'

// typeScript 的数据类型不可改变
// str = 1   // 报错

// 数组
// 如果想修改现有数据类型, 可以使用联合数据类型 ‘|’
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4']

// 元组
// 一种特殊的数组, 表示了数组的类型和个数
let tuple: [number, string] = [1, '1']

// 元组的越界, 数组方法, 元组也可以访问
tuple.push('u')
// window.alert(tuple) // [1, '1', 'u']
// tuple[2]   // 访问时报错

// 函数
// typescript 的类型推算功能
let add = (x: number, y: number) => x + y

// 对象
let obj: {x: number; y: number} = {x: 1, y: 2}
obj.x = 2

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
window.alert(s1 === s2) // false

// undefined null
// undefined 和 null 是其他类型的子类型
let un: undefined = undefined
let nu: null = null

// void: 没有返回值
let noReturn = () => {}

// any: 默认类型
let x

// never: 永远不会有返回值
let error = () => {
  throw new Error('error')
}

let endless = () => {
  while (true) {}
}
