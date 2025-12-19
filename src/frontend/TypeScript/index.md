# TypeScript 学习笔记

## 安装

1. npm install -g typescript 安装typescript编译器
2. npm install -g ts-node 全局安装ts-node 可以直接运行ts文件
3. npx tsc --init 生成tsconfig.json配置文件
4. npm install -g nodemon 全局安装nodemon 监听文件变化实现热更新

## 配置

1. 配置tsconfig.json   配置了include之后，可以直接运行tsc命令，编译整个项目

## 编译

1. tsc 编译的ts文件
2. ts-node src/index.ts 直接运行ts文件
3. nodemon --exec ts-node src/index.ts  监听 ts文件实现热更新

## 插件以及配置

1. typescript inlay hints  设置搜索这个 在工作区勾选配置可以显示类型提示
2. Error Lens 显示错误提示
