
## npm install

- 全局安装

  npm install webpack -g

- 局部安装

  npm install webpack

如何选择 全局安装 or 局部安装 ？

局部安装意味着项目中存在着对某个包的依赖，但项目之间依赖的包的版本又可能存在着差异，所以只适用于局部安装

全局安装通常作为一个工具使用，例如各种的脚手架工具，yarn，等等  并不和某个项目联系

仅执行 npm install 时，会在项目的 package.json 中寻找依赖(dependencies/devDependencies)进行安装


`--save` `-S` -> dependencies

`--save-dev` `-D` -> devDependencies


npm get cache

npm uninstall package

npm rebuild

npm clear cache


npx 常用于调用项目（node_modules）中某个模块的指令

./node_modules/.bin/webpack --version

script: {
  "webpack": "webpack --version"
}

npx webpack --version