## link

- [https://www.typescriptlang.org/tsconfig](https://www.typescriptlang.org/tsconfig)
- [https://swc.rs/playground](https://swc.rs/playground)
- [https://swc.rs/docs/getting-started](https://swc.rs/docs/getting-started)

`tsconfig.json` 是 TypeScript 项目的配置文件，它用于指定 TypeScript 编译器（tsc）的编译选项和项目配置。这个配置文件位于 TypeScript 项目的根目录下，并且可以包含各种编译选项以满足项目的特定需求。
TSConfig 文件中可用的所有不同选项。有超过 100 个选项

# compilerOptions

编译器选项

## target

选择适合的 target 取决于你的项目需求和目标环境。一般来说，如果你要支持更多的浏览器和旧版 JavaScript 运行环境，可以选择较低的 ECMAScript 版本，如 ES5。如果你想使用最新的 ECMAScript 特性，并且目标环境支持较新的 JavaScript 版本，可以选择较高的版本，如 ES2015、ES2016 或 ESNext。
