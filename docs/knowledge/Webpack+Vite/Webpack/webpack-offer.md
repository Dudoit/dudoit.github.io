# Webpack 面试题

## 为什么要进行打包和构建

代码层面：体积更小，加载速度更快；编译高级语言；兼容性和错误检查

研发层面：统一的开发环境；统一个构建流程和产出标准

## webpack 构建流程

初始化参数
开始编译
确定入口：从配置 entry 入口，解析文件构建 AST 语法树，找出其中的依赖
编译模块
完成模块编译
输出资源
输出完成：确定好输出内容后，根据配置寻找输出的路径和文件名，将内容写入文件系统

与打包流程强相关的配置项有：
输入输出：
entry：用于定义项目入口文件，Webpack 会从这些入口文件开始按图索骥找出所有项目文件；
context：项目执行上下文路径；
output：配置产物输出路径、名称等；
模块处理：
resolve：用于配置模块路径解析规则，可用于帮助 Webpack 更精确、高效地找到指定模块
module：用于配置模块加载规则，例如针对什么类型的资源需要使用哪些 Loader 进行处理
externals：用于声明外部资源，Webpack 会直接忽略这部分资源，跳过这些资源的解析、打包操作
后处理：
optimization：用于控制如何优化产物包体积，内置 Dead Code Elimination、Scope Hoisting、代码混淆、代码压缩等功能
target：用于配置编译产物的目标运行环境，支持 web、node、electron 等值，不同值最终产物会有所差异
mode：编译模式短语，支持 development、production 等值，可以理解为一种声明环境的短语

除了核心的打包功能之外，Webpack 还提供了一系列用于提升研发效率的工具，大体上可划分为：
开发效率类：
watch：用于配置持续监听文件变化，持续构建
devtool：用于配置产物 Sourcemap 生成规则
devServer：用于配置与 HMR 强相关的开发服务器功能
性能优化类：
cache：Webpack 5 之后，该项用于控制如何缓存编译过程信息与编译结果
performance：用于配置当产物大小超过阈值时，如何通知开发者
性能优化类：
cache：Webpack 5 之后，该项用于控制如何缓存编译过程信息与编译结果
performance：用于配置当产物大小超过阈值时，如何通知开发者

## webpack 的基本功能

代码转换：将浏览器不能直接运行的扩展语言（TypeScript，less）编译为浏览器可识别的语言（JavaScript，CSS）
文件优化：压缩 HTML、CSS、JavaScript 代码，压缩合并图片
代码分割：提取多个页面的公共代码，提取首屏不需要执行的部分让其异步加载
模块合并：采用模块化项目时有很多模块和文件，构建功能将模块分类合并为一个文件
自动刷新：监听本地源代码的变化，自动构建，刷新浏览器；开启热加载可以只更新模块
代码校验：代码被提交到仓库前检测代码是否规范

## loader 和 plugin 的区别

**作用不同**

loader：加载器，Webpack 将一切文件视为模块，但是 webpack 原生是只能解析 js 文件，如果想将其他文件也打包的话，就会用到loader。 所以Loader的作用是让 webpack 拥有了加载和解析非 JavaScript 文件的能力。

plugin：插件，Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。 在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

**用法不同**

loader：在 module.rules 中配置，也就是说它作为模块的解析规则而存在。类型为数组，每一项都是一个Object，里面描述了对于什么类型的文件（test），使用什么加载(loader)和使用的参数（options）。

plugin：在 plugins 中单独配置。类型为数组，每一项是一个plugin的实例，参数都通过构造函数传入。