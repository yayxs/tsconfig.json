/**
 * 启用后，TypeScript 将检查函数中的所有代码路径以确保它们返回值。
 * @param color : ;
 * @returns
 */
function sayColor(color: 'dark' | 'light'): string {
  if (color === 'dark') {
    return '1'
  } else {
    // 并非所有代码路径都返回值
    // return '0'
  }
}
