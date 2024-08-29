### Type Checking / alwaysStrict

确保您的文件在 ECMAScript 严格模式下解析，并为每个源文件发出“use strict”。ECMAScript 严格模式是在 ES5 中引入的，它为 JavaScript 引擎的运行时提供行为调整以提高性能，并抛出一组错误而不是默默地忽略它们。
会对所有的 `ts` 文件使用严格模式 进行检查 生成的 js 文件也会带 `use strict`
