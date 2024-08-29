### Type Checking / exactOptionalPropertyTypes

这一配置会使得 `ts` 对可选择的属性 `?` 启用更加严格的检查 ，

```ts
interface IColors {
  color: 'dark' | 'red'
}
```
