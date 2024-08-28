## extends

extends 的值是一个字符串，其中包含要继承的另一个配置文件的路径。该路径可能使用 Node.js 样式解析。
首先加载基本文件中的配置，然后被继承配置文件中的配置覆盖。在配置文件中找到的所有相对路径都将相对于它们所在的配置文件进行解析。

```json
{
  "extends": "../tsconfig.json",
  "extends": "@tsconfig/svelte/tsconfig.json"
}
```
