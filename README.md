JavaScript with syntax for types.
带有类型语法的 JavaScript。
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
TypeScript 是一种基于 JavaScript 的强类型编程语言，可为您提供任何规模的更好的工具。

- 编辑器检查
- 自动补全
- 接口
- JSX

[4.8](https://devblogs.microsoft.com/typescript/announcing-typescript-4-8/)
[4.9](https://devblogs.microsoft.com/typescript/announcing-typescript-4-9-beta/)

JavaScript and More JavaScript 等

TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor . Catch errors early in your editor.

TypeScript 向 JavaScript 添加了额外的语法，以支持与您的编辑器更紧密的集成。 在您的编辑器中尽早发现错误。

A Result You Can Trust 值得信赖的结果

TypeScript code converts to JavaScript, which runs anywhere JavaScript runs : In a browser, on Node.js or Deno and in your apps.

TypeScript 代码转换为 JavaScript，它可以在 JavaScript 运行的任何地方运行：在浏览器中、在 Node.js 或 Deno 上以及在您的应用程序中。

Safety at Scale 大规模安全

TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.
TypeScript 理解 JavaScript 并使用类型推断为您提供出色的工具，而无需额外的代码。

逐渐采用 TypeScript

逐步将类型应用于您的 JavaScript 项目，每一步都会改进编辑器支持并改进您的代码库。
让我们看看这个不正确的 JavaScript 代码，看看 TypeScript 如何在你的编辑器中捕捉错误

`tsconfig.json` ts 项目的根目录，编译项目所需的跟文件和编译器选项
`jsconfig.json` javascript 相关编译器标志

`tsc` 编译器会从当前目录开始搜索 `tsconfig.json` 父目录链查找

运行代码的 js 运行时环境 使用基本配置 简化 `tsconfig.json`

TSConfig 文件可以是 tsconfig.json 或者 jsconfig.json 相同的配置变量集

- 所有编译器标志的分类概述
- 哪些文件可用的跟字段
- 文档的大部分内容
- 用于调整监听模式
- 用于调整类型调整到

### files

指定要包含在程序中的文件的允许列表。如果找不到任何文件，则会发生错误。

```json
{
  "files": ["core.ts"]
}
```

```ts
function fileName(name: string) {
  console.log('name')
}

fileName('core')
```

```js
function fileName(name) {
  console.log('name')
}
fileName('core')
```

很少的文件才使用 files

### extends

extends 的值是一个字符串，其中包含要继承的另一个配置文件的路径。该路径可能使用 Node.js 样式解析。
首先加载基本文件中的配置，然后被继承配置文件中的配置覆盖。在配置文件中找到的所有相对路径都将相对于它们所在的配置文件进行解析。

```json
{
  "extends": "../tsconfig.json",
  "extends": "@tsconfig/svelte/tsconfig.json"
}
```

### include

指定要包含在程序中的文件名或模式数组。这些文件名相对于包含 tsconfig.json 文件的目录进行解析

\*匹配零个或多个字符（不包括目录分隔符）
?匹配任何一个字符（不包括目录分隔符）
\*\*/ 匹配任何嵌套到任何级别的目录

```json
{
  "include": ["src", "__tests__"],
  "include": ["src/**/*.ts"],
  "include": ["src/**/*.d.ts", "src/**/*.ts", "src/**/*.js", "src/**/*.svelte"],
  "include": ["."],
  "include": ["src"],
  "include": ["./src"],
  "include": ["./", "../dep-types", "../types"],
  "include": ["./rollup.config.ts"]
}
```

### exclude

指定解析包含时应跳过的文件名或模式数组。仅排除因包含设置而包含的文件的更改。由于代码中的导入语句、类型包含、`///` `<reference` 指令或在文件列表中指定，由 exclude 指定的文件仍然可以成为代码库的一部分。它不是一种阻止文件被包含在代码库中的机制——它只是改变了包含设置找到的内容。

### references

项目引用是一种将 TypeScript 程序构造成更小部分的方法。使用项目引用可以大大缩短构建和编辑器的交互时间，强制组件之间的逻辑分离，并以新的和改进的方式组织您的代码。

这些选项构成了 TypeScript 的大部分配置，它涵盖了该语言的工作方式。

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

### alwaysStrict

确保您的文件在 ECMAScript 严格模式下解析，并为每个源文件发出“use strict”。ECMAScript 严格模式是在 ES5 中引入的，它为 JavaScript 引擎的运行时提供行为调整以提高性能，并抛出一组错误而不是默默地忽略它们。

### noFallthroughCasesInSwitch

校验 `switch` 语句

```js
const a: number = 1

switch (a) {
  case 0:
    console.log('0')
  // break;

  default:
    break
}
```
