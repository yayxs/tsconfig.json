/**
 * 在某些不存在类型注释的情况下，TypeScript 将在无法推断类型时回退到变量的任何类型。
 * @param s
 */
function foo(s: string) {
  console.log(s.substr(1, 2))
}

foo('12')
