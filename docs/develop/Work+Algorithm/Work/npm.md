<script setup>
import cdnImg from '/.vitepress/components/cdnImg.vue';
</script>

# 发布自己的 npm 包

[npm](https://www.npmjs.com/)

https://juejin.cn/post/7215465880884920379?searchId=20230814093604B2F18D279A38F4D55074#heading-9

## 前期准备 - 注册 NPM 账号

<cdnImg src="npm-register" />

## 本地创建项目

```Bash
npm init
```

通过命令行配置项，最终可以生成一个 `json` 文件：

```JSON [package.json]
{
  // 项目包名
  "name": "file-dir-l",
  // 版本号
  "version": "1.0.0",
  // 描述
  "description": "create a file directory list for your project",
  // 类型: moduel | commonjs
  "type": "moduel",
  // 入口文件
  "main": "index.js",
  // 测试用例
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // 仓库地址
  "repository": {
    "type": "git",
    "url": "https://github.com/Dudoit/file-dir-l.git"
  },
  // 搜索用的关键词
  "keywords": [
    "file-dir-l",
    "file",
    "directory",
    "dudoit"
  ],
  // 作者信息
  "author": "",
  // 开源许可证
  "license": "MIT"
}
```

## 登录 npm - 上传

执行 `npm login` 登录 npm 

<cdnImg src="npm-login" />

点击生成的点链接做邮箱验证登录

<cdnImg src="npm-two-factor" />

执行 `npm publish` 开始上传

<cdnImg src="npm-publish" />

## publish 常见异常分析

- 当前发布版本小于线上版本
- 当前发布版本等于线上版本
- 未登录 npm
- 镜像包错误

## 🎉 上传成功 - 完成

<cdnImg src="npm-finish" />

## file-dir-tree 库

- 开源许可证

- 代码

  ::: code-group
  ```JavaScript [index.js]
  #!/usr/bin/env node
  import fs  from 'fs';
  import path  from 'path';
  import chalk from 'chalk';
  import { program } from 'commander';
  import { fileURLToPath } from 'url';
  import EventProcessingCenter from './event.js';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const pack = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
  console.log(chalk.blueBright.bold(`file-dir-tree v${pack.version}`));

  let filterFolder = ['node_modules', '.git'];

  program
    .name(pack.name)
    .version(pack.version, '-v, --version', 'output the current version');

  program
    .command('init')
    .description('Build the project file directory')
    .option('-i, --ignore [ignore...]', 'You can ignore specific directory name', )
    .option('-e, --export <file>', 'You can define the file name for the export', 'directory.md')
    .action((options) => {
      filterFolder = typeof options.ignore === 'undefined' ? filterFolder : options.ignore;
      const processingCenter = new EventProcessingCenter({ filterFolder })
      processingCenter.useInquirer(`${options.export}`);
    })
  program.parse(process.argv);
  ```

  ```JavaScript [event.js]
  #!/usr/bin/env node
  import path from 'path';
  import fs  from 'fs';
  import ora from 'ora';
  import inquirer from 'inquirer';
  import chalk from 'chalk';

  const warning = chalk.yellow;
  const cyanBright = chalk.cyanBright;

  const spinner = ora({
    text: 'Building...',
    color: 'green'
  });

  const directoryEnum = {
    outermost: '    │',
    start: '    ├── ',
    end: '    └── ',
    line: '  #'
  }

  const target = process.cwd();
  const rootName = target.split('\\')[target.split('\\').length -1];

  const treeSort = (data, objectPath) => {
    return data.sort((a, b) => {
      const stateA = fs.statSync(path.join(objectPath, a))
      const stateB = fs.statSync(path.join(objectPath, b))
      if (stateA.isDirectory() && stateB.isDirectory()) return a > b ? 1 : -1;
      if (!stateA.isDirectory() && !stateB.isDirectory())return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
      if (stateA.isDirectory() && !stateB.isDirectory()) return -1;
      if (!stateA.isDirectory() && stateB.isDirectory()) return 1;
      return 1
    });
  }

  const EventProcessingCenter = class {
    constructor(props) {
      this.filterFolder = props.filterFolder;
      this.directory = ``;
      this.tree = {
        root: rootName,
        children: []
      }
    }

    useQueryFile(filterFolder) {
      const buildTree = (objectPath, start = '') => {
        const docs = treeSort(fs.readdirSync(objectPath), objectPath);
        docs.forEach((item, index) => {
          const absolutePath = path.join(objectPath, item)
          const state = fs.statSync(absolutePath);
          /**folder*/
          if (state.isDirectory() && !filterFolder.includes(item)) {
            this.directory += `${start}${directoryEnum.start}${item}${directoryEnum.line}\n`;

            const level = objectPath.split('\\').length > 1 ? objectPath.split('\\').length -2 : 0;
            const newStart = directoryEnum.outermost.repeat(level)
            buildTree(path.join(`${objectPath}\\${item}`), newStart);
          } else {
            if (docs.length === (index + 1)) {
              this.directory += `${start}${directoryEnum.end}${item}${directoryEnum.line}\n`;
            } else {
              this.directory += `${start}${directoryEnum.start}${item}${directoryEnum.line}\n`;
            }
          }
        })
      }

      return {
        buildTree
      }
    }

      run() {
        spinner.start();
        setTimeout(() => {
          const { buildTree } = this.useQueryFile(this.filterFolder);
          buildTree(process.cwd());
          const data =  `${`# ${rootName} 项目目录\n\n`}` + '```ts\n' + this.directory + '```\n'

          fs.writeFile(this.fileName, data, (error) => {
            if (error) {
              console.log(error(new Error(`write ${this.fileName} error`, { err })))
              return;
            }
          })
          spinner.succeed('The directory built successfully!!');
        }, 1000)
      }

      useInquirer (fileName){
        const docs = fs.readdirSync(process.cwd());
        this.fileName = fileName;
        if (docs.includes(fileName)) {
          const coverInit = [
            {
              type: 'confirm',
              name: 'confirm',
              message: warning(`${cyanBright(fileName)} already exists in the Target directory ${cyanBright(process.cwd())} folder, do you want to continue? (y/n)`),
              default: 'y'
            }
          ];
          inquirer.prompt(coverInit).then(({ confirm }) => {
            if (confirm) {
              this.run();
            } else {
              spinner.info('Cancel Build -');
            }
          });
          return;
        }
        this.run();
      }
  }

  export default EventProcessingCenter
  ```
  :::

## 🌱 关联库说明

- commander

  [commander](https://www.npmjs.com/package/commander) 是一个基于 Node.js 的轻量级命令行界面开发库，它提供了一种简单而直观的方式来创建命令行工具，并轻松解析命令行参数。开发者可以通过定义命令、选项和参数来创建自定义的命令行工具。

  ```Bash
  npm install commander
  ```

- inquirer

  [inquirer](https://www.npmjs.com/package/inquirer) 是一个用于创建交互式命令行界面的 Node.js 库。它提供了一系列丰富的界面元素，如询问问题、展示列表、选择选项等，使开发者能够直观地与用户进行命令行交互。

  ```Bash
  npm install inquirer
  ```

  ```JavaScript
  import inquirer from 'inquirer';

  inquirer
    .prompt([
      /* Pass your questions in here */
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  ```

- chalk

  [chalk](https://www.npmjs.com/package/chalk) 是一个用于在命令行界面中美化文本输出的 npm 库。它提供了一种简单而灵活的方式来为文本添加颜色、样式和格式，以便更好地突出显示或区分不同类型的文字。

  ```Bash
  npm install chalk
  ```

  使用 chalk 非常简单，只需引入库，然后调用相应的方法即可对文本进行样式设置。可以将 chalk 应用于打印日志、输出错误信息、高亮关键字等各种场景。

  <cdnImg src="npm-chalk" />

  ```JavaScript
  import ora from 'ora';

  import chalk from 'chalk';

  const log = console.log;

  // Combine styled and normal strings
  log(chalk.blue('Hello') + ' World' + chalk.red('!'));

  // Compose multiple styles using the chainable API
  log(chalk.blue.bgRed.bold('Hello world!'));

  // Pass in multiple arguments
  log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

  // Nest styles
  log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

  // Nest styles of the same type even (color, underline, background)
  log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
  ));

  // ES2015 template literal
  log(`
  CPU: ${chalk.red('90%')}
  RAM: ${chalk.green('40%')}
  DISK: ${chalk.yellow('70%')}
  `);

  // Use RGB colors in terminal emulators that support it.
  log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
  log(chalk.hex('#DEADED').bold('Bold gray!'));
  ```

- ora

  [ora](https://www.npmjs.com/package/ora) 是一个用于在命令行界面显示优雅加载图标和消息的 npm 库。它提供了一种简单而灵活的方式来增强命令行界面的用户体验。借助 [ora](https://www.npmjs.com/package/ora)，开发者可以在命令行界面显示一个旋转的加载图标或自定义文本消息，以便向用户展示正在进行的操作。

  ```Bash
  npm install ora
  ```

  创建一个 ora 实例，然后调用它的方法来显示加载图标或消息

  ```JavaScript
  import ora from 'ora';

  const spinner = ora({
    text: 'Building...',
    color: 'green'
  });

  // 开启 loading
  spinner.start();

  spinner.succeed('succeed');   // 成功 ✔
  spinner.fail('fail');         // 失败 ✖
  spinner.warn('warn');         // 警告 ⚠
  spinner.info('info');         // 消息 ℹ
  ```