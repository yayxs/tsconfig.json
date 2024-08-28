通常表示无法执到的代码 `Dead Code` ，包括 `return语句` `throw语句` `process.exit` 后代码

```json
 "compilerOptions": {
    "allowUnreachableCode": false
  },
```

```ts
function fn(n: number) {
  if (n > 5) {
    return false
  } else {
    return true
  }

  return true // 代码无法抵达报提示"allowUnreachableCode": false
}
```

allowUnreachableCode 配置的默认值为 undefined，表现为在编译过程中并不会抛出阻止过程的错误，而只是一个警告。它也可以配置为 true（完全允许）与 false （抛出一个错误）
