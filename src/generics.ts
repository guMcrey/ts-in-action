// 泛型

// 1. 泛型函数
// 定义
function log<T>(value: T): T {
  console.log(value)
  return value
}

// 使用
log<string[]>(['a', 'b'])
log(['a', 'b'])

// 2. 泛型函数类型
type Log = <T>(value: T) => T
// 范型函数的实现
let myLog: Log = log

// 2. 泛型接口
interface Log1 {
  <T>(value: T): T
}

interface Log2<T> {
  (value: T): T
}

let myLog1: Log2<number> = log
myLog(1)
