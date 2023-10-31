# TypeScript Home Docs

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

构建相关、类型检查相关、工程相关
使用工程能力进行项目开发
检查源码
输出产物

# Top Level

下文提到的 files、include 与 exclude 决定了将被本次编译的代码文件

## files

指定要包含在程序中的文件的允许列表。如果找不到任何文件，则会发生错误。不能使用 `src` 或者 `src/*` 需要完整的文件路径

```json
{
  "files": ["src/files/file-a.ts", "src/files/file-b.ts"]
}
```

**很少的文件才使用 files**

## extends

extends 的值是一个字符串，其中包含要继承的另一个配置文件的路径。该路径可能使用 Node.js 样式解析。
首先加载基本文件中的配置，然后被继承配置文件中的配置覆盖。在配置文件中找到的所有相对路径都将相对于它们所在的配置文件进行解析。

```json
{
  "extends": "../tsconfig.json",
  "extends": "@tsconfig/svelte/tsconfig.json"
}
```

## references

项目引用是一种将 TypeScript 程序构造成更小部分的方法。使用项目引用可以大大缩短构建和编辑器的交互时间，强制组件之间的逻辑分离，并以新的和改进的方式组织您的代码。

换句话说，将整个工程拆分多个部分，`UI部分` `Hooks部分`

> 这些选项构成了 TypeScript 的大部分配置，它涵盖了该语言的工作方式。

## compilerOptions

默认或者给出警告，显示的通过配置允许有害语法
`allowXXX`

### Type Checking / allowUnreachableCode

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

### Type Checking / allowUnusedLabels

```js
someLabel: statement
```

statement 语句会被标记为 someLabel ，然后在别的地方你就可以用 someLabel 来引用这段语句。

### Type Checking / alwaysStrict

确保您的文件在 ECMAScript 严格模式下解析，并为每个源文件发出“use strict”。ECMAScript 严格模式是在 ES5 中引入的，它为 JavaScript 引擎的运行时提供行为调整以提高性能，并抛出一组错误而不是默默地忽略它们。
会对所有的 `ts` 文件使用严格模式 进行检查 生成的 js 文件也会带 `use strict`

### Type Checking / exactOptionalPropertyTypes

这一配置会使得 `ts` 对可选择的属性 `?` 启用更加严格的检查 ，

```ts
interface IColors {
  color: 'dark' | 'red'
}
```

### Type Checking /noFallthroughCasesInSwitch

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

这一配置确保在你的 `switch case` 语句中不会存在连续多个 `case` 语句的情况 注意连续执行指的是 `case` 中自己执行了专属逻辑后，由于没有 `break/return ` 语句导致继续向下执行

### Type Checking / noImplicitAny

在某些不存在类型注释的情况下，TypeScript 将在无法推断类型时回退到变量的任何类型。

```ts
function foo(s) {
  console.log(s.includes('x'))
}

foo(12)
foo(true)
foo({})
```

没有类型被推导`any` 禁止行为，

### Type Checking / noImplicitOverride

```ts
/**
 * 派生类继承基类的时候。通常不希望去覆盖基类已经有的方法
 * 在真正需要覆盖基类方法的时候 这一配置的作用就是 避免在不使用 `override` 关键字的情况下
 */

class BaseCls {
  print() {}
}

class SomeCls1 extends BaseCls {
  override print(): void {}
}

class SomeCls2 extends BaseCls {
  // 错误
  // print(): void {
  // }
}
```

### Type Checking / noImplicitReturns

### Type Checking / noUnusedParameters

### Type Checking /strict

严格标志启用了范围广泛的类型检查行为，从而更有效地保证了程序的正确性。打开它相当于启用所有严格模式系列选项，如下所述。然后，您可以根据需要关闭单个严格模式系列检查。
TypeScript 的未来版本可能会在此标志下引入额外的更严格检查，因此 TypeScript 的升级可能会导致程序中出现新的类型错误。在适当且可能的情况下，将添加相应的标志以禁用该行为。

该配置是一组规则的开关 开启 `strict` 会默认将这些规则全部启用

包括

- `alwaysStrict` `useUnknownInCatchVariables`
- `noFallthroughCasesInSwitch` `noImplicitAny` `noImplicitThis`

### Type Checking / strictBindCallApply

`JavaScript` 通过 `bind` `call` `apply` 改变函数的 this 配置确保 在使用 `bind` `call` `apply` 参数保持一致

### Type Checking / strictFunctionTypes

对函数类型启用更严格的检查

### Type Checking / strictNullChecks

### Type Checking / strictPropertyInitialization

要求 class 所有的属性都要存在一个初始值 无论是在声明时候就提供 还是在构造函数中初始化

### Type Checking /

启用此配置后， `try/catch` 语句中的 `catch` 的 `error` 类型会被 `unknown` 否则是 `any` 类型

### Modules / allowUmdGlobalAccess

直接使用`UMD` 格式模块而不需要先导入

### Modules / baseUrl

允许您设置基本目录以解析非绝对模块名称。您可以定义一个根文件夹，您可以在其中进行绝对文件解析。例如。
这一配置可以定义文件进行解析的根目录，它通常会是一个相对路径，然后配合 tsconfig.json 所在的路径来确定根目录的位置。

```js
"baseUrl": "./", // 指的是 项目的根目录
```

### Modules / module

```json
{
  "compilerOptions": {
    "module": "ES2020",
    "module": "ESNext",
    "module": "esnext",
    "module": "CommonJS"
  }
}
```

### Modules / moduleResolution

指定模块解析策略

- 'node' 用于 node 的 commonJS 实现

### Modules / moduleSuffixes

### Modules / moduleSuffixes

### Modules / noResolve

### Modules / paths

一系列将导入重新映射到相对于 baseUrl 的查找位置的条目。路径允许你声明 TypeScript 应该如何解析你的 require/imports 中的导入。

### Modules / resolveJsonModule

### Modules / rootDir

### Modules / rootDirs

### Modules / typeRoots

### Modules / types

## Emit / outDir

如果指定，.js（以及 .d.ts、.js.map 等）文件将被发送到此目录。保留原始源文件的目录结构；如果计算的根不是您想要的，请参阅 rootDir。如果未指定，.js 文件将在与它们生成的 .ts 文件相同的目录中发出：

### JavaScript Support/ allowJs

允许在项目中导入 JavaScript 文件，而不仅仅是 .ts 和 .tsx 文件。例如这个 JS 文件.导入 TypeScript 文件时会引发错误：通过允许 .ts 和 .tsx 文件与现有的 JavaScript 文件一起存在，此标志可用作将 TypeScript 文件增量添加到 JS 项目中的一种方式。

### JavaScript Support / checkJs

与 allowJs 协同工作。启用 checkJs 后，会在 JavaScript 文件中报告错误。这相当于在项目中包含的所有 JavaScript 文件的顶部包含 // @ts-check。

### Language and Environment / emitDecoratorMetadata / 装饰器元数据相关

启用对与模块反射元数据一起使用的装饰器发射类型元数据的实验性支持。

### Language and Environment / experimentalDecorators / 实验装饰器

启用对装饰器的实验性支持，这是 TC39 标准化过程的第 2 阶段。
装饰器是一种尚未完全被 JavaScript 规范认可的语言特性。这意味着 TypeScript 中的实现版本可能与 TC39 决定的 JavaScript 中的实现版本不同。
您可以在手册中找到有关 TypeScript 中装饰器支持的更多信息

```ts
function LogFunc(target: any, propertyKey: string | symbol) {
  console.log(target)
  console.log(propertyKey)
}

class Demo {
  @LogFunc
  public foo() {}
}
```

这两个选项都和装饰器有关，其中 experimentalDecorators 选项用于启用装饰器的 @ 语法，而 emitDecoratorMetadata 配置则影响装饰器实际运行时的元数据相关逻辑，

### Language and Environment / jsx jsxFactory jsxFragmentFactory jsxImportSource

在`template-react-ts` 中

```json
 "jsx": "react-jsx"
```
