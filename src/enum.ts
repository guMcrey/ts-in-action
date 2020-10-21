// 数字枚举: 实现原理, 反向映射
enum role {
  Reporter,
  Developer,
  Maintainer,
}

window.alert(role.Reporter) // 0
console.log(role)

// 字符串枚举: 不会进行反向映射
enum Message {
  Success = '成功',
  Fail = '失败',
}

// 异构枚举
enum Answer {
  N,
  Y = 'Yes',
}

// 常量枚举
const enum A {}
